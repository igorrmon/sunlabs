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
      // console.log(response.getPlace());
      // setResults(response.data.predictions);
      let objects = response.data.predictions;
      // console.log('objects', objects);
      Promise.all(
        objects.map(async (item) => {
          const code = await getGeoCode(item.place_id);
          return code;
        }),
      ).then((response) => {
        setResults(response);
      });

      // console.log(objects[0].structured_formatting.main_text);

      // Promise.all(
      //   objects.map(async (item) => {
      //     const weather = await getWheather(
      //       'metric',
      //       item,
      //       setResults,
      //       results,
      //     );
      //     return weather;
      //   }),
      // )
      //   .then((response) => {
      //     // console.log(response[0]);
      //     let final = response.filter((item, index) => item);
      //     // console.log(final);
      //     setResults(final);
      //   })
      //   .catch((e) => console.log(e));
      // Promise.all(response.data.predictions).then((result) => {

      // });
    })
    .catch((e) => console.log(e));
}
