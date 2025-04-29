import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://www.swapi.tech/api', // usa la variable o por defecto swapi.tech
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // opcional: para evitar que se quede colgado si la API tarda
})

export default api

