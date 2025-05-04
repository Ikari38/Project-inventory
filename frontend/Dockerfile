# Etapa 1: build del frontend
FROM node:18 as build

WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

# Etapa 2: servir los archivos con nginx
FROM nginx:alpine

# Copia los archivos construidos al directorio público de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia una configuración mínima (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
