import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: '/api',
});

export { axiosClient };
