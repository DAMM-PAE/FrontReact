import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import PantallaInicial from './components/pantallaInicial/pantallaInicial';
import Calendari from './components/calendari/calendari';
import PantallaBars from './components/pantallaBar/pantallaBar';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PantallaInicial />} exact></Route>
        <Route path="/calendari" element={<Calendari />} exact></Route>
        <Route path="/bar/:id" element={<PantallaBars />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
