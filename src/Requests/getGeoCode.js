import {place_key} from '../Configs/placekey';
import geoCodeApi from '../Services/geoCodeApi';
import placeApi from '../Services/placeApi';
import getWheather from './getWeather';

export default async function getGeoCode(place_id) {
  return geoCodeApi
    .get(`json?key=${place_key}&place_id=${place_id}`, {})
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((e) => console.log(e));
}
