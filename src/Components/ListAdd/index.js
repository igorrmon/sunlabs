import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardCities from '../CardCities';

// import { Container } from './styles';

const ListAdd = ({getRealm}) => {
  return (
    <FlatList
      // key={(key)=> }
      contentContainerStyle={{display: 'flex', alignItems: 'center'}}
      keyExtractor={(item, index) => item.result.id.toString()}
      data={getRealm}
      renderItem={(item) => {
        return <CardCities infos={item} />;
      }}
      extraData={getRealm}
    />
  );
};

export default ListAdd;
