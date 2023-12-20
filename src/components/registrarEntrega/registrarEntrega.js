import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../pantallaLlista/logo3.png';
import './registrarEntrega.css';

function RegistrarEntrega() {
  const location = useLocation();
  const bars = location.state.bars;
  const [barName, setBarName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

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

  const consoleBars = () => {
    console.log('Selected Bar: ', barName);
  };

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
            <span>Registrar Entrega</span>
          </h1>
        </div>
      </section>

      <div className="form-container">
        <div className="form-group1">
        <div className="input-container">
  <label className="filtres-select1">Nom del bar</label>
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
            <label className="filtres-select1">Quantitat entregada (Litres)</label>
            <input type="text" id="quantityInput" className="input-field2" />
          </div>
          <div className="input-container">
            <label className="filtres-select1">Data d'entrega</label>
            <input type="date" id="deliveryDateInput" className="input-field3" />
          </div>
          <button className="button-env" onClick={consoleBars}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarEntrega;
