import React, { useState } from "react";
import "./pantallaInicial.css";
import logo from "./dammlogo.jpg";

function PantallaInicial() {

  const [showFilters, setShowFilters] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [ciutat, setCiutat] = useState("");

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  }

  const ciutatsPerProvincia = {
    "A Coruña": ["A Coruña", "Ferrol", "Santiago de Compostela"],
    "Álava": ["Vitoria-Gasteiz"],
    "Albacete": ["Albacete"],
    "Alicante": ["Alicante", "Elche"],
    "Almería": ["Almería", "Roquetas de Mar"],
    "Asturias": ["Gijón", "Oviedo"],
    "Ávila": ["Ávila"],
    "Badajoz": ["Badajoz", "Mérida"],
    "Baleares": ["Ibiza", "Palma de Mallorca"],
    "Barcelona": ["Badalona", "Barcelona", "Hospitalet de Llobregat, "],
    "Burgos": ["Burgos", "Miranda de Ebro"],
    "Cáceres": ["Cáceres"],
    "Cádiz": ["Cádiz", "Jerez de la Frontera"],
    "Cantabria": ["Santander"],
    "Castellón": ["Castellón de la Plana"],
    "Ciudad Real": ["Ciudad Real"],
    "Córdoba": ["Córdoba"],
    "Cuenca": ["Cuenca"],
    "Girona": ["Figueres", "Girona"],
    "Granada": ["Granada"],
    "Guadalajara": ["Guadalajara"],
    "Guipúzcoa": ["Irún", "San Sebastián"],
    "Huelva": ["Huelva"],
    "Huesca": ["Huesca"],
    "Jaén": ["Jaén"],
    "La Rioja": ["Logroño"],
    "Las Palmas": ["Las Palmas de Gran Canaria"],
    "León": ["León"],
    "Lleida": ["Lleida"],
    "Lugo": ["Lugo"],
    "Madrid": ["Alcalá de Henares", "Madrid"],
    "Málaga": ["Málaga", "Marbella"],
    "Murcia": ["Cartagena", "Murcia"],
    "Navarra": ["Pamplona"],
    "Ourense": ["Ourense"],
    "Palencia": ["Palencia"],
    "Pontevedra": ["Pontevedra", "Vigo"],
    "Salamanca": ["Salamanca"],
    "Santa Cruz de Tenerife": ["Santa Cruz de Tenerife"],
    "Segovia": ["Segovia"],
    "Sevilla": ["Sevilla"],
    "Soria": ["Soria"],
    "Tarragona": ["Reus", "Tarragona"],
    "Teruel": ["Teruel"],
    "Toledo": ["Toledo"],
    "Valencia": ["Castellón", "Valencia"],
    "Valladolid": ["Valladolid"],
    "Vizcaya": ["Bilbao"],
    "Zamora": ["Zamora"],
    "Zaragoza": ["Zaragoza"]
  }

  const handleProvinciaChange = (e) => {
    const selectedProvincia = e.target.value;
    setProvincia(selectedProvincia);
    setCiutat("");
  }

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

      
      <div class="first-row">
          <label htmlFor="show-form-toggle" class="btn btn-primary" onClick={handleShowFilters}> 
            Filtres
          </label>
        </div>
        {showFilters && (
          <div class="form-group">
            <form class="form-inline" >
            <label htmlFor="provincia">Província</label>
              <select name="provincia" id="provincia" value={provincia} onChange={handleProvinciaChange}>
                <option value=""></option>
                <option value="A Coruña">A Coruña</option>
                <option value="Álava">Álava</option>
                <option value="Albacete">Albacete</option>
                <option value="Alicante">Alicante</option>
                <option value="Almería">Almería</option>
                <option value="Asturias">Asturias</option>
                <option value="Ávila">Ávila</option>
                <option value="Badajoz">Badajoz</option>
                <option value="Baleares">Baleares</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Burgos">Burgos</option>
                <option value="Cáceres">Cáceres</option>
                <option value="Cádiz">Cádiz</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castellón">Castellón</option>
                <option value="Ciudad Real">Ciudad Real</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Girona">Girona</option>
                <option value="Granada">Granada</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Guipúzcoa">Guipúzcoa</option>
                <option value="Huelva">Huelva</option>
                <option value="Huesca">Huesca</option>
                <option value="Jaén">Jaén</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Las Palmas">Las Palmas</option>
                <option value="León">León</option>
                <option value="Lleida">Lleida</option>
                <option value="Lugo">Lugo</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option> 
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="Ourense">Ourense</option>
                <option value="Palencia">Palencia</option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Salamanca">Salamanca</option>
                <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                <option value="Segovia">Segovia</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Soria">Soria</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Teruel">Teruel</option>
                <option value="Toledo">Toledo</option>
                <option value="Valencia">Valencia</option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vizcaya">Vizcaya</option>
                <option value="Zamora">Zamora</option>
                <option value="Zaragoza">Zaragoza</option>
              </select>

            <label htmlFor="ciutat">Ciutat</label>
              <select name="ciutat" id="ciutat" value={ciutat} onChange={(e) => setCiutat(e.target.value)}>
                <option value=""></option>
                {ciutatsPerProvincia[provincia]?.map((ciutat) => (
                  <option key={ciutat} value={ciutat}>{ciutat}</option>
                ))}
                <option value="Altres">Altres</option>
              </select>

            <label htmlFor="tipus">Tipus</label>
              <select name="tipus" id="tipus">
                <option value=""></option>
                <option value="IoT">IoT</option>
                <option value="no_IoT">No IoT</option> 
              </select>

            <label htmlFor="percentatge_restant">Percentatge restant(només per IoT)</label>
              <select name="percentatge_restant" id="percentatge_restant">
                <option value=""></option>
                <option value="0-25">0-25</option>
                <option value="25-50">25-50</option>
                <option value="50-75">50-75</option>
                <option value="75-100">75-100</option>
              </select>

            <label htmlFor="data">Data pròxima entrega</label>
              <select name="data" id="data">
                <option value=""></option>
                <option value="Avui">Avui</option>
                <option value="Demà">Demà</option>
                <option value="Aquesta setmana">Aquesta setmana</option>
                <option value="Aquest mes">Aquest mes</option>
              </select>
            </form>
          </div>
        )}
    </div>
  );
}

export default PantallaInicial;