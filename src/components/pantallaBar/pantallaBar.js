import React from "react";
import { useLocation } from "react-router-dom";

function PantallaBar() {
  const location = useLocation();
  const bar = location.state.bar;

  return (
    <div>
      <h2>Detalles del Bar</h2>
      {bar ? (
        <div>
          <p>Bar Name: {bar.nom}</p>
          <p>Provincia/Ciudad: {`${bar.provincia}/${bar.ciutat}`}</p>
          <p>Percentatge: {bar.percentatge}</p>
          <p>Fecha: {bar.data.toLocaleDateString()}</p>
          {/* Otros detalles del bar */}
        </div>
      ) : (
        <p>No se ha proporcionado información del bar.</p>
      )}
    </div>
  );
}

export default PantallaBar;