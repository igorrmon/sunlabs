import {weather_key} from '../Configs/weatherkey';
import api from '../Services/weather';

export default async function getWheather(
  units,
  lat,
  lon,
  place_name,
  place_state,
  favorite,
  place_id,
) {
  return api
    .get(`?units=metric&lat=${lat}&lon=${lon}&appid=${weather_key}&lang=pt_BR`)
    .then((response) => {
      return Promise.resolve({
        result: response.data,
        place_name: place_name,
        place_state: place_state,
        favorite: favorite,
        place_id: place_id,
      });
    })
    .catch((e) => console.log(e));
}

// export default async function getWheather(units, city, setResults, results) {
//   let lang = 'pt_br';

//   return api
//     .get(
//       `?units=metric&q=${city.structured_formatting.main_text},br&appid=${weather_key}&lang=pt_br`,
//     )
//     .then((response) => {
//       // console.log('resultado', response.data.name);
//       // return {
//       //   success: true,
//       //   data: response.data,
//       // };
//       // let old = [...results];
//       // old.push(response.data);
//       // setResults(old);

//       return Promise.resolve(response.data);
//     })
//     .catch((e) => console.log('deu ruim'));
// }
