import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.11.155:3333'
});

export default api;