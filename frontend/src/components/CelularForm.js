import React, { useState } from 'react';

export default function CelularForm() {
  const [form, setForm] = useState({ marca: '', modelo: '', precio: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/celulares/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Celular</h2>
      <div>
        <label>Marca</label>
        <input name="marca" value={form.marca} onChange={handleChange} />
      </div>
      <div>
        <label>Modelo</label>
        <input name="modelo" value={form.modelo} onChange={handleChange} />
      </div>
      <div>
        <label>Precio</label>
        <input name="precio" value={form.precio} onChange={handleChange} />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}
