import React, {useEffect, useState} from 'react';
import logo from '../pantallaLlista/logo3.png';
import './editBar.css';
import { useLocation, useNavigate } from "react-router-dom";
import back from "./back.png";


const EditBar = () => {

  const location = useLocation();
  const bar = location.state.bar;
  const navigate = useNavigate();
    
    const [barProvincia, setBarProvincia] = useState('');
    const [ciutat, setCiutat] = useState('');

    const [barName, setBarName] = useState('');
    const [barAdreca, setBarAdreca] = useState('');
    const [barNumCarrer, setBarNumCarrer] = useState('');
    const [barCodiPostal, setBarCodiPostal] = useState('');
    const [barLatitud, setBarLatitud] = useState('');
    const [barLongitud, setBarLongitud] = useState('');
    const [barIoT, setBarIoT] = useState(false);
    const [barTipus, setBarTipus] = useState('');
    const [barTypes, setBarTypes] = React.useState([]);

    useEffect(() => {
      getBarTypes();
    
      console.log(bar);
    
      // Establecer los valores por defecto cuando se proporciona el bar
      if (bar) {
        setBarName(bar.nom || '');
        setBarProvincia(bar.provincia || '');
        setCiutat(bar.ciutat || '');
        setBarAdreca(bar.direccio || '');
        setBarNumCarrer(bar.numCarrer || '');
        setBarCodiPostal(bar.codiPostal || '');
        setBarLatitud(bar.latitud || '');
        setBarLongitud(bar.longitud || '');
        setBarIoT(bar.iot || false);
        setBarTipus(bar.tipusBar || '');
      }
    
      console.log("barProvincia:", barProvincia);
      console.log("ciutat:", ciutat);
      parseBarProvincia();
      parseBarCiutat();
    }, [bar]);

    const parseBarProvincia = () => {
      if (bar.provincia === "A CORUÑA") setBarProvincia("A Coruña");
      if (bar.provincia === "ALAVA") setBarProvincia("Álava");
      if (bar.provincia === "ALBACETE") setBarProvincia("Albacete");
      if (bar.provincia === "ALICANTE") setBarProvincia("Alicante");
      if (bar.provincia === "ALMERIA") setBarProvincia("Almería");
      if (bar.provincia === "ASTURIAS") setBarProvincia("Asturias");
      if (bar.provincia === "AVILA") setBarProvincia("Ávila");
      if (bar.provincia === "BADAJOZ") setBarProvincia("Badajoz");
      if (bar.provincia === "ILLES BALEARS") setBarProvincia("Illes Balears");
      if (bar.provincia === "BARCELONA") setBarProvincia("Barcelona");
      if (bar.provincia === "BURGOS") setBarProvincia("Burgos");
      if (bar.provincia === "CACERES") setBarProvincia("Cáceres");
      if (bar.provincia === "CADIZ") setBarProvincia("Cádiz");
      if (bar.provincia === "CANTABRIA") setBarProvincia("Cantabria");
      if (bar.provincia === "CASTELLON") setBarProvincia("Castellón");
      if (bar.provincia === "CIUDAD REAL") setBarProvincia("Ciudad Real");
      if (bar.provincia === "CORDOBA") setBarProvincia("Córdoba");
      if (bar.provincia === "CUENCA") setBarProvincia("Cuenca");
      if (bar.provincia === "GIRONA") setBarProvincia("Girona");
      if (bar.provincia === "GRANADA") setBarProvincia("Granada");
      if (bar.provincia === "GUADALAJARA") setBarProvincia("Guadalajara");
      if (bar.provincia === "GUIPUZCOA") setBarProvincia("Guipúzcoa");
      if (bar.provincia === "HUELVA") setBarProvincia("Huelva");
      if (bar.provincia === "HUESCA") setBarProvincia("Huesca");
      if (bar.provincia === "JAEN") setBarProvincia("Jaén");
      if (bar.provincia === "LA RIOJA") setBarProvincia("La Rioja");
      if (bar.provincia === "LAS PALMAS") setBarProvincia("Las Palmas");
      if (bar.provincia === "LEON") setBarProvincia("León");
      if (bar.provincia === "LLEIDA") setBarProvincia("Lleida");
      if (bar.provincia === "LUGO") setBarProvincia("Lugo");
      if (bar.provincia === "MADRID") setBarProvincia("Madrid");
      if (bar.provincia === "MALAGA") setBarProvincia("Málaga");
      if (bar.provincia === "MURCIA") setBarProvincia("Murcia");
      if (bar.provincia === "NAVARRA") setBarProvincia("Navarra");
      if (bar.provincia === "OURENSE") setBarProvincia("Ourense");
      if (bar.provincia === "PALENCIA") setBarProvincia("Palencia");
      if (bar.provincia === "PONTEVEDRA") setBarProvincia("Pontevedra");
      if (bar.provincia === "SALAMANCA") setBarProvincia("Salamanca");
      if (bar.provincia === "SANTA CRUZ DE TENERIFE") setBarProvincia("Santa Cruz de Tenerife");
      if (bar.provincia === "SEGOVIA") setBarProvincia("Segovia");
      if (bar.provincia === "SEVILLA") setBarProvincia("Sevilla");
      if (bar.provincia === "SORIA") setBarProvincia("Soria");
      if (bar.provincia === "TARRAGONA") setBarProvincia("Tarragona");
      if (bar.provincia === "TERUEL") setBarProvincia("Teruel");
      if (bar.provincia === "TOLEDO") setBarProvincia("Toledo");
      if (bar.provincia === "VALENCIA") setBarProvincia("Valencia");
      if (bar.provincia === "VALLADOLID") setBarProvincia("Valladolid");
      if (bar.provincia === "BIZCAYA") setBarProvincia("Bizcaya");
      if (bar.provincia === "ZAMORA") setBarProvincia("Zamora");
      if (bar.provincia === "ZARAGOZA") setBarProvincia("Zaragoza");
    }

    const parseBarCiutat = () => {
      if (bar.ciutat === "A CORUÑA") setCiutat("A Coruña");
      if (bar.ciutat === "FERROL") setCiutat("Ferrol");
      if (bar.ciutat === "SANTIAGO DE COMPOSTELA") setCiutat("Santiago de Compostela");
      if (bar.ciutat === "VITORIA-GASTEIZ") setCiutat("Vitoria-Gasteiz");
      if (bar.ciutat === "ALBACETE") setCiutat("Albacete");
      if (bar.ciutat === "BENIDORM") setCiutat("Benidorm");
      if (bar.ciutat === "ALICANTE") setCiutat("Alicante");
      if (bar.ciutat === "ELCHE") setCiutat("Elche");
      if (bar.ciutat === "ALMERIA") setCiutat("Almería");
      if (bar.ciutat === "ROQUETAS DE MAR") setCiutat("Roquetas de Mar");
      if (bar.ciutat === "GIJON") setCiutat("Gijón");
      if (bar.ciutat === "OVIEDO") setCiutat("Oviedo");
      if (bar.ciutat === "AVILA") setCiutat("Ávila");
      if (bar.ciutat === "BADAJOZ") setCiutat("Badajoz");
      if (bar.ciutat === "MERIDA") setCiutat("Mérida");
      if (bar.ciutat === "IBIZA") setCiutat("Ibiza");
      if (bar.ciutat === "PALMA") setCiutat("Palma");
      if (bar.ciutat === "BADALONA") setCiutat("Badalona");
      if (bar.ciutat === "BARCELONA") setCiutat("Barcelona");
      if (bar.ciutat === "L'HOSPITALET DE LLOBREGAT") setCiutat("L'Hospitalet de Llobregat");
      if (bar.ciutat === "BURGOS") setCiutat("Burgos");
      if (bar.ciutat === "MIRANDA DE EBRO") setCiutat("Miranda de Ebro");
      if (bar.ciutat === "CACERES") setCiutat("Cáceres");
      if (bar.ciutat === "CADIZ") setCiutat("Cádiz");
      if (bar.ciutat === "JEREZ DE LA FRONTERA") setCiutat("Jerez de la Frontera");
      if (bar.ciutat === "SANTANDER") setCiutat("Santander");
      if (bar.ciutat === "CASTELLON DE LA PLANA") setCiutat("Castellón de la Plana");
      if (bar.ciutat === "CIUDAD REAL") setCiutat("Ciudad Real");
      if (bar.ciutat === "CORDOBA") setCiutat("Córdoba");
      if (bar.ciutat === "CUENCA") setCiutat("Cuenca");
      if (bar.ciutat === "FIGUERES") setCiutat("Figueres");
      if (bar.ciutat === "GIRONA") setCiutat("Girona");
      if (bar.ciutat === "GRANADA") setCiutat("Granada");
      if (bar.ciutat === "GUADALAJARA") setCiutat("Guadalajara");
      if (bar.ciutat === "IRUN") setCiutat("Irún");
      if (bar.ciutat === "DONOSTIA-SAN SEBASTIAN") setCiutat("Donostia-San Sebastián");
      if (bar.ciutat === "HUELVA") setCiutat("Huelva");
      if (bar.ciutat === "HUESCA") setCiutat("Huesca");
      if (bar.ciutat === "JAEN") setCiutat("Jaén");
      if (bar.ciutat === "LOGROÑO") setCiutat("Logroño");
      if (bar.ciutat === "LAS PALMAS DE GRAN CANARIA") setCiutat("Las Palmas de Gran Canaria");
      if (bar.ciutat === "LEON") setCiutat("León");
      if (bar.ciutat === "LLEIDA") setCiutat("Lleida");
      if (bar.ciutat === "LUGO") setCiutat("Lugo");
      if (bar.ciutat === "ALCALA DE HENARES") setCiutat("Alcalá de Henares");
      if (bar.ciutat === "MADRID") setCiutat("Madrid");
      if (bar.ciutat === "MALAGA") setCiutat("Málaga");
      if (bar.ciutat === "MARBELLA") setCiutat("Marbella");
      if (bar.ciutat === "CARTAGENA") setCiutat("Cartagena");
      if (bar.ciutat === "MURCIA") setCiutat("Murcia");
      if (bar.ciutat === "PAMPLONA") setCiutat("Pamplona");
      if (bar.ciutat === "OURENSE") setCiutat("Ourense");
      if (bar.ciutat === "PALENCIA") setCiutat("Palencia");
      if (bar.ciutat === "PONTEVEDRA") setCiutat("Pontevedra");
      if (bar.ciutat === "VIGO") setCiutat("Vigo");
      if (bar.ciutat === "SALAMANCA") setCiutat("Salamanca");
      if (bar.ciutat === "SALOU") setCiutat("Salou");
      if (bar.ciutat === "SANTA CRUZ DE TENERIFE") setCiutat("Santa Cruz de Tenerife");
      if (bar.ciutat === "SEGOVIA") setCiutat("Segovia");
      if (bar.ciutat === "SEVILLA") setCiutat("Sevilla");
      if (bar.ciutat === "SORIA") setCiutat("Soria");
      if (bar.ciutat === "TARRAGONA") setCiutat("Tarragona");
      if (bar.ciutat === "TERUEL") setCiutat("Teruel");
      if (bar.ciutat === "TOLEDO") setCiutat("Toledo");
      if (bar.ciutat === "VALENCIA") setCiutat("Valencia");
      if (bar.ciutat === "CASTELLON") setCiutat("Castellón");
      if (bar.ciutat === "VALLADOLID") setCiutat("Valladolid");
      if (bar.ciutat === "BILBAO") setCiutat("Bilbao");
      if (bar.ciutat === "ZAMORA") setCiutat("Zamora");
      if (bar.ciutat === "ZARAGOZA") setCiutat("Zaragoza");
    }

    const getBarTypes = async () => {
      const url = 'http://nattech.fib.upc.edu:40540/api/bars/types';
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBarTypes(data);
      } catch (error) {
        console.log(error);
      }
    }

    const ciutatsPerProvincia = {
      "A Coruña": ["     ", "A Coruña", "Ferrol", "Santiago de Compostela"],
      "Álava": ["     ", "Vitoria-Gasteiz"],
      "Albacete": ["     ", "Albacete", "Benidorm"],
      "Alicante": ["     ", "Alicante", "Elche"],
      "Almería": ["     ", "Almería", "Roquetas de Mar"],
      "Asturias": ["     ", "Gijón", "Oviedo"],
      "Ávila": ["     ", "Ávila"],
      "Badajoz": ["     ", "Badajoz", "Mérida"],
      "Illes Balears": ["     ", "Ibiza", "Palma"],
      "Barcelona": ["     ", "Badalona", "Barcelona", "L'Hospitalet de Llobregat"],
      "Burgos": ["     ", "Burgos", "Miranda de Ebro"],
      "Cáceres": ["     ", "Cáceres"],
      "Cádiz": ["     ", "Cádiz", "Jerez de la Frontera"],
      "Cantabria": ["     ", "Santander"],
      "Castellón": ["     ", "Castellón de la Plana"],
      "Ciudad Real": ["     ", "Ciudad Real"],
      "Córdoba": ["     ", "Córdoba"],
      "Cuenca": ["     ", "Cuenca"],
      "Girona": ["     ", "Figueres", "Girona"],
      "Granada": ["     ", "Granada"],
      "Guadalajara": ["     ", "Guadalajara"],
      "Guipúzcoa": ["     ", "Irún", "Donostia-San Sebastián"],
      "Huelva": ["     ", "Huelva"],
      "Huesca": ["     ", "Huesca"],
      "Jaén": ["     ", "Jaén"],
      "La Rioja": ["     ", "Logroño"],
      "Las Palmas": ["     ", "Las Palmas de Gran Canaria"],
      "León": ["     ", "León"],
      "Lleida": ["     ", "Lleida"],
      "Lugo": ["     ", "Lugo"],
      "Madrid": ["     ", "Alcalá de Henares", "Madrid"],
      "Málaga": ["     ", "Málaga", "Marbella"],
      "Murcia": ["     ", "Cartagena", "Murcia"],
      "Navarra": ["     ", "Pamplona"],
      "Ourense": ["     ", "Ourense"],
      "Palencia": ["     ", "Palencia"],
      "Pontevedra": ["     ", "Pontevedra", "Vigo"],
      "Salamanca": ["     ", "Salamanca"],
      "Santa Cruz de Tenerife": ["     ", "Santa Cruz de Tenerife"],
      "Segovia": ["     ", "Segovia"],
      "Sevilla": ["     ", "Sevilla"],
      "Soria": ["     ", "Soria"],
      "Tarragona": ["     ", "Salou", "Tarragona"],
      "Teruel": ["     ", "Teruel"],
      "Toledo": ["     ", "Toledo"],
      "Valencia": ["     ", "Castellón", "Valencia"],
      "Valladolid": ["     ", "Valladolid"],
      "Bizcaya": ["     ", "Bilbao"],
      "Zamora": ["     ", "Zamora"],
      "Zaragoza": ["     ", "Zaragoza"]
    }

    const handleProvinciaChange = (e) => {
        const selectedProvincia = e.target.value;
        setBarProvincia(selectedProvincia);
        if (selectedProvincia === "A Coruña") setCiutat("A Coruña");
        else if (selectedProvincia === "Álava") setCiutat("Vitoria-Gasteiz");
        else if (selectedProvincia === "Albacete") setCiutat("Albacete");
        else if (selectedProvincia === "Alicante") setCiutat("Alicante");
        else if (selectedProvincia === "Almería") setCiutat("Almería");
        else if (selectedProvincia === "Asturias") setCiutat("Gijón");
        else if (selectedProvincia === "Ávila") setCiutat("Ávila");
        else if (selectedProvincia === "Badajoz") setCiutat("Badajoz");
        else if (selectedProvincia === "Illes Balears") setCiutat("Palma");
        else if (selectedProvincia === "Barcelona") setCiutat("Barcelona");
        else if (selectedProvincia === "Burgos") setCiutat("Burgos");
        else if (selectedProvincia === "Cáceres") setCiutat("Cáceres");
        else if (selectedProvincia === "Cádiz") setCiutat("Cádiz");
        else if (selectedProvincia === "Cantabria") setCiutat("Santander");
        else if (selectedProvincia === "Castellón") setCiutat("Castellón de la Plana");
        else if (selectedProvincia === "Ciudad Real") setCiutat("Ciudad Real");
        else if (selectedProvincia === "Córdoba") setCiutat("Córdoba");
        else if (selectedProvincia === "Cuenca") setCiutat("Cuenca");
        else if (selectedProvincia === "Girona") setCiutat("Girona");
        else if (selectedProvincia === "Granada") setCiutat("Granada");
        else if (selectedProvincia === "Guadalajara") setCiutat("Guadalajara");
        else if (selectedProvincia === "Guipúzcoa") setCiutat("Donostia-San Sebastián");
        else if (selectedProvincia === "Huelva") setCiutat("Huelva");
        else if (selectedProvincia === "Huesca") setCiutat("Huesca");
        else if (selectedProvincia === "Jaén") setCiutat("Jaén");
        else if (selectedProvincia === "La Rioja") setCiutat("Logroño");
        else if (selectedProvincia === "Las Palmas") setCiutat("Las Palmas de Gran Canaria");
        else if (selectedProvincia === "León") setCiutat("León");
        else if (selectedProvincia === "Lleida") setCiutat("Lleida");
        else if (selectedProvincia === "Lugo") setCiutat("Lugo");
        else if (selectedProvincia === "Madrid") setCiutat("Madrid");
        else if (selectedProvincia === "Málaga") setCiutat("Málaga");
        else if (selectedProvincia === "Murcia") setCiutat("Murcia");
        else if (selectedProvincia === "Navarra") setCiutat("Pamplona");
        else if (selectedProvincia === "Ourense") setCiutat("Ourense");
        else if (selectedProvincia === "Palencia") setCiutat("Palencia");
        else if (selectedProvincia === "Pontevedra") setCiutat("Pontevedra");
        else if (selectedProvincia === "Salamanca") setCiutat("Salamanca");
        else if (selectedProvincia === "Santa Cruz de Tenerife") setCiutat("Santa Cruz de Tenerife");
        else if (selectedProvincia === "Segovia") setCiutat("Segovia");
        else if (selectedProvincia === "Sevilla") setCiutat("Sevilla");
        else if (selectedProvincia === "Soria") setCiutat("Soria");
        else if (selectedProvincia === "Tarragona") setCiutat("Tarragona");
        else if (selectedProvincia === "Teruel") setCiutat("Teruel");
        else if (selectedProvincia === "Toledo") setCiutat("Toledo");
        else if (selectedProvincia === "Valencia") setCiutat("Valencia");
        else if (selectedProvincia === "Valladolid") setCiutat("Valladolid");
        else if (selectedProvincia === "Bizcaya") setCiutat("Bilbao");
        else if (selectedProvincia === "Zamora") setCiutat("Zamora");
        else if (selectedProvincia === "Zaragoza") setCiutat("Zaragoza");
      }

    const editBar = async () => {
        const barName = document.getElementById("barNameInput").value;
        let barProvincia = document.getElementById("provincia").value;
        let barCiutat = document.getElementById("ciutat").value;
        const barAdreca = document.getElementById("barAdrecaInput").value;
        const barNumCarrer = document.getElementById("barNumCarrerInput").value;
        const barCodiPostal = document.getElementById("barCodiPostalInput").value;
        const barTipus = document.getElementById("tipus").value;
        const barLatitud = document.getElementById("barLatitudInput").value;
        const barLongitud = document.getElementById("barLongitudInput").value;
        const barIoT = document.getElementById("barIoTInput").checked;

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

        console.log(barProvincia + " y " + barCiutat);

        //pasar provincia y ciudad a mayusculas
        barProvincia = barProvincia.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        barCiutat = barCiutat.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        console.log(barProvincia + " y " + barCiutat);

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
        const url = 'http://nattech.fib.upc.edu:40540/api/bars/';
        try {
          const response = await fetch(url, {
              method: 'PUT',
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
        alert("Bar editat correctament");
        window.location.href = "/list";
    }

    const goBack = () => {
      //volver a la vista del bar "/bar/" + bar.id
      navigate("/bar/" + bar.id, {state: {bar: bar}});
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
                  <img src={back} className="back" alt="back" onClick={goBack} />
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
                      value={bar.nom}
                      onChange={(e) => setBarName(e.target.value)}
                    />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Província *</label>
                    <select className="filtres-select-prov" name="provincia" id="provincia" value={barProvincia} onChange={handleProvinciaChange}>
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
                        <option valie="Illes Balears">Illes Balears</option>
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
                  {ciutatsPerProvincia[barProvincia]?.includes(ciutat) ? (
                    <select
                      className="filtres-select-ciutat"
                      name="ciutat"
                      id="ciutat"
                      value={ciutat}
                      onChange={(e) => setCiutat(e.target.value)}
                    >
                      {ciutatsPerProvincia[barProvincia]?.map((ciutat) => (
                        <option key={ciutat} value={ciutat}>
                          {ciutat}
                        </option>
                      ))}
                      <option value="altres">Altres</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      id="ciutat"
                      className="input-field1-ciutat"
                      value={ciutat}
                      onChange={(e) => setCiutat(e.target.value)}
                    />
                  )}
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Adreça *</label>
                    <input type="text" id="barAdrecaInput" className="input-field1-adreca" value={barAdreca}
                      onChange={(e) => setBarAdreca(e.target.value)} />
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Número Carrer *</label>
                    <input type="text" id="barNumCarrerInput" className="input-field1-numCarrer" value={barNumCarrer}
                      onChange={(e) => setBarNumCarrer(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Codi Postal *</label>
                    <input type="text" id="barCodiPostalInput" className="input-field1-codiPostal" value={barCodiPostal}
                      onChange={(e) => setBarCodiPostal(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="filtres-select1">Tipus *</label>
                    <select className="filtres-select-tipus" name="tipus" id="tipus"value={barTipus}
                      onChange={(e) => setBarTipus(e.target.value)}>
                        <option value=""></option>
                        {barTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                        ))}
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
