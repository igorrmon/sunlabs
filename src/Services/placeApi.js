import axios from 'axios';

const placeApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete/',
});

export default placeApi;
