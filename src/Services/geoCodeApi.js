import axios from 'axios';
const geoCodeApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export default geoCodeApi;
