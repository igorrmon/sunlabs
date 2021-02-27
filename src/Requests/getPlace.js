import {place_key} from '../Configs/placekey';
import placeApi from '../Services/placeApi';

export default function getPlace(local) {
  placeApi
    .get(`json?key=${place_key}&input=${local}`, {})
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.log(e));
}
