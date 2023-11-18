import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ca'; // Importa el idioma catalán
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './vistaCalendari.css';
import logo from './dammlogo.jpg';

function VistaCalendari() {
  const { state } = useLocation();
  const { bars } = state || {};
  const navigate = useNavigate();

  useEffect(() => {
    moment.locale('ca'); // Configura el idioma catalán
  }, []);

  const events = bars.map(bar => ({
    title: bar.nom,
    start: new Date(bar.data),
    end: new Date(bar.data),
    id: bar.id, // Asegúrate de tener una propiedad única para cada bar, como un ID
  }));

  const localizer = momentLocalizer(moment);

  const handleVistaLlista = () => {
    navigate('/', { state: { bars: bars } });
  };

  const handleEventClick = event => {
    // Navega a la vista específica del bar al hacer clic en un evento
    navigate(`/bar/${event.id}`, { state: { bar: bars.find(bar => bar.id === event.id) } });
  };

  return (
    <div>
      <div className="menu-left">
        <div className="logo">
          <img src={logo} className="logodamm" alt="logo" />
        </div>
        <div className="menu-options">
            <button className="menu-options-llista" onClick={handleVistaLlista}>
              Vista Llista
            </button>
            <button className="menu-options-calendari">Vista Calendari</button>
          </div>
      </div>
      <div className="menu-top"></div>
      <div className="calendar-container">
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          localizer={localizer}
          views={['month']}
          onSelectEvent={handleEventClick} // Maneja el clic en un evento
        />
      </div>
    </div>
  );
}

export default VistaCalendari;
