import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Cache-Control': 's-maxage=10, stale-while-revalidate',
  },
});
