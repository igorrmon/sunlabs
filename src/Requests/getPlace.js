import {place_key} from '../Configs/placekey';
import placeApi from '../Services/placeApi';

export default function getPlace(local, setResults) {
  placeApi
    .get(
      `json?key=${place_key}&input=${local}&type=(cities)&components=country:br&language=pt_BR`,
      {},
    )
    .then((response) => {
      setResults(response.data.predictions);
    })
    .catch((e) => console.log(e));
}
