import React from 'react';
import './iniciPrograma.css';

function App() {
  return (
    <div className="App">
      <header className="headerClass">
        <h1 className="h1Class">Benvingut a BeerDrive</h1>
      </header>
      <section className="sectionClass">
        <p className="pClass">Descobreix una nova experiència de servei de cervesa amb BeerDrive. Explora el nostre programa i gaudeix de la diversitat de sabors!</p>
        <a href="/list" className="button">Explorar el Programa</a>
      </section>
    </div>
  );
}

export default App;
