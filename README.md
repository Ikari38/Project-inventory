# Project Inventory

Aplicaci�n web para gestionar clientes, proyectos, unidades, elementos y materiales de forma visual y organizada. Desarrollada con Django REST Framework (backend) y React + Vite + Tailwind (frontend).

---

##  Tecnolog�as usadas

- **Backend**: Python, Django, Django REST Framework
- **Frontend**: React, Vite, Tailwind CSS, TypeScript
- **Otros**: Axios, React Router, Docker, Docker Compose

---

##  Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [Python 3.10+](https://www.python.org/downloads/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- `pip` y entorno virtual (opcional si no usas Docker)

---

##  Instalaci�n y despliegue local (modo cl�sico)

### 1. Clona el repositorio

```bash
git clone https://github.com/Ikari38/Project-inventory.git
cd Project-inventory
```

### 2. Backend (Django)

```bash
cd backend
python -m venv env
source env/bin/activate  # en Windows: env\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```
Esto levantar� el backend en `http://localhost:8000`

### 3. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```
Esto levantar� el frontend en `http://localhost:5173`

---

##  Despliegue con Docker (recomendado)

### 1. Aseg�rate de tener Docker Desktop instalado y en ejecuci�n

### 2. Desde la ra�z del proyecto, ejecuta:

```bash
docker compose up --build
```

Esto levantar�:
- Backend en: `http://localhost:8000`
- Frontend en: `http://localhost`

---

##  Variables de entorno

El archivo `.env` se encuentra en `backend/` y **no debe subirse** al repositorio.
Usa el archivo `.env.example` como plantilla:

```bash
cp backend/.env.example backend/.env
```

Edita el valor de `SECRET_KEY` por uno seguro.

---

##  Navegaci�n

Una vez en el frontend (`localhost`), accede a:

- `/` -> Vista principal con tarjetas
- `/dashboard` -> Vista conjunta de todos los paneles
- `/clients`, `/projects`, `/units`, `/elements`, `/materials` -> Vistas por entidad

---

##  Notas

- Puedes a�adir, eliminar y listar entidades.
- Las relaciones entre entidades est�n activas y conectadas con el backend.
- Preparado para escalar, filtrar datos y presentar bien.
- Puedes desplegarlo en local con Docker o modo manual.
