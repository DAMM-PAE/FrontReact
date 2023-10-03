import React from "react";
import "./pantallaInicial.css";
import logo from "./dammlogo.jpg";

function PantallaInicial() {
  return (
    <div>
      <div className="menu-left">
        <div className="logo">
          <img src={logo} className="logodamm" alt="logo" />
        </div>
      </div>
      <div className="menu-top">
        <input type="text" className="cercador" placeholder="Cerca!"></input>
      </div>
    </div>
  );
}

export default PantallaInicial;