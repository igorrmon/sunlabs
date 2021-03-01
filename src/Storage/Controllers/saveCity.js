import CitySchema from '../Models/CitySchema';
import Realm from 'realm';

export default function saveCity(lat, lon, id, city, state) {
  console.log(lat, lon, id);
  let realm = new Realm.open({schema: [CitySchema]});
  realm
    .then((realm) => {
      realm.write(() => {
        realm.create('City', {
          lat: lat.toString(),
          long: lon.toString(),
          place_id: id,
          place_name: city,
          place_state: state.short_name,
          favorite: false,
        });
        console.log('deu certo');
      });
      realm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
