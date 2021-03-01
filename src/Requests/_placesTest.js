import {place_key} from '../Configs/placekey';
import placeApi from '../Services/placeApi';
import getGeoCode from '../Requests/getGeoCode';
import placeTestAPi from '../Services/_placesTestApi';

export default async function _placeTest(local, setResults) {
  placeTestAPi
    .get('json?key=AIzaSyBhbWdJ9fF3zcnHMwV0QVtjvPcMOWlu6mQ&fields=geometry', {})
    .then((response) => {
      // console.log(response.getPlace());
      // setResults(response.data.predictions);
      //   let objects = response.data.predictions;

      //   objects.map((item) => {
      //     // console.log(item.place_id);
      //     getGeoCode(item.place_id);
      //   });
      // Promise.all(response.data.predictions).then((result) => {
      console.log(response);

      // });
    })
    .catch((e) => console.log(e));
}
