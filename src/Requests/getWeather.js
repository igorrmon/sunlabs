import {weather_key} from '../Configs/weatherkey';
import api from '../Services/api';

// export default function getWheather(units, lat, lon, setResults, results) {
//   let lang = 'pt_br';

//   api
//     .get(`?units=metric&lat=${lat}&lon=${lon}&appid=${weather_key}`)
//     .then((response) => {
//       // console.log('resultado', response.data.name);

//       let old = [...results];
//       old.push(response.data);
//       // console.log('antigo', old);
//       setResults(old); // console.log('old', results);

//       // console.log('resultado', response.data);
//     })
//     .catch((e) => console.log(e));
// }

export default async function getWheather(units, city, setResults, results) {
  let lang = 'pt_br';

  return api
    .get(
      `?units=metric&q=${city.structured_formatting.main_text},br&appid=${weather_key}&lang=pt_br`,
    )
    .then((response) => {
      // console.log('resultado', response.data.name);
      // return {
      //   success: true,
      //   data: response.data,
      // };
      // let old = [...results];
      // old.push(response.data);
      // setResults(old);

      return Promise.resolve(response.data);
    })
    .catch((e) => console.log('deu ruim'));
}
