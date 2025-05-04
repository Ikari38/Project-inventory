# Usa una imagen base ligera de Python
FROM python:3.11-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código del backend al contenedor
COPY backend/ /app/

# Instala dependencias del backend
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto para el backend
EXPOSE 8000

# Comando para ejecutar el backend con Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
