import CitySchema from '../Models/CitySchema';
import Realm from 'realm';
import getWheather from '../../Requests/getWeather';

export default function getCities(setGetRealm) {
  let realm = new Realm.open({schema: [CitySchema]});
  realm
    .then((realm) => {
      // console.log('RESULT', realm.objects('City'));
      let objects = realm.objects('City');

      if (objects) {
        Promise.all(
          objects.map((item) => {
            results = getWheather(
              'metric',
              item.lat,
              item.long,
              item.place_name,
              item.place_state,
              item.favorite,
            );
            return results;
          }),
        ).then((response) => {
          setGetRealm(response);
        });
      }

      realm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
