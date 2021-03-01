import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardAdd from '../../Components/CardAdd';
import CardCities from '../../Components/CardCities';
import Header from '../../Components/Header';
import getPlace from '../../Requests/getPlace';
import getCities from '../../Storage/Controllers/getCities';
import {Container} from './styles';

function Home({navigation}) {
  const [results, setResults] = useState([]);
  const [getRealm, setGetRealm] = useState([]);
  const [digit, setDigit] = useState('');

  useEffect(() => {
    setResults([]);
    getPlace(digit, setResults, results);
  }, [digit]);

  {
    console.log(getRealm);
  }

  useEffect(() => {
    if (!digit) {
      getCities(setGetRealm);
    }
  }, [digit]);

  return (
    <View style={{flex: 1}}>
      <Header digit={digit} setDigit={setDigit} setResults={setResults} />
      <Container>
        {digit ? (
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
        ) : (
          <FlatList
            // key={(key)=> }
            contentContainerStyle={{display: 'flex', alignItems: 'center'}}
            keyExtractor={(item, index) => item.result.id.toString()}
            data={getRealm}
            renderItem={(item) => {
              return <CardCities navigation={navigation} infos={item} />;
            }}
            extraData={getRealm}
          />
        )}

        {/* // <Text>{results[0]?.description}</Text> */}
      </Container>
    </View>
  );
}

export default Home;
