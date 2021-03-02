import {place_key} from '../Configs/placekey';
import placeApi from '../Services/placeApi';
import getGeoCode from '../Requests/getGeoCode';
import getWheather from './getWeather';

export default async function getPlace(local, setResults, results) {
  placeApi
    .get(
      `json?key=${place_key}&input=${local}&types=(cities)&components=country:br&language=pt-BR`,
      {},
    )
    .then((response) => {
      let objects = response.data.predictions;

      Promise.all(
        objects.map(async (item) => {
          const code = await getGeoCode(item.place_id);
          return code;
        }),
      ).then((response) => {
        setResults(response);
      });
    })
    .catch((e) => console.log(e));
}
