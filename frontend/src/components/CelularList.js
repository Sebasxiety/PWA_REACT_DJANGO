import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CelularList() {
  const [celulares, setCelulares] = useState([]);

  useEffect(() => {
    fetch('/api/celulares/')
      .then(res => res.json())
      .then(data => setCelulares(data));
  }, []);

  return (
    <div>
      <h2>Celulares</h2>
      <ul>
        {celulares.map(c => (
          <li key={c.id}>{c.marca} {c.modelo}</li>
        ))}
      </ul>
      <Link to="/celulares/nuevo">Agregar</Link>
    </div>
  );
}
