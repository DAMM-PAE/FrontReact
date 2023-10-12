import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./pantallaInicial.css";
import logo from "./dammlogo.jpg";

function PantallaInicial() {

  const [showFilters, setShowFilters] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [ciutat, setCiutat] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [tipus, setTipus] = useState("");
  const [percentatge, setPercentatge] = useState("");

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

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

  const handleTipusChange = (e) => {
    const selectedTipus = e.target.value;
    setTipus(selectedTipus);

    if (selectedTipus === "IoT") {
      setPercentatge("");
      document.getElementById("percentatge_restant").disabled = false;
    } else {
      setPercentatge("");
      document.getElementById("percentatge_restant").disabled = true;
    }

  }

  const handleDataChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date();
  
    if (selectedDate === "Avui") {
      setSelectedDate("Avui");
      setStartDate(today);
      setEndDate(today);
    } else if (selectedDate === "Demà") {
      setSelectedDate("Demà");
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setStartDate(tomorrow);
      setEndDate(tomorrow);
    } else if (selectedDate === "Aquesta setmana") {
      setSelectedDate("Aquesta setmana");
      setStartDate(today);
      setEndDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())));
    } else if (selectedDate === "Aquest mes") {
      setSelectedDate("Aquest mes");
      setStartDate(today);
      setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
    } else {
      //no date selected
      setSelectedDate("");
      setStartDate(today);
      //end date is set to 1 year from now
      setEndDate(new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()));
    }
    
    if (selectedDate !== "Escull data") {
      setShowCalendar(false);
    }
    else {
      setSelectedDate("Escull data");
      setShowCalendar(true);
    }

    console.log("Fecha de inicio:", startDate);
    console.log("Fecha de fin:", endDate);
  };  

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

      <div className="menu-total">
       <div className="filtres-llista"> 
      <div class="first-row">
          <label htmlFor="show-form-toggle" class="btn btn-primary" onClick={handleShowFilters}> 
            Filtres
          </label>
        </div>
        {showFilters && (
          <div class="form-group">
            <form class="form-inline" >
              <div class="provincia-ciutat">
                <div className="provincia">
            <label htmlFor="provincia">Província</label>
              <select className="provincia-select" name="provincia" id="provincia" value={provincia} onChange={handleProvinciaChange}>
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
              </div>

              <div className="ciutat">
            <label htmlFor="ciutat">Ciutat</label>
              <select className="ciutat-select" name="ciutat" id="ciutat" value={ciutat} onChange={(e) => setCiutat(e.target.value)}>
                <option value=""></option>
                {ciutatsPerProvincia[provincia]?.map((ciutat) => (
                  <option key={ciutat} value={ciutat}>{ciutat}</option>
                ))}
                <option value="Altres">Altres</option>
              </select>
              </div>
              </div>

            <div className="tipus-percentatge">
              <div className="tipus">
            <label htmlFor="tipus">Tipus</label>
              <select className="tipus-select" name="tipus" id="tipus" value={tipus} onChange={handleTipusChange}>
                <option value=""></option>
                <option value="IoT">IoT</option>
                <option value="no_IoT">No IoT</option> 
              </select>
              </div>
            
              <div className="percentatge">
            <label htmlFor="percentatge_restant">Percentatge restant</label>
              <select className="percentatge-select" name="percentatge_restant" id="percentatge_restant"
                      value={percentatge} disabled={tipus !== "IoT"} onChange={(e) => setPercentatge(e.target.value)}>
                <option value=""></option>
                <option value="0-25">0-25</option>
                <option value="25-50">25-50</option>
                <option value="50-75">50-75</option>
                <option value="75-100">75-100</option>
              </select>
            </div>
            </div>
                
            <div className="data-calendari">
              <div className="data">
              <label htmlFor="data">Data entrega</label>
            <select className="data-select" name="data" id="data" value = {selectedDate} onChange={handleDataChange}>
              <option value=""></option>
              <option value="Avui">Avui</option>
              <option value="Demà">Demà</option>
              <option value="Aquesta setmana">Aquesta setmana</option>
              <option value="Aquest mes">Aquest mes</option>
              <option value="Escull data">Escull data</option>
            </select>
            </div>
          
            {showCalendar && (
            <div className="calendari">
              <label htmlFor="calendari">Calendari</label>
              {/* Utiliza el componente DateRange para seleccionar un rango de fechas */}
              <DateRange
                onChange={(ranges) => {
                  // El objeto 'ranges' contiene el rango de fechas seleccionado
                  const { selection } = ranges;
                  // Actualiza 'startDate' y 'endDate' con el rango seleccionado
                  setStartDate(selection.startDate);
                  setEndDate(selection.endDate);
                  // Puedes utilizar startDate y endDate como necesites
                  console.log("Fecha de inicio:", selection.startDate);
                  console.log("Fecha de fin:", selection.endDate);
                }}
                ranges={[
                  {
                    startDate: startDate,
                    endDate: endDate,
                    key: "selection",
                  },
                ]}
                
                minDate={new Date()} // Fecha mínima es la fecha actual
                maxDate={maxDate}
              />
            </div>
          )}
          </div>
            </form>
            <button className="btn btn-primary">Cerca</button>
          </div>

        

        )} 

     <div className="menu-llista">LLISTA</div>
      </div>
     <div className="menu-right">
      <label>RECORDATORIS I GRÀFICS</label>
      </div>

     </div>
    </div>
  );
}

export default PantallaInicial;