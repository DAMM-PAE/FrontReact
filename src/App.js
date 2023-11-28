import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import PantallaInicial from './components/pantallaInicial/pantallaInicial';
import Calendari from './components/calendari/calendari';
import PantallaBars from './components/pantallaBar/pantallaBar';
import VistaCalendari from './components/vistaCalendari/vistaCalendari';
import JsonProva from './components/jsonProva/jsonProva';
import PantallaBar2 from './components/pantallaBar2/pantallaBar2';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PantallaInicial />} exact></Route>
        <Route path="/calendari" element={<Calendari />} exact></Route>
        <Route path="/bar/:id" element={<PantallaBars />} exact></Route>
        <Route path="/vistaCalendari/" element={<VistaCalendari />} exact></Route>
        <Route path="/json" element={<JsonProva />} exact></Route>
        <Route path="/pantallaBar2" element={<PantallaBar2 />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
