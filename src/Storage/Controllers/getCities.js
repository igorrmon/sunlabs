import CitySchema from '../Models/CitySchema';
import Realm from 'realm';
import getWheather from '../../Requests/getWeather';
import SnackMessage from '../../Utils/messages';
import colors from '../../UI/colors';

function _typeFunction(type, realm) {
  if (type === 0) {
    return realm.objects('City');
  } else if (type === 1) {
    return realm.objects('City').filtered('favorite = true');
  } else {
    return realm.objects('City').filtered('favorite = false');
  }
}

export default function getCities(setGetRealm, type) {
  let realm = new Realm.open({schema: [CitySchema]});
  console.log('type', type);
  realm
    .then((realm) => {
      // console.log('RESULT', realm.objects('City'));

      let objects = _typeFunction(type, realm);

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
              item.place_id,
            );
            return results;
          }),
        ).then((response) => {
          setGetRealm(response);
          if (response.length === 0) {
            SnackMessage(
              colors.primary,
              'Nenhum resultado encontrado para essa categoria!',
            );
          }
        });
      }

      realm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
