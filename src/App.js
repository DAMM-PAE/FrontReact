import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import PantallaInicial from './components/pantallaInicial/pantallaInicial';
import Calendari from './components/calendari/calendari';
import PantallaBars from './components/pantallaBar/pantallaBar';
import VistaCalendari from './components/vistaCalendari/vistaCalendari';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PantallaInicial />} exact></Route>
        <Route path="/calendari" element={<Calendari />} exact></Route>
        <Route path="/bar/:id" element={<PantallaBars />} exact></Route>
        <Route path="/vistaCalendari/" element={<VistaCalendari />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
