import React, {useEffect} from 'react';
import {View} from 'react-native';
import getWheather from '../../Requests/getWeather';

// import { Container } from './styles';

function Home() {
  useEffect(() => {
    // getWheather();
  }, []);

  return <View />;
}

export default Home;
