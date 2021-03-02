import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CardDetails from '../../Components/CardDetails';
import FloatButtomTemperature from '../../Components/FloatButtonTemperature';
import HeaderDetails from '../../Components/HeaderDetails';
import getWheatherDetails from '../../Requests/getWeatherDetails';
import {Container} from '../Home/styles';

function Details({route, navigation}) {
  const {lat, lon, city} = route.params;
  const [results, setResults] = useState([]);
  const [units, setUnits] = useState('metric');
  const [unitsExib, setUnitsExib] = useState('C');

  useEffect(() => {
    getWheatherDetails(lat, lon, setResults, units, setUnitsExib);
  }, [units]);

  return (
    <>
      <HeaderDetails navigation={navigation} city={city} />
      <Container>
        <FlatList
          contentContainerStyle={{display: 'flex', alignItems: 'center'}}
          keyExtractor={(item, index) => item.dt.toString()}
          data={results}
          renderItem={(item, index) => {
            return (
              <CardDetails
                units={unitsExib}
                navigation={navigation}
                infos={item}
              />
            );
          }}
          extraData={results}
        />
        <FloatButtomTemperature setUnits={setUnits} />
      </Container>
    </>
  );
}

export default Details;
