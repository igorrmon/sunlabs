import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardAdd from '../CardAdd';

// import { Container } from './styles';

const ListPlaces = ({results}) => {
  return (
    <FlatList
      // key={(key)=> }
      contentContainerStyle={{display: 'flex', alignItems: 'center'}}
      keyExtractor={(item, index) => item.place_id}
      data={results}
      renderItem={(item) => {
        return <CardAdd infos={item} />;
      }}
      extraData={results}
    />
  );
};

export default ListPlaces;
