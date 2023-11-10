import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
