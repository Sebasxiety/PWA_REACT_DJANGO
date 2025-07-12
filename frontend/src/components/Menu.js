import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/celulares">Celulares</Link></li>
        <li><Link to="/celulares/nuevo">Nuevo Celular</Link></li>
        <li><Link to="/ventas/nueva">Registrar Venta</Link></li>
        <li><Link to="/reparaciones">Reparaciones</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/registro">Registro</Link></li>
      </ul>
    </nav>
  );
}
