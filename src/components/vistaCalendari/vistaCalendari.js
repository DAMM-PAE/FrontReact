import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ca'; // Importa el idioma catalán
import { useLocation, useNavigate } from 'react-router-dom';
import './vistaCalendari.css';
import logo from './logo3.png';

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
    const url = 'http://nattech.fib.upc.edu:40540/api/bars';
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Transforma date a dd-mm-yyyy
      data.forEach((bar, index) => {
        const date = moment(bar.data);
        data[index].data = date.format('DD-MM-YYYY');
      });

      setAllBars(data);

      // Actualiza los eventos del calendario
      setEvents(
        data.map(bar => ({
          title: bar.nom,
          start: moment(bar.data),
          end: moment(bar.data),
          id: bar.id,
        }))
      );
    } catch (error) {
      console.error('Error fetching bars data:', error);
    }
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

  const handleDateSelect = ({ start }) => {
    setSelectedDate(start);

    // Mantén la pista de la ranura seleccionada
    setSelectedSlot({ start });

    const deliveriesForSelectedDate = allBars.filter(
      bar => moment(bar.data).isSame(moment(start), 'day')
    );
    setScheduledDeliveries(deliveriesForSelectedDate);
  };

  const handleBarClick = bar => {
    navigate(`/bar/${bar.id}`);
  };

  return (
    <div>
      <header>
        <div className="header-div">
          <div className="logo">
            <img src={logo} className="logodamm" alt="logo" />
          </div>
          <div className="beerdrive-title">
            <span className="beerdrive-span">BEERDRIVE</span>
          </div>
        </div>
      </header>

      <div className="menu-top"></div>
      <div className="content-container">
        <div className="calendar-container">
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
          <h2>Entregas programadas para el día {moment(selectedDate).format('DD/MM/YY')}</h2>
          <ul>
          {scheduledDeliveries.length > 0 ? (
              scheduledDeliveries.map(bar => (
                <li key={bar.id} onClick={() => handleBarClick(bar)}>
                  {bar.nom}
                </li>
              ))
            ) : (
              <li>No hay entregas programadas para este día.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VistaCalendari;
