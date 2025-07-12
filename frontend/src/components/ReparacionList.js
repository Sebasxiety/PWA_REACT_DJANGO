import React, { useEffect, useState } from 'react';

export default function ReparacionList() {
  const [reparaciones, setReparaciones] = useState([]);

  useEffect(() => {
    fetch('/api/reparaciones/')
      .then(res => res.json())
      .then(data => setReparaciones(data));
  }, []);

  return (
    <div>
      <h2>Reparaciones</h2>
      <ul>
        {reparaciones.map(r => (
          <li key={r.id}>{r.descripcion} - {r.estado}</li>
        ))}
      </ul>
    </div>
  );
}
