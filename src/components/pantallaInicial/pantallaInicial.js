import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./pantallaInicial.css";
import logo from "./dammlogo.jpg";
import reset from "./reset.png";
import tick from "./tick.png";
import { useNavigate } from 'react-router-dom';
import ListBars from '../listBars/ListBars';
import { set } from "date-fns";




function PantallaInicial() {

  const [showFilters, setShowFilters] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [ciutat, setCiutat] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tipus, setTipus] = useState("");
  const [percentatge, setPercentatge] = useState("");
  const [filteredBars, setFilteredBars] = useState([]);
  const [sortDirection, setSortDirection] = useState({});
  const [allBars, setAllBars] = useState([]);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  }

  useEffect(() => {
    fetchBars();
  }, []);

  const fetchBars = async () => {
    //crear 4 bares de ejemplo
    const bar1 = {
      id: 1,
      nom: "Bar 1",
      provincia: "Barcelona",
      ciutat: "Barcelona",
      iot: true,
      percentatge: "75",
      data: new Date(2023, 10, 17)
    };
    
    const bar2 = {
      id: 2,
      nom: "Bar 2",
      provincia: "Madrid",
      ciutat: "Madrid",
      iot: true,
      percentatge: "100",
      data: new Date(2023, 11, 17)
    };
    
    const bar3 = {
      id: 3,
      nom: "Bar 3",
      provincia: "Barcelona",
      ciutat: "Badalona",
      iot: true,
      percentatge: "10",
      data: new Date(2023, 9, 29)
    };
    
    const bar4 = {
      id: 4,
      nom: "MARIA ISABEL GARCIA FERNANDEZ",
      provincia: "Cuenca",
      ciutat: "Cuenca",
      iot: false,
      percentatge: "-",
      data: new Date(2023, 9, 29)
    };
    
    const bar5 = {
      id: 5,
      nom: "Bar 5",
      provincia: "Valencia",
      ciutat: "Valencia",
      iot: true,
      percentatge: "45",
      data: new Date(2024, 8, 15)
    };
    
    const bar6 = {
      id: 6,
      nom: "Bar 6",
      provincia: "Barcelona",
      ciutat: "Barcelona",
      iot: false,
      percentatge: "-",
      data: new Date(2023, 10, 2)
    };
    
    const bar7 = {
      id: 7,
      nom: "Bar 7",
      provincia: "Madrid",
      ciutat: "Madrid",
      iot: true,
      percentatge: "85",
      data: new Date(2023, 9, 30)
    };
    
    const bar8 = {
      id: 8,
      nom: "Bar 8",
      provincia: "Valencia",
      ciutat: "Valencia",
      iot: true,
      percentatge: "30",
      data: new Date(2023, 9, 31)
    };
    
    const bar9 = {
      id: 9,
      nom: "Bar 9",
      provincia: "Cuenca",
      ciutat: "Cuenca",
      iot: false,
      percentatge: "-",
      data: new Date(2023, 9, 19)
    };
    
    const bar10 = {
      id: 10,
      nom: "Bar 10",
      provincia: "Barcelona",
      ciutat: "Badalona",
      iot: true,
      percentatge: "70",
      data: new Date(2023, 9, 18)
    };
    let bars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10];
    bars.sort((a, b) => new Date(a.data) - new Date(b.data));
    setFilteredBars(bars);
    setAllBars(bars);
    console.log(filteredBars);
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
    today.setHours(0, 0, 0, 0);
    setSelectedDate("");
    setStartDate(today);
    setEndDate(new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()));  

    if (selectedDate === "Avui") {
      setSelectedDate("Avui");
      const endDateToday = new Date();
      endDateToday.setHours(23, 59, 59, 999);
      setStartDate(today);
      setEndDate(endDateToday)
    } else if (selectedDate === "Demà") {
      setSelectedDate("Demà");
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const endDateTomorrow = new Date(tomorrow);
      endDateTomorrow.setHours(23, 59, 59, 999);
      setStartDate(tomorrow);
      setEndDate(endDateTomorrow);
    } else if (selectedDate === "Aquesta setmana") {
      setSelectedDate("Aquesta setmana");
      setStartDate(today);
      const endDateWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()));
      endDateWeek.setHours(23, 59, 59, 999);
      setEndDate(endDateWeek);
    } else if (selectedDate === "Aquest mes") {
      setSelectedDate("Aquest mes");
      setStartDate(today);
      const endDateMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      endDateMonth.setHours(23, 59, 59, 999);
      setEndDate(endDateMonth);
    } else if (selectedDate === "Escull data"){
      navigate('/calendari');
    }

    console.log("Fecha de inicio:", startDate);
    console.log("Fecha de fin:", endDate);
  };  

  const handleSortNom = (attribute, sortdir) => {
    const newData = [...filteredBars];
    newData.sort((a, b) => {
      if (sortdir === 'asc') {
        return a[attribute].localeCompare(b[attribute]);
      } else if (sortdir === 'desc') {
        return b[attribute].localeCompare(a[attribute]);
      } else {
        return 0;
      }
    });
    setFilteredBars(newData);
  }

  const handleSortProvinciaCiutat = (attprovincia, attciutat, sortdir) => {
    const newData = [...filteredBars];
    newData.sort((a, b) => {
      const provinciaComparison = a[attprovincia].localeCompare(b[attprovincia]);
      if (provinciaComparison === 0) {
        // Las provincias son iguales, comparar las ciudades
        return sortdir === 'asc' ? a[attciutat].localeCompare(b[attciutat]) : b[attciutat].localeCompare(a[attciutat]);
      }
      return sortdir === 'asc' ? provinciaComparison : -provinciaComparison;
    });
    setFilteredBars(newData);
  }

  const handleSortPercentatge = (attribute, sortdir) => {
    const newData = [...filteredBars];
    newData.sort((a, b) => {
      const auxA = a[attribute] === "-" ? 0 : parseInt(a[attribute]);
      const auxB = b[attribute] === "-" ? 0 : parseInt(b[attribute]);
      if (sortdir === 'asc') {
        return auxA - auxB;
      } else if (sortdir === 'desc') {
        return auxB - auxA;
      } else {
        return 0;
      }
    });
    setFilteredBars(newData);
  }

  const handleSortData = (attribute, sortdir) => {
    const newData = [...filteredBars];
    newData.sort((a, b) => {
      //pasar strings a date
      const auxA = new Date(a[attribute]);
      const auxB = new Date(b[attribute]);
      if (sortdir === 'asc') {
        return auxA - auxB;
      } else if (sortdir === 'desc') {
        return auxB - auxA;
      } else {
        return 0;
      }
    });
    setFilteredBars(newData);
  }

  const filterBars = (e) => {
    //obtener valores de los filtros
    const provinciaFilter = provincia;
    const ciutatFilter = ciutat;
    const tipusFilter = tipus;
    const percentatgeFilter = percentatge;
    const dataFilter = selectedDate;
    const dataFilterStart = startDate;
    const dataFilterEnd = endDate;
    console.log("Provincia: ", provinciaFilter);
    console.log("Ciutat: ", ciutatFilter);
    console.log("Tipus: ", tipusFilter);
    console.log("Percentatge: ", percentatgeFilter);
    console.log("Data inici: ", dataFilterStart);
    console.log("Data fi: ", dataFilterEnd);

    //filtrar por provincia
    let filteredBarsByProvincia = allBars;
    console.log(allBars)
    if (provinciaFilter !== "") {
      filteredBarsByProvincia = allBars.filter((bar) => bar.provincia === provinciaFilter);
    }

    if (ciutatFilter !== "") {
      filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => bar.ciutat === ciutatFilter);
    }

    if (tipusFilter !== "") {
      filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => bar.iot === (tipusFilter === "IoT"));
    }

    if (percentatgeFilter !== "") {
      filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => {
        //pasar el percentatge a int
        const percentatge = parseInt(bar.percentatge);
        if (percentatgeFilter === "0-25") {
          return percentatge >= 0 && percentatge <= 25;
        } else if (percentatgeFilter === "25-50") {   
          return percentatge >= 25 && percentatge <= 50;
        } else if (percentatgeFilter === "50-75") {
          return percentatge >= 50 && percentatge <= 75;
        } else if (percentatgeFilter === "75-100") {
          return percentatge >= 75 && percentatge <= 100;
        } else {
          return false;
        }
      });
    }

    //filtra por fecha, si la data esta entre la fecha de inicio y la fecha de fin, añadelo al array
   if (dataFilter !== "") {
      filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => {
        const data = new Date(bar.data);
        return data >= dataFilterStart && data <= dataFilterEnd;
      });
    }


    console.log("data inici: ", dataFilterStart);
    console.log("data fi: ", dataFilterEnd);
    console.log(filteredBarsByProvincia);
    setFilteredBars(filteredBarsByProvincia);
  }

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      const filteredBars = allBars.filter((bar) =>
        bar.nom.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBars(filteredBars);
    }
  };

  const handleReset = () => {
    setProvincia("");
    setCiutat("");
    setTipus("");
    setPercentatge("");
    setSelectedDate("");
    setStartDate(new Date());
    setEndDate(new Date());
    setSearchText("");
    setFilteredBars(allBars);
  }

  const handleTickClick = (barId) => {
    // Encuentra el índice del bar basado en el ID proporcionado
    // Cambiar el color de fondo a verde
    const tickElement = document.getElementById(`tick-${barId}`);
    if (tickElement) {
      tickElement.parentElement.style.backgroundColor = 'rgba(0, 255, 0, 0.45)';
    }
    // Esperar 1 segundo antes de ejecutar la actualización de la fecha
    setTimeout(() => {
      updateDate(barId);
    }, 1000);
  }

  const updateDate = (barId) => {
    //poner al bar la fecha de hoy
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const newData = [...allBars];
    const index = newData.findIndex((bar) => bar.id === barId);
    newData[index].data = today;
    setAllBars(newData);
  }

  const handleVistaCalendari = () => {
    navigate('/vistaCalendari', {state: { bars: allBars }});
  }

  return (
    <div>
      <div className="menu-left">
        <div className="logo">
          <img src={logo} className="logodamm" alt="logo" />
        </div>
        <div className="menu-options">
          <button className="menu-options-llista">Vista Llista</button>
          <button className="menu-options-calendari" onClick={handleVistaCalendari}>Vista Calendari</button>
        </div>
      </div>
      <div className="menu-top">
        <input
          type="text"
          className="cercador"
          placeholder="Cerca!"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleSearchKeyPress}
        />
      </div>

      <div className="menu-total">
       <div className="filtres-llista"> 
      <div class="first-row">
          <label htmlFor="show-form-toggle" class="btn btn-primary" onClick={handleShowFilters}> 
            Filtres
          </label>
          <div className="reset">
          <img src={reset} className="reset" alt="reset" onClick={handleReset} />
          </div>
        </div>
        {showFilters && (
          <div class="form-group">
            <form class="form-inline">
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
          </div>
            </form>
            <button type="submit" className="btn btn-primary" onClick={filterBars}>Filtra</button>
          </div>
        )} 

     <div className="menu-top-llista">
        <div class="col-llista1">
          Nom 
          <button className="button_order" onClick={() => handleSortNom('nom', 'asc')}>&#9650;</button>
          <button className="button_order" onClick={() => handleSortNom('nom', 'desc')}>&#9660;</button>
        </div>
        <div class="col-llista2">
          Província/Ciutat
          <button className="button_order" onClick={() => handleSortProvinciaCiutat('provincia', 'ciutat', 'asc')}>&#9650;</button>
          <button className="button_order" onClick={() => handleSortProvinciaCiutat('provincia', 'ciutat', 'desc')}>&#9660;</button>
        </div>
        <div class="col-llista3">
          %IoT restant
          <button className="button_order" onClick={() => handleSortPercentatge('percentatge', 'desc')}>&#9650;</button>
          <button className="button_order" onClick={() => handleSortPercentatge('percentatge', 'asc')}>&#9660;</button>
       </div> 
        <div class="col-llista4">
            Data entrega
            <button className="button_order" onClick={() => handleSortData('data', 'asc')}>&#9650;</button>
            <button className="button_order" onClick={() => handleSortData('data', 'desc')}>&#9660;</button>
        </div>
     </div>

    <ListBars filteredBars={filteredBars} />
    </div>


    <div className="menu-right">
  <h1 className="titol-entregues">PRÒXIMES ENTREGUES</h1>

  <h2 className="titol-avui">Avui</h2>
  <ul>
    {allBars
      .filter((bar) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const data = new Date(bar.data);
        return data >= today && data <= today;
      })
      .map((bar, index) => (
        <li key={bar.id} style={{ display: "flex", alignItems: "center", backgroundColor: 'rgba(255, 255, 153, 0.45)', marginBottom: '8px', padding: '5px', borderRadius: '5px' }}>
          <span style={{ flex: "1" }}>{bar.nom}</span>
          <img id={`tick-${bar.id}`} src={tick} alt="Tick" style={{ width: "13px", height: "13px" }} onClick={() => handleTickClick(bar.id)} />
        </li>
      ))}
  </ul>

  <h2 className="titol-avui">Demà</h2>
  <ul>
    {allBars
      .filter((bar) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const data = new Date(bar.data);
        return data >= tomorrow && data <= tomorrow;
      })
      .map((bar, index) => (
        <li key={bar.id} style={{ display: "flex", alignItems: "center", backgroundColor: 'rgba(255, 255, 153, 0.45)', marginBottom: '8px', padding: '5px', borderRadius: '5px' }}>
          <span style={{ flex: "1" }}>{bar.nom}</span>
          <img id={`tick-${bar.id}`} src={tick} alt="Tick" style={{ width: "13px", height: "13px" }} onClick={() => handleTickClick(bar.id)} />
        </li>
      ))}
  </ul>

  <h2 className="titol-avui">Aquesta setmana</h2>
  <ul>
    {allBars
      .filter((bar) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const endDateWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()));
        endDateWeek.setHours(0, 0, 0, 0);
        const data = new Date(bar.data);
        return data > tomorrow && data <= endDateWeek;
      })
      .map((bar, index) => (
        <li key={bar.id} style={{ display: "flex", alignItems: "center", backgroundColor: 'rgba(255, 255, 153, 0.45)', marginBottom: '8px', padding: '5px', borderRadius: '5px' }}>
          <span style={{ flex: "1" }}>{bar.nom}</span>
          <img id={`tick-${bar.id}`} src={tick} alt="Tick" style={{ width: "13px", height: "13px" }} onClick={() => handleTickClick(bar.id)} />
        </li>
      ))}
  </ul>
</div>
     </div>
    </div>
  );
}

export default PantallaInicial;