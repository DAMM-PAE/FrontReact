import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./pantallaLlista.css";
import logo from "./logo3.png";
import reset from "./reset.png";
import logoreg from "./registrar.png"
import { useNavigate } from 'react-router-dom';
import ListBars from '../listBars/ListBars';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { baseUrl } from '../../global';

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
  const [allBars, setAllBars] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showDatePicker, setDatePicker] = useState(false);
  
  

  const navigate = useNavigate();

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  }

  useEffect(() => {
    fetchBars();
  }, []);

  const fetchBars = async () => {
 
    const url = baseUrl + '/api/bars';
    try {
      const response = await fetch(url);
      const data = await response.json();
      //ordenamos los bares por fecha de entrega
      data.sort((a, b) => new Date(a.data) - new Date(b.data));

      //transform percentage to int and if iot is false, set percentage to "-"
      data.forEach((bar, index) => {
        if (bar.iot === false) {
          data[index].percentatge = "-";
        } else {
          data[index].percentatge = parseInt(bar.percentatge);
        }
      });

      //transform date to dd-mm-yyyy
      data.forEach((bar, index) => {
        const date = new Date(bar.data);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (day < 10) data[index].data = `0${day}-${month}-${year}`;
        else data[index].data = `${day}-${month}-${year}`;
      });

      //transform provincia and ciutat --> if is 0, set to ""
      data.forEach((bar, index) => {
        if (bar.provincia === "0") data[index].provincia = "";
        if (bar.ciutat === "0") data[index].ciutat = "";
      });

      setFilteredBars(data);
      setAllBars(data);
    } catch (error) {
      console.error('Error fetching bars data:', error);
    }

  }

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
    } else if (selectedDate === "Escull data") {
      setSelectedDate("Escull data");
      setDatePicker(true);
    }
    console.log("Fecha de inicio en pantalla inicial:", startDate);
    console.log("Fecha de fin en pantalla inicial:", endDate);
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
      const provinciaA = a[attprovincia];
      const provinciaB = b[attprovincia];
  
      const ciutatA = a[attciutat];
      const ciutatB = b[attciutat];
  
      // Función para manejar la comparación y manejo de valores nulos/vacíos
      const compare = (valueA, valueB) => {
        if (valueA == null || valueA === "" || valueA === '0') return 1;
        if (valueB == null || valueB === "" || valueB === '0') return -1;
        return sortdir === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      };
  
      // Comparación de provincias
      const provinciaComparison = compare(provinciaA, provinciaB);
      if (provinciaComparison === 0) {
        // Las provincias son iguales, comparar las ciudades si tienen provincia
        if (provinciaA != null && provinciaA !== "") {
          return compare(ciutatA, ciutatB);
        }
      }
  
      return provinciaComparison;
    });
  
    setFilteredBars(newData);
  };
  
  
  
  

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
      const provinciaFilterUp = provinciaFilter.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
      filteredBarsByProvincia = allBars.filter((bar) => {
        // Verificar si bar.provincia es nulo o indefinido
        const BarProvincia = (bar.provincia || '');

        // Realizar la comparación
        return BarProvincia === provinciaFilterUp;
      });
    }

    if (ciutatFilter !== "") {

      if (ciutatFilter === "Altres") {

        //mirar las ciudades que hay en la provincia seleccionada
        console.log(ciutatFilter);
        const ciutatsProvincia = ciutatsPerProvincia[provinciaFilter];
        console.log(ciutatsProvincia);

        //pasar las ciudades a minusculas
        ciutatsProvincia.forEach((ciutat, index) => {
          ciutatsProvincia[index] = ciutat.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        });
        
        //mirar para cada bar en filteredBarsByProvincia si su ciudad está en ciutatsProvincia
        //si está, eliminarlo de filteredBarsByProvincia
        
        filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => {
          const BarCiutat = (bar.ciutat || '');
          return !ciutatsProvincia.includes(BarCiutat);
        }
        );

      } else {
      const CiutatFilterUp = ciutatFilter.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      filteredBarsByProvincia = filteredBarsByProvincia.filter((bar) => {
        // Verificar si bar.ciutat es nulo o indefinido
        const BarCiutat = (bar.ciutat || '');

        // Realizar la comparación
        return BarCiutat === CiutatFilterUp;
      });
    }
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

  const cercaBars = () => {
      const filteredBars = allBars.filter((bar) =>
        bar.nom.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBars(filteredBars);
  };

  const confirmarSeleccion = () => {
    console.log('Fecha de inicio:', startDate);
    console.log('Fecha de fin:', endDate);
    endDate.setHours(23, 59, 59, 999);
    setDatePicker(false); // O cualquier acción adicional
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
    //poner al bar una fecha random entre de aqui 1 mes y 4 meses
    //solo existe 1 bar con ese id
    const today = new Date();
    const randomDate = new Date(today.getTime() + Math.random() * 10368000000);
    const newData = [...allBars];
    const barIndex = newData.findIndex((bar) => bar.id === barId);
    newData[barIndex].data = randomDate;
    setAllBars(newData);
    setFilteredBars(newData);
  }

  const handleVistaCalendari = () => {
    navigate('/vistaCalendari', {state: { bars: allBars }});
  }

  const maxItemsToShow = 5;
  const barsThisWeek = allBars.filter((bar) => {
    const today = new Date();
    const todayPlusTwo = new Date(today);
    todayPlusTwo.setDate(today.getDate() + 2);
    todayPlusTwo.setHours(0, 0, 0, 0);
    const endDateWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()));
    endDateWeek.setHours(23, 59, 59, 999);
    const data = new Date(bar.data);
    return data > todayPlusTwo && data <= endDateWeek;
  });
  
  const barsToShow = barsThisWeek.slice(0, maxItemsToShow);
  const remainingBarsCount = Math.max(0, barsThisWeek.length - maxItemsToShow);

  const handleNavigateBar = (bar) => {
    navigate(`/bar/${bar.id}`, { state: { bar } });
  }

  const handleNavigateRegister = () => {
    console.log("allBars: ", allBars)
    navigate('/delivery', {state: { bars: allBars }});
  }

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
          
          <div class="registration-container" onClick={() => handleNavigateRegister()} >
            <img src={logoreg} className="logoreg" alt="logo" />
            <label className="registrar" >Registrar entrega</label>
          </div>
        </div>
      </header>

      <section className="section-top">
        <div class="bars-top">
          <h1 class="llista-titol">
            <span>LLISTA DE BARS</span>
          </h1>
        </div>

        <div class="first-row">
          <label htmlFor="show-form-toggle" class="btn btn-primary" onClick={handleShowFilters}> 
              Filtres
          </label>
          <div class="form-group2">
            <form class="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Cerca!"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="button" className="btn btn-primary2" onClick={cercaBars}>Cerca</button>
            <div>
              <img src={reset} className="reset" alt="reset" onClick={handleReset} />
            </div>
            </form>
            
          </div>
        </div>

        {showFilters && (
          <div class="form-group">
            <form class="form-inline">
            <label htmlFor="provincia">Província</label>
              <select className="filtres-select" name="provincia" id="provincia" value={provincia} onChange={handleProvinciaChange}>
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
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="ciutat">Ciutat</label>
              <select className="filtres-select" name="ciutat" id="ciutat" value={ciutat} onChange={(e) => setCiutat(e.target.value)}>
              <option value=""></option>
                {ciutatsPerProvincia[provincia]?.map((ciutat) => (
                  <option key={ciutat} value={ciutat}>{ciutat}</option>
                ))}
                <option value="Altres">Altres</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="tipus">Tipus</label>
              <select className="filtres-select" name="tipus" id="tipus" value={tipus} onChange={handleTipusChange}>
                <option value=""></option>
                <option value="IoT">IoT</option>
                <option value="no_IoT">No IoT</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <label htmlFor="percentatge_restant">Percentatge</label>
              <select className="filtres-select" name="percentatge_restant" id="percentatge_restant"
                      value={percentatge} disabled={tipus !== "IoT"} onChange={(e) => setPercentatge(e.target.value)}>
                <option value=""></option>
                <option value="0-25">0-25</option>
                <option value="25-50">25-50</option>
                <option value="50-75">50-75</option>
                <option value="75-100">75-100</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <label htmlFor="data">Data Entrega</label>
              <select className="filtres-select" name="data" id="data" value = {selectedDate} onChange={handleDataChange}>
                <option value=""></option>
                <option value="Avui">Avui</option>
                <option value="Demà">Demà</option>
                <option value="Aquesta setmana">Aquesta setmana</option>
                <option value="Aquest mes">Aquest mes</option>
                <option value="Escull data">Escull data</option>
              </select>  

              {showDatePicker && (
              <div className="calendari">
                <label htmlFor="calendari">Escull un rang de dates</label>

                {/* Selector de Rango de Fechas */}
                <DatePicker
                  selected={startDate}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  onChange={(newDates) => {
                    setStartDate(newDates[0]);
                    setEndDate(newDates[1]);
                  }}
                />

                {/* Botón de Confirmar */}
                <button onClick={confirmarSeleccion}>Confirmar</button>

                {/* Muestra el rango de fechas seleccionado */}
                {startDate && endDate && (
                  <div>
                    <p>Data inici: {startDate.toLocaleDateString()}</p>
                    <p>Data fi: {endDate.toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            )} 

              
            </form>
            <button type="submit" className="btn btn-primary2" onClick={filterBars}>Filtra</button>
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

      </section>


    </div>
  );
}

export default PantallaInicial;