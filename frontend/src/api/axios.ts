import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ajusta si cambias de puerto/backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
