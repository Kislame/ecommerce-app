import axios from 'axios';

const BASE_URL = 'https://ecommerce-api-zqnf.onrender.com';

const puplicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default puplicRequest;
