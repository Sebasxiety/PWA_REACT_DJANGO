import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CelularList from './components/CelularList';
import CelularForm from './components/CelularForm';
import VentaForm from './components/VentaForm';
import ReparacionList from './components/ReparacionList';
import Menu from './components/Menu';

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/celulares" element={<CelularList />} />
        <Route path="/celulares/nuevo" element={<CelularForm />} />
        <Route path="/ventas/nueva" element={<VentaForm />} />
        <Route path="/reparaciones" element={<ReparacionList />} />
      </Routes>
    </div>
  );
}
