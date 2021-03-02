import {weather_key} from '../Configs/weatherkey';
import apiDetails from '../Services/weatherDetailsApi';

export default async function getWheatherDetails(lat, lon, setResults, units) {
  let lang = 'pt_br';
  // console.log('lat', lat);

  return apiDetails
    .get(
      `/onecall?units=${units}&lat=${lat}&lon=${lon}&&exclude=hourly,minutely,alerts&appid=${weather_key}&lang=pt_BR&`,
    )
    .then((response) => {
      let resp = response.data.daily;
      resp[0].temp.day = response.data.current.temp;
      setResults(resp);
    })
    .catch((e) => console.log(e));
}
