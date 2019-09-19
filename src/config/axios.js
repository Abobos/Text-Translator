import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://translation.googleapis.com',
});

export default instance;
