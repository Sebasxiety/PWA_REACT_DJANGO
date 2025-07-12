import React, { useState, useEffect } from 'react';

export default function VentaForm() {
  const [form, setForm] = useState({ celular: '', cliente: '', precio: '' });
  const [celulares, setCelulares] = useState([]);

  useEffect(() => {
    fetch('/api/celulares/')
      .then(res => res.json())
      .then(data => setCelulares(data));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/ventas/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Venta</h2>
      <div>
        <label>Celular</label>
        <select name="celular" onChange={handleChange}>
          <option value="">Seleccione</option>
          {celulares.map(c => (
            <option key={c.id} value={c.id}>{c.marca} {c.modelo}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Cliente</label>
        <input name="cliente" value={form.cliente} onChange={handleChange} />
      </div>
      <div>
        <label>Precio</label>
        <input name="precio" value={form.precio} onChange={handleChange} />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}
