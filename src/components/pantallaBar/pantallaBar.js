import React from "react";
import "./pantallaBar.css";
import { useLocation } from "react-router-dom";
import logo from "../pantallaInicial/dammlogo.jpg";
import GoogleMapReact from 'google-map-react';

function PantallaBar() {
  const location = useLocation();
  const bar = location.state.bar;

  const defaultProps = {
    center: {
      lat: bar ? bar.latitud : 0,
      lng: bar ? bar.longitud : 0
    },
    zoom: 16
  };

  return (
    <div>
      <div className="menu-left">
        <div className="logo">
          <img src={logo} className="logodamm" alt="logo" />
        </div>
      </div>
      <div className="menu-top"></div>
      <div className="menu-total">
        <div className="menu-details">
          <h1>{bar ? bar.nom : 'Nombre del Bar'}</h1>
          {bar ? (
            <div>
              <p><span className="bold-text">Adreça:</span> {bar.direccio}, {bar.numCarrer}</p>
              <p><span className="bold-text">Codi Postal:</span> {bar.codiPostal}</p>
              <p><span className="bold-text">Província/Ciutat:</span> {`${bar.provincia}/${bar.ciutat}`}</p>
              <p><span className="bold-text">Percentatge:</span> {bar.percentatge}%</p>
              <p><span className="bold-text">Data de predicció de pròxima entrega:</span> {bar.data.toLocaleDateString()}</p>
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




