# Aplicación de Gestión de Celulares

Esta aplicación es un ejemplo basico de un sistema para administrar celulares, ventas y reparaciones con **Django** para el backend y **React** para el frontend. Se utiliza **SQLite** como base de datos.

## Funcionalidades

- CRUD de celulares.
- Registro de ventas de celulares.
- Gestión de reparaciones con estado.
- Autenticación de usuarios (registro e inicio de sesión).
- Interfaces y mensajes en español.

## Estructura del proyecto

- `backend/` – Proyecto Django con una app llamada `celulares`.
- `frontend/` – Aplicación React básica sin dependencias instaladas.

## Requisitos

- Python 3 y Node.js.
- Paquetes de Python: `django`, `djangorestframework`.
- Paquetes de Node: `react`, `react-dom`, `react-router-dom`, además de una herramienta de empaquetado como `webpack`.

## Uso

1. Instalar las dependencias de Python y ejecutar las migraciones:

```bash
pip install django djangorestframework
cd backend
python manage.py migrate
python manage.py runserver
```

2. Instalar dependencias de Node y ejecutar el servidor de desarrollo:

```bash
cd frontend
npm install
npm start
```

3. Abrir el navegador en `http://localhost:3000` para acceder a la interfaz React.

