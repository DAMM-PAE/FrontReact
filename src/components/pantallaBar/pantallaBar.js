import React from "react";
import "./pantallaBar.css";
import { useLocation } from "react-router-dom";
import logo from "../pantallaLlista/logo3.png";
import back from "./back.png";
import GoogleMapReact from 'google-map-react';
import { useNavigate } from 'react-router-dom';

function PantallaBar() {
  const location = useLocation();
  const bar = location.state.bar;
  const navigate = useNavigate();

  const defaultProps = {
    center: {
      lat: bar ? bar.latitud : 0,
      lng: bar ? bar.longitud : 0
    },
    zoom: 16
  };

  const goBack = () => {
    //volver a pantalla anterior, no url, sino a la pantalla anterior
    navigate(-1);
  }

  const deleteBar = () => {
    //obtener id del bar
    const id = bar.id;
    //BORRAR BAR API
    navigate('/list');
  }

  const editBar = () => {
    navigate('/bar/' + bar.id + '/edit', { state: { bar: bar } });
  }


  return (
    <div>
      <header>
        <div className= "header-div">
        <div className="logo">
          <img src={logo} className="logodamm" alt="logo" />
        </div>
        <div class="beerdrive-title">
          <span class="beerdrive-span">BEERDRIVE</span>
        </div></div>
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




