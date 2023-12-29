import React from 'react';
import logo from '../pantallaLlista/logo3.png';
import './afegirBar.css';

const AfegirBar = () => {
    
    const [provincia, setProvincia] = React.useState('');
    const [ciutat, setCiutat] = React.useState('');

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
        "Barcelona": ["Badalona", "Barcelona", "Hospitalet de Llobregat"],
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
        
              <section>
                <div className="bars-top">
                  <h1 className="llista-titol">
                    <span>Afegir Bar</span>
                  </h1>
                </div>
              </section>
        
              <div className="form-container">
                <div className="form-group1">

                <div className="input-container">
                    <label className="filtres-select1">Nom </label>
                    <input type="text" id="barNameInput" className="input-field1" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Província</label>
                    <select className="filtres-select-prov" name="provincia" id="provincia" value={provincia} onChange={handleProvinciaChange}>
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

                <div className="input-container">
                    <label className="filtres-select1">Ciutat</label>
                    <select className="filtres-select-ciutat" name="ciutat" id="ciutat" value={ciutat} onChange={(e) => setCiutat(e.target.value)}>
                    <option value=""></option>
                        {ciutatsPerProvincia[provincia]?.map((ciutat) => (
                        <option key={ciutat} value={ciutat}>{ciutat}</option>
                        ))}
                        <option value="Altres">Altres</option>
                    </select>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Adreça</label>
                    <input type="text" id="barAdrecaInput" className="input-field1-adreca" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Número Carrer</label>
                    <input type="text" id="barNumCarrerInput" className="input-field1-numCarrer" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Codi Postal</label>
                    <input type="text" id="barCodiPostalInput" className="input-field1-codiPostal" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Tipus</label>
                    <select className="filtres-select-tipus" name="tipus" id="tipus">
                        <option value="Bar">Option 1</option>
                        <option value="Restaurant">Option 2</option>
                        <option value="Cafeteria">Option 3</option>
                        <option value="Altres">Option 4</option>
                    </select>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Latitud</label>
                    <input type="text" id="barLatitudInput" className="input-field1-lat" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Longitud</label>
                    <input type="text" id="barLongitudInput" className="input-field1-long" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">IoT</label>
                    <input type="checkbox" id="barIoTInput" className="input-field1-iot" />
                </div>

                  <button className="button-env">
                    Afegir
                  </button>
                </div>
              </div>
            </div>
                       );
};

export default AfegirBar;
