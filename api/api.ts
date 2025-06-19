import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASEURL, 
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('facitAccessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
