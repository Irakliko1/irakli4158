import axios from 'axios';

export const BASE_URL = 'https://digitalinstitute-amazon.azurewebsites.net/api/'

const instance = axios.create({baseURL: BASE_URL});

instance.interceptors.response.use(
  response => {
    if(response.data.jwt){
        localStorage.setItem('token', JSON.stringify(response.data.jwt));
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;