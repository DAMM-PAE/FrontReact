import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ca'; // Importa el idioma catalán
import { useLocation, useNavigate } from 'react-router-dom';
import './vistaCalendari.css';
import logo from './logo3.png';
import { baseUrl } from '../../global';
import back from './back.png';

function VistaCalendari() {
  const { state } = useLocation();
  const { bars } = state || {};
  const navigate = useNavigate();
  const [allBars, setAllBars] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().toDate());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [scheduledDeliveries, setScheduledDeliveries] = useState([]);

  useEffect(() => {
    fetchBars();
  }, []);

  const fetchBars = async () => {
    const url = baseUrl + '/api/bars';
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Transforma date a DD-MM-YYYY
      data.forEach((bar, index) => {
        const date = moment(bar.data);
        data[index].data = date.format('DD-MM-YYYY');
      });
  
      setAllBars(data);
  
      // Actualiza los eventos del calendario
      setEvents(
        data.map(bar => ({
          title: bar.nom,
          start: moment(bar.data, 'DD-MM-YYYY').toDate(), // Usa toDate() para obtener un objeto Date
          end: moment(bar.data, 'DD-MM-YYYY').add(1, 'hour').toDate(), // Puedes ajustar esto según tus necesidades
          id: bar.id,
        }))
      );
    } catch (error) {
      console.error('Error fetching bars data:', error);
    }
  };
  
  const handleDateSelect = ({ start }) => {
    setSelectedDate(start);
    
    // Mantén la pista de la ranura seleccionada
    setSelectedSlot({ start });
  
    // Filtra las entregas programadas para el día seleccionado
    const deliveriesForSelectedDate = allBars.filter(
      bar => moment(bar.data, 'DD-MM-YYYY').isSame(moment(start), 'day')
    );
    setScheduledDeliveries(deliveriesForSelectedDate);
  };

  const handleEventClick = event => {
    const selectedBar = allBars.find(bar => bar.id === event.id);

    if (selectedBar) {
      const deliveriesForSelectedDate = allBars.filter(
        bar => moment(bar.data).isSame(moment(selectedDate), 'day')
      );

      navigate(`/bar/${event.id}`, { state: { bar: selectedBar } });

      // Mostrar los nombres de los bares en la lista
      setScheduledDeliveries(deliveriesForSelectedDate.map(bar => bar.nom));
    }
  };

  const handleBarClick = bar => {
    navigate(`/bar/${bar.id}`, { state: { bar } });
  };

  const handleOptionChange = (e) => {
    const selectedOption = e;
    if (selectedOption === "/addBar") {
      navigate('/addBar', {state: { bars: allBars }});
    } else if (selectedOption === "/delivery") {
      navigate('/delivery', {state: { bars: allBars }});
    } else if (selectedOption === "/list") {
      navigate('/list', {state: { bars: allBars }});
    } else if (selectedOption === "/vistaCalendari") {
      navigate('/vistaCalendari', {state: { bars: allBars }});
    } else if (selectedOption === "/") {
      navigate('/');
    }
  };


  const goBack = () => {
    navigate(-1);
  }


  return (
    <div>
      <header>
        <div className="header-div">
          <div className="logo">
            <img src={logo} className="logodamm" alt="logo" />
          </div>
          <div class="beerdrive-title">
            <span class="beerdrive-span">BEERDRIVE</span>
          </div>
          
      <div>
      <ul className="menu">
      <li onClick={() => handleOptionChange('/addBar')}>
        Afegir Bar
      </li>
        <li onClick={() => handleOptionChange('/list')}>
          Vista Llista
        </li>
        <li className="menu-li-active" onClick={() => handleOptionChange('/vistaCalendari')}>
          Vista Calendari
        </li>
        <li onClick={() => handleOptionChange('/')}>
          Sortir
        </li>
      </ul>

    </div>
    </div>
      </header>
      

      <div className="menu-top"></div>
      <div className="content-container">
        <div className="calendar-container">
        <img src={back} className="back" alt="back" onClick={goBack} />
          <Calendar
            events={events}
            startAccessor="start"
            endAccessor="end"
            localizer={momentLocalizer(moment)}
            views={['month']}
            onSelectEvent={handleEventClick}
            onSelectSlot={handleDateSelect}
            defaultDate={moment().toDate()} // Establece la fecha predeterminada como hoy
            selectable
          />
        </div>
        <div className="task-list-container">
          <h2>Entregues predites pel dia {moment(selectedDate).format('DD/MM/YY')}</h2>
          <ul>
          {scheduledDeliveries.length > 0 ? (
              scheduledDeliveries.map(bar => (
                <li key={bar.id} onClick={() => handleBarClick(bar)}>
                  {bar.nom}
                </li>
              ))
            ) : (
              <li>No hi ha cap entrega predita per a aquest dia</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VistaCalendari;
