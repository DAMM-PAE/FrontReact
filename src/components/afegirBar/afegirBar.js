import React, {useEffect} from 'react';
import logo from '../pantallaLlista/logo3.png';
import './afegirBar.css';
import back from './back.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../global';


const AfegirBar = () => {
    
    const location = useLocation();
    const allBars = location.state.bars;
    const navigate = useNavigate();
    const [provincia, setProvincia] = React.useState('');
    const [ciutat, setCiutat] = React.useState('');
    const [barTypes, setBarTypes] = React.useState([]);

    const ciutatsPerProvincia = {
        "A Coruña": ["A Coruña", "Ferrol", "Santiago de Compostela"],
        "Álava": ["Vitoria-Gasteiz"],
        "Albacete": ["Albacete", "Benidorm"],
        "Alicante": ["Alicante", "Elche"],
        "Almería": ["Almería", "Roquetas de Mar"],
        "Asturias": ["Gijón", "Oviedo"],
        "Ávila": ["Ávila"],
        "Badajoz": ["Badajoz", "Mérida"],
        "Barcelona": ["Badalona", "Barcelona", "L'Hospitalet de Llobregat"],
        "Bizcaya": ["Bilbao"],
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
        "Guipúzcoa": ["Irún", "Donostia-San Sebastián"],
        "Huelva": ["Huelva"],
        "Huesca": ["Huesca"],
        "Illes Balears": ["Ibiza", "Palma"],
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
        "Tarragona": ["Salou", "Tarragona"],
        "Teruel": ["Teruel"],
        "Toledo": ["Toledo"],
        "Valencia": ["Castellón", "Valencia"],
        "Valladolid": ["Valladolid"],
        "Zamora": ["Zamora"],
        "Zaragoza": ["Zaragoza"]
      }

      useEffect(() => {
        getBarTypes();
      }, []);
    
    const getBarTypes = async () => {
      const url = baseUrl + '/api/bars/types';
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBarTypes(data);
      } catch (error) {
        console.log(error);
      }
    }

    
    const handleProvinciaChange = (e) => {
        const selectedProvincia = e.target.value;
        setProvincia(selectedProvincia);
        setCiutat("");
      }

    const addBar =  async ()  => {
        const barName = document.getElementById("barNameInput").value;
        const barAdreca = document.getElementById("barAdrecaInput").value;
        const barNumCarrer = document.getElementById("barNumCarrerInput").value;
        const barCodiPostal = document.getElementById("barCodiPostalInput").value;
        const barLatitud = document.getElementById("barLatitudInput").value;
        const barLongitud = document.getElementById("barLongitudInput").value;
        const barIoT = document.getElementById("barIoTInput").checked;
        const barTipus = document.getElementById("tipus").value;
        let barCiutat = document.getElementById("ciutat").value;
        let barProvincia = document.getElementById("provincia").value;

        if (barName.trim() === "") {
            alert("El nom del bar no pot estar buit");
            return;
        }

        if (barProvincia.trim() === "") {
            alert("La província no pot estar buida");
            return;
        }

        if (barCiutat.trim() === "") {
            alert("La ciutat no pot estar buida");
            return;
        }

        if (barAdreca.trim() === "") {
            alert("L'adreça no pot estar buida");
            return;
        }

        if (barNumCarrer.trim() === "") {
            alert("El número de carrer no pot estar buit");
            return;
        }

        if (barNumCarrer.trim() !== "" && (isNaN(barNumCarrer) || barNumCarrer < 0)) {
            alert("El número de carrer ha de ser un número");
            return;
        }

        if (barCodiPostal.trim() === "") {
            alert("El codi postal no pot estar buit");
            return; 
        }

        if (barCodiPostal.trim() !== "" && (isNaN(barCodiPostal) || barCodiPostal < 0)) {
            alert("El codi postal ha de ser un número");
            return;
        }

        if (barLatitud.trim() !== "" && isNaN(barLatitud)) {
            alert("La latitud ha de ser un número");
            return;
        }

        if (barLongitud.trim() !== "" && isNaN(barLongitud)) {
            alert("La longitud ha de ser un número");
            return;
        }

        //pasar barProvincia y barCiutat a mayusculas
        barProvincia = barProvincia.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        barCiutat = barCiutat.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


        console.log(barProvincia);
        console.log(barCiutat);


        //LLamar a la API para añadir el bar
        const data = {
            "nom": barName,
            "provincia" : barProvincia,
            "ciutat" : barCiutat,
            "codiPostal" : barCodiPostal,
            "direccio" : barAdreca,
            "numCarrer" : barNumCarrer,
            "tipusBar" : barTipus,
            "iot" : barIoT
        }

        if (barLatitud.trim() !== "") {
            data["latitud"] = barLatitud;
        }
        if (barLongitud.trim() !== "") {
            data["longitud"] = barLongitud;
        }

        console.log(data);
        const url = baseUrl + '/api/bars/';
        try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
          });
          const responseData = await response.json();
          console.log(responseData);
          if (responseData.error) {
            alert(responseData.error);
            return;
          }
        } catch (error) {
          console.log(error);
        }
        alert("Bar afegit correctament");
        window.location.href = "/list";
    }

    const goBack = () => {
      navigate(-1);
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
      <li className="menu-li-active" onClick={() => handleOptionChange('/addBar')}>
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
                <div className="bars-top">
                  <h1 className="llista-titol">
                  <img src={back} className="back" alt="back" onClick={goBack} />
                    <span>Afegir Bar</span>
                  </h1>
                </div>
              </section>
        
              <div className="form-container">
                <div className="form-group1">

                <div className="input-container">
                    <label className="filtres-select1">Nom *</label>
                    <input type="text" id="barNameInput" className="input-field1-nom" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Província *</label>
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
                        <option value="Barcelona">Barcelona</option>
                        <option value="Bizcaya">Bizcaya</option>
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
                        <option value="Illes Balears">Illes Balears</option>
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
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                    </select>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Ciutat *</label>
                    <select className="filtres-select-ciutat" name="ciutat" id="ciutat" value={ciutat} onChange={(e) => setCiutat(e.target.value)}>
                    <option value=""></option>
                        {ciutatsPerProvincia[provincia]?.map((ciutat) => (
                        <option key={ciutat} value={ciutat}>{ciutat}</option>
                        ))}
                        <option value="Altres">Altres</option>
                    </select>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Adreça *</label>
                    <input type="text" id="barAdrecaInput" className="input-field1-adreca" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Número Carrer *</label>
                    <input type="text" id="barNumCarrerInput" className="input-field1-numCarrer" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Codi Postal *</label>
                    <input type="text" id="barCodiPostalInput" className="input-field1-codiPostal" />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Tipus *</label>
                    <select className="filtres-select-tipus" name="tipus" id="tipus">
                        {barTypes.map((tipus) => (
                        <option key={tipus} value={tipus}>{tipus}</option>
                        ))}
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

                  <button className="button-env" onClick={addBar}>
                    Afegir
                  </button>
                </div>
              </div>
            </div>
                       );
};

export default AfegirBar;
