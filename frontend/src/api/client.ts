import axios from 'axios';

// For now, we are using localhost backend, but in prod deployment, we'd use an env file
const BASE_URL = 'http://127.0.0.1:8000';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
