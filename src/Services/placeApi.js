import axios from 'axios';
import {place_key} from '../Configs/placekey';
const placeApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete/',
});

export default placeApi;
