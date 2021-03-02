import CitySchema from '../Models/CitySchema';
import Realm from 'realm';
import SnackMessage from '../../Utils/messages';
import colors from '../../UI/colors';

export default function saveCity(lat, lon, id, city, state) {
  console.log(lat, lon, id);
  let realm = new Realm.open({schema: [CitySchema]});
  realm
    .then((realm) => {
      let allCities = realm.objects('City');
      let result = allCities.filtered(`place_id = "${id}"`);

      if (result.length === 0) {
        realm.write(() => {
          realm.create('City', {
            lat: lat.toString(),
            long: lon.toString(),
            place_id: id,
            place_name: city,
            place_state: state.short_name,
            favorite: false,
          });
        });
        SnackMessage(colors.sucess, 'Cidade adicionada com sucesso!');
      } else {
        SnackMessage(
          colors.error,
          'Você não pode adicionar essa cidade novamente!',
        );
      }

      realm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
