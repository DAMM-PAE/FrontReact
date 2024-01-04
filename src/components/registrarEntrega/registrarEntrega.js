import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../pantallaLlista/logo3.png';
import './registrarEntrega.css';
import back from './back.png';

function RegistrarEntrega() {
  const navigate = useNavigate();
  const location = useLocation();
  const bars = location.state.bars;
  const barNom = location.state?.bar?.nom;
  const [barName, setBarName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (barNom) {
      setBarName(barNom);
    }
    const handleDocumentClick = () => {
      // Oculta las sugerencias al hacer clic en cualquier parte del documento
      setSuggestions([]);
    };

    // Agrega el manejador de eventos al documento
    document.addEventListener('click', handleDocumentClick);

    // Limpia el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleBarNameChange = (e) => {
    const value = e.target.value;
    setBarName(value);

    const filteredSuggestions = bars
      .filter((bar) =>
        bar.nom.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 3); // Limita las sugerencias a un máximo de 3
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setBarName(suggestion.nom);
    setSuggestions([]);
  };

  const registraEntrega = () => {

    if (barName === '') {
      alert('EL NOM DEL BAR NO POT ESTAR BUIT');
      return;
    }

    if (document.getElementById('quantityInput').value === '') {
      alert('LA QUANTITAT NO POT ESTAR BUIDA');
      return;
    }

    if (document.getElementById('deliveryDateInput').value === '') {
      alert('LA DATA NO POT ESTAR BUIDA');
      return;
    }

    //comprobar que el nombre del bar existe en la base de datos de manera eficiente
    let barExists = false;
    bars.forEach((bar) => {
      if (bar.nom === barName) {
        barExists = true;
      }
    });
    if (!barExists) {
      alert('EL BAR NO EXISTEIX');
      return;
    }
    else {
      //comprobar que la cantidad es un numero y positivo
      const quantity = document.getElementById('quantityInput').value;
      if (isNaN(quantity) || quantity <= 0) {
        alert('LA QUANTITAT HA DE SER UN NÚMERO POSITIU');
        return;
      }
      else {
        //registrar entrega
        const deliveryDate = document.getElementById('deliveryDateInput').value;
        const data = {
          nom: barName,
          quantitat: quantity,
          data: deliveryDate
        };
        
      }
    }
  }

  const goBack = () => {
    //ir a pantalla anterior
    navigate(-1)
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
            <span>Registrar Entrega</span>
          </h1>
        </div>
      </section>

      <div className="form-container">
        <div className="form-group1">
        <div className="input-container">
  <label className="filtres-select1">Nom del bar *</label>
  <input
    type="text"
    id="barNameInput"
    className="input-field1"
    value={barName}
    onChange={handleBarNameChange}
  />
  {/* Mostrar sugerencias */}
  {suggestions.length > 0 && (
    <ul className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion.nom}
        </li>
      ))}
    </ul>
  )}
</div>
          <div className="input-container">
            <label className="filtres-select1">Quantitat entregada (Litres) *</label>
            <input type="text" id="quantityInput" className="input-field2" />
          </div>
          <div className="input-container">
            <label className="filtres-select1">Data d'entrega *</label>
            <input type="date" id="deliveryDateInput" className="input-field3" />
          </div>
          <button className="button-env" onClick={registraEntrega}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarEntrega;
