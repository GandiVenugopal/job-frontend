import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.191.212.115:5000/api',
});

// Attach token if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
