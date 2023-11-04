import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://frontend-test-api.mvm-tech.xyz/api/', 
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
