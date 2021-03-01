import CitySchema from '../Models/CitySchema';
import Realm from 'realm';

export default function saveCity(lat, lon, id, name) {
  console.log(lat, lon, id);
  let realm = new Realm.open({schema: [CitySchema]});
  realm
    .then((realm) => {
      realm.write(() => {
        realm.create('City', {
          lat: lat.toString(),
          long: lon.toString(),
          place_id: id,
          place_name: name,
        });
        console.log('deu certo');
      });
      realm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
