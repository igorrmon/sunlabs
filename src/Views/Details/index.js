import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Results} from 'realm';
import CardDetails from '../../Components/CardDetails';
import getWheatherDetails from '../../Requests/getWeatherDetails';
import {Container} from '../Home/styles';

// import { Container } from './styles';

function Details({route, navigation}) {
  const {infos, otherParam} = route.params;
  const [results, setResults] = useState([]);

  useEffect(() => {
    getWheatherDetails(
      infos.item.result.coord.lat,
      infos.item.result.coord.lon,
      setResults,
    );
  }, []);

  return (
    <Container>
      <FlatList
        // key={(key)=> }
        contentContainerStyle={{display: 'flex', alignItems: 'center'}}
        keyExtractor={(item, index) => item.dt.toString()}
        data={results}
        renderItem={(item, index) => {
          return <CardDetails navi gation={navigation} infos={item} />;
        }}
        extraData={results}
      />
    </Container>
  );
}

export default Details;
