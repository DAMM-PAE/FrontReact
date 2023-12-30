import React, {useEffect, useState} from 'react';
import logo from '../pantallaLlista/logo3.png';
import './editBar.css';
import { useLocation } from "react-router-dom";

const EditBar = () => {

  const location = useLocation();
  const bar = location.state.bar;
    
    const [provincia, setProvincia] = useState('');
    const [ciutat, setCiutat] = useState('');

    const [barName, setBarName] = useState('');
    const [barAdreca, setBarAdreca] = useState('');
    const [barNumCarrer, setBarNumCarrer] = useState('');
    const [barCodiPostal, setBarCodiPostal] = useState('');
    const [barLatitud, setBarLatitud] = useState('');
    const [barLongitud, setBarLongitud] = useState('');
    const [barIoT, setBarIoT] = useState(false);
    const [barTipus, setBarTipus] = useState('');

    useEffect(() => {

      console.log(bar);
      // Establecer los valores por defecto cuando se proporciona el bar
      if (bar) {
        setBarName(bar.nom || '');
        setProvincia(bar.provincia || '');
        setCiutat(bar.ciutat || '');
        setBarAdreca(bar.direccio || '');
        setBarNumCarrer(bar.numCarrer || '');
        setBarCodiPostal(bar.codiPostal || '');
        setBarLatitud(bar.latitud || '');
        setBarLongitud(bar.longitud || '');
        setBarIoT(bar.iot || false);
        setBarTipus(bar.tipusBar || '');
      }
    }, [bar]);

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

    const editBar = () => {
        const barName = document.getElementById("barNameInput").value;
        const barAdreca = document.getElementById("barAdrecaInput").value;
        const barNumCarrer = document.getElementById("barNumCarrerInput").value;
        const barCodiPostal = document.getElementById("barCodiPostalInput").value;
        const barLatitud = document.getElementById("barLatitudInput").value;
        const barLongitud = document.getElementById("barLongitudInput").value;
        const barIoT = document.getElementById("barIoTInput").checked;
        const barTipus = document.getElementById("tipus").value;
        const barCiutat = document.getElementById("ciutat").value;
        const barProvincia = document.getElementById("provincia").value;

        if (barName.trim() === "") {
            alert("El nom del bar no pot estar buit");
            return;
        }

        if (barNumCarrer.trim() !== "" && (isNaN(barNumCarrer) || barNumCarrer < 0)) {
            alert("El número de carrer ha de ser un número");
            return;
        }

        if (barCodiPostal.trim() !== "" && (isNaN(barCodiPostal) || barCodiPostal < 0)) {
            alert("El codi postal ha de ser un número");
            return;
        }

        if (barLatitud.trim() !== "" && (isNaN(barLatitud) || barLatitud < 0)) {
            alert("La latitud ha de ser un número");
            return;
        }

        if (barLongitud.trim() !== "" && (isNaN(barLongitud) || barLongitud < 0)) {
            alert("La longitud ha de ser un número");
            return;
        }

        console.log(bar);

        //LLamar a la API para añadir el bar
        const data = {
            "nom": barName,
            "provincia" : barProvincia,
            "ciutat" : barCiutat,
            "codiPostal" : barCodiPostal,
            "direccio" : barAdreca,
            "numCarrer" : barNumCarrer,
            "tipusBar" : barTipus,
            "latitud" : barLatitud,
            "longitud" : barLongitud,
            "hasIot" : barIoT
        }
        //LLAMADA A API
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
                    <span>Editar Bar</span>
                  </h1>
                </div>
              </section>
        
              <div className="form-container">
                <div className="form-group1">

                <div className="input-container">
                    <label className="filtres-select1">Nom *</label>
                    <input
                      type="text"
                      id="barNameInput"
                      className="input-field1-nom"
                      value={barName}
                      onChange={(e) => setBarName(e.target.value)}
                    />
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
                    <input type="text" id="barAdrecaInput" className="input-field1-adreca" value={barAdreca}
                      onChange={(e) => setBarAdreca(e.target.value)} />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Número Carrer</label>
                    <input type="text" id="barNumCarrerInput" className="input-field1-numCarrer" value={barNumCarrer}
                      onChange={(e) => setBarNumCarrer(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Codi Postal</label>
                    <input type="text" id="barCodiPostalInput" className="input-field1-codiPostal" value={barCodiPostal}
                      onChange={(e) => setBarCodiPostal(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Tipus</label>
                    <select className="filtres-select-tipus" name="tipus" id="tipus"value={barTipus}
                      onChange={(e) => setBarName(e.target.value)}>
                        <option value="Bar">Option 1</option>
                        <option value="Restaurant">Option 2</option>
                        <option value="Cafeteria">Option 3</option>
                        <option value="Altres">Option 4</option>
                    </select>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Latitud</label>
                    <input type="text" id="barLatitudInput" className="input-field1-lat" value={barLatitud}
                      onChange={(e) => setBarLatitud(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Longitud</label>
                    <input type="text" id="barLongitudInput" className="input-field1-long" value={barLongitud}
                      onChange={(e) => setBarLongitud(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">IoT</label>
                    <input type="checkbox" id="barIoTInput" className="input-field1-iot" value={barIoT}
                      onChange={(e) => setBarIoT(e.target.value)}/>
                </div>

                  <button className="button-env" onClick={editBar}>
                    Editar
                  </button>
                </div>
              </div>
            </div>
                       );
};

export default EditBar;
