import CitySchema from '../Models/CitySchema';
import Realm from 'realm';
import SnackMessage from '../../Utils/messages';
import colors from '../../UI/colors';

export default function favoriteAction(id, value) {
  let realm = new Realm.open({schema: [CitySchema]});
  realm
    .then((realm) => {
      let allCities = realm.objects('City');
      console.log('all', allCities);
      let result = allCities.filtered(`place_id = "${id}"`);
      console.log(result);
      if (result.length > 0) {
        realm.write(() => {
          realm.create(
            'City',
            {
              place_id: `${id}`,
              favorite: value,
            },
            'modified',
          );
        });

        value
          ? SnackMessage(colors.favorite, 'Cidade favoritada!')
          : SnackMessage(colors.favorite, 'Cidade desfavoritada!');
      } else {
        SnackMessage(colors.error, 'Erro ao favoritar');
      }

      realm.close();
    })
    .catch((error) => {
      SnackMessage(colors.error, 'Erro ao favoritar');
    });
}
