import axios from 'axios';
const apiDetails = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default apiDetails;
