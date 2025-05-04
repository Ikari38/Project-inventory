
Project Inventory

Aplicaci�n web para gestionar clientes, proyectos, unidades, elementos y materiales de forma visual y organizada. Desarrollada con Django REST Framework (backend) y React + Vite + Tailwind (frontend).

---

?? Tecnolog�as usadas

- Backend: Python, Django, Django REST Framework
- Frontend: React, Vite, Tailwind CSS, TypeScript
- Otros: Axios, React Router

---

?? Requisitos previos

- Node.js (v18 o superior recomendado)
- Python 3.10+
- pip y entorno virtual (opcional pero recomendado)

---

?? Instalaci�n y despliegue local

1. Clona el repositorio

    git clone https://github.com/Ikari38/Project-inventory.git
    cd Project-inventory

2. Backend (Django)

    cd backend
    python -m venv env
    source env/bin/activate  # en Windows: env\Scripts\activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

    Esto levantar� el backend en http://localhost:8000

3. Frontend (React + Vite)

    cd frontend
    npm install
    npm run dev

    Esto levantar� el frontend en http://localhost:5173

---

?? Navegaci�n

Una vez en el frontend (localhost:5173), accede a:

- / ? Vista principal con tarjetas
- /dashboard ? Vista conjunta de todos los paneles
- /clients, /projects, /units, /elements, /materials ? Vistas por entidad

---

?? Notas

- Puedes a�adir, eliminar y listar entidades.
- Las relaciones entre entidades est�n activas y conectadas con el backend.
- Todo est� preparado para escalar, filtrar datos y mejorar visualmente.
- Las dependencias del backend est�n gestionadas por `requirements.txt`

---

?? Licencia

MIT ? Puedes modificar y reutilizar este proyecto libremente.
