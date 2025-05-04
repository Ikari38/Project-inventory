import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Ajusta si cambias de puerto/backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
