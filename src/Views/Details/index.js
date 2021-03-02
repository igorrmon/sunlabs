import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Results} from 'realm';
import CardDetails from '../../Components/CardDetails';
import Header from '../../Components/Header';
import HeaderDetails from '../../Components/HeaderDetails';
import getWheatherDetails from '../../Requests/getWeatherDetails';
import {Container} from '../Home/styles';

// import { Container } from './styles';

function Details({route, navigation}) {
  const {lat, lon, city} = route.params;
  const [results, setResults] = useState([]);

  useEffect(() => {
    getWheatherDetails(lat, lon, setResults);
  }, []);

  return (
    <>
      <HeaderDetails navigation={navigation} city={city} />
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
    </>
  );
}

export default Details;
