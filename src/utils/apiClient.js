import axios from 'axios';

const apiClient = () => {
  const BASE_URL = 'https://api.storerestapi.com';

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    // responseType: 'json',
  });

  return axiosInstance;
};

export default apiClient;
