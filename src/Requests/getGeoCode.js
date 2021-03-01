import {place_key} from '../Configs/placekey';
import geoCodeApi from '../Services/geoCodeApi';
import placeApi from '../Services/placeApi';
import getWheather from './getWeather';

export default function getGeoCode(place_id, setResults, results) {
  geoCodeApi
    .get(`json?key=${place_key}&place_id=${place_id}`, {})
    .then((response) => {
      let lat = response.data.results[0].geometry.location.lat;
      let lng = response.data.results[0].geometry.location.lng;
      getWheather('metric', lat, lng, setResults, results);

      //   setResults(response.data.predictions);
    })
    .catch((e) => console.log(e));
}
