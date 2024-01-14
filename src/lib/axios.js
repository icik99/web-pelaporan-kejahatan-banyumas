import axios from 'axios';

// const token = window.localStorage.getItem('token');

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // headers: { Authorization: 'Bearer ' + token },
});

export default Api;
