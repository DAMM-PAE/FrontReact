import React, {useState, useEffect} from "react";
import "./pantallaBar.css";
import { useLocation } from "react-router-dom";
import logo from "../pantallaLlista/logo3.png";
import back from "./back.png";
import GoogleMapReact from 'google-map-react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../global';

function PantallaBar() {
  const location = useLocation();
  const bar = location.state.bar;
  const navigate = useNavigate();
  const [allBars, setAllBars] = useState([]);

  
  useEffect(() => {
    fetchBars();
  }, []);
  
  const fetchBars = async () => {
    const url = baseUrl + '/api/bars';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllBars(data);
    } catch (error) {
      console.error('Error fetching bars data:', error);
    }
  };

  const defaultProps = {
    center: {
      lat: bar ? bar.latitud : 0,
      lng: bar ? bar.longitud : 0
    },
    zoom: 16
  };

  const goBack = () => {
    navigate('/list');
  }

  const deleteBar = async () => {
    // Mostrar una alerta de confirmación antes de borrar
    const isConfirmed = window.confirm("Estàs segur que vols eliminar el bar?");
    
    if (isConfirmed) {
      // Borrar el bar aquí
      const id = bar.id;
      const url = baseUrl + '/api/bars/' + id + '/';
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      // BORRAR BAR API
      navigate('/list');
    }
  };

  const editBar = () => {
    navigate('/bar/' + bar.id + '/edit', { state: { bar: bar , iot: bar.iot, bars: allBars} });
  }

  const registarEntrega = () => {
    navigate('/delivery', { state: { bar: bar } });
  }

  const veureRegistreEntregues = () => {
    navigate('/delivery-list/' + bar.id, { state: { bar: bar } });
  }

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
        <li onClick={() => handleOptionChange('/delivery')}>
          Registrar Entrega
        </li>
        <li onClick={() => handleOptionChange('/list')}>
          Vista Llista
        </li>
        <li onClick={() => handleOptionChange('/vistaCalendari')}>
          Vista Calendari
        </li>
        <li onClick={() => handleOptionChange('/')}>
          Sortir
        </li>
      </ul>

    </div>
    </div>
      </header>

      <section>
      <div class="bars-top">
          <h1 class="llista-titol">
          <img src={back} className="back" alt="back" onClick={goBack} />
            <span>{bar ? bar.nom : 'Nombre del Bar'}</span>
          </h1>
          <div className="buttons-container">
          <button className="button-env" onClick={editBar}>Editar</button>
          <button className="button-env" onClick={deleteBar}>Eliminar</button>
          </div>
        </div>
      </section>



      <div className="menu-total">
        <div className="menu-details">
          {bar ? (
            <div>
              <p><span className="bold-text">Adreça:</span> {bar.direccio}, {bar.numCarrer}</p>
              <p><span className="bold-text">Codi Postal:</span> {bar.codiPostal}</p>
              <p><span className="bold-text">Província/Ciutat:</span> {`${bar.provincia}/${bar.ciutat}`}</p>
              <p><span className="bold-text">Percentatge:</span> {bar.percentatge}%</p>
              <p><span className="bold-text">Data de predicció de pròxima entrega:</span> {bar.data}</p>
              <button className="button-env" style={{ marginRight: '5rem' }} onClick={registarEntrega}>Registrar Entrega</button>
              <button className="button-env" onClick={veureRegistreEntregues}>Veure Registre d'Entregues</button>
            </div>
          ) : (
            <p>No se ha proporcionado información del bar.</p>
          )}
        </div>
        <div className="menu-mapa" style={{ height: '18rem', width: '35%' }}>
          {bar ? (
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAYJabk1oyB6mvqEb7kZE7DCetPcFfm_6g" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => {
                new maps.Marker({
                  position: { lat: bar.latitud, lng: bar.longitud },
                  map,
                  title: bar.nom
                });
              }}
            />
          ) : (
            <p>No se ha proporcionado información del bar para mostrar el mapa.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PantallaBar;




