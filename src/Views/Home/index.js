import React, {useEffect} from 'react';
import {View} from 'react-native';
import getPlace from '../../Requests/getPlace';

// import { Container } from './styles';

function Home() {
  useEffect(() => {
    getPlace('Pau dos Ferros');
  }, []);

  return <View />;
}

export default Home;
