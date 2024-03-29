import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import PantallaInicial from './components/pantallaInicial/pantallaInicial';
import Calendari from './components/calendari/calendari';
import PantallaBars from './components/pantallaBar/pantallaBar';
import VistaCalendari from './components/vistaCalendari/vistaCalendari';
import PantallaLlista from './components/pantallaLlista/pantallaLlista';
import IniciPrograma from './components/IniciPrograma/iniciPrograma';
import RegistrarEntrega from './components/registrarEntrega/registrarEntrega';
import AfegirBar from './components/afegirBar/afegirBar';
import EditBar from './components/editBar/editBar';
import EntreguesBar from './components/entreguesBar/entreguesBar';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<IniciPrograma />} exact></Route>
        <Route path="/list" element={<PantallaLlista />} exact></Route>
        <Route path="/calendari" element={<Calendari />} exact></Route>
        <Route path="/bar/:id" element={<PantallaBars />} exact></Route>
        <Route path="/bar/:id/edit" element={<EditBar />} exact></Route>
        <Route path="/vistaCalendari/" element={<VistaCalendari />} exact></Route>
        <Route path="/pantallaBar2" element={<PantallaInicial />} exact></Route>
        <Route path="/delivery" element={<RegistrarEntrega />} exact></Route>
        <Route path="/addBar" element={<AfegirBar />} exact></Route>
        <Route path="/delivery-list/:id" element={<EntreguesBar />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
