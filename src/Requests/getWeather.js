import {weather_key} from '../Configs/weatherkey';
import api from '../Services/api';

export default function getWheather(units, lat, lon) {
  let lang = 'pt_br';
  api
    .get(`?units=metric&lat=${lat}&lon=${lon}&appid=${weather_key}`)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.log(e));
}
