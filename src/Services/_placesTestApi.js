import axios from 'axios';
import {place_key} from '../Configs/placekey';
const placeTestApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/',
});

export default placeTestApi;
