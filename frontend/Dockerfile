# Etapa 1: build del frontend
FROM node:20.12.2 as build

WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

# Etapa 2: servir los archivos con nginx
FROM nginx:alpine

# Copia los archivos construidos al directorio p�blico de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia una configuraci�n m�nima (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
