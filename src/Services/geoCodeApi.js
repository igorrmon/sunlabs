import axios from 'axios';
import {place_key} from '../Configs/placekey';
const geoCodeApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export default geoCodeApi;
