import { LOCALSTORAGE_TOKEN_KEY } from './constants';
import { toast } from 'react-toastify';

// * Development URLs
const API_BASE_URL = `http://localhost:5000/api`;
const API_BASE_ORIGIN = `http://localhost:5000`;

// * Production URLs
// const API_BASE_URL = `https://package-api.herokuapp.com/api`;
// const API_BASE_ORIGIN = `https://package-api.herokuapp.com/`;

const handleCatch = (err) => {
  let errMsg = 'Something Went Wrong';
  if (err.message) errMsg = err.message;
  if (err.response?.data?.message)
    errMsg = err.response?.data?.message;
  toast.error(errMsg);
};

const makeReq = (
  endpoint, // e.g '/users
  { body, ...customConfig } = {},
  method = 'GET'
) => {
  const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${API_BASE_URL}${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export { API_BASE_URL, API_BASE_ORIGIN, makeReq, handleCatch };
