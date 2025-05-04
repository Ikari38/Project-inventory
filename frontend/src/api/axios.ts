import axios from 'axios'

const api = axios.create({
 baseURL: `${window.location.protocol}//${window.location.hostname}:8000/api/`, // Ajusta si cambias de puerto/backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
