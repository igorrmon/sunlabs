import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardAdd from '../../Components/CardAdd';
import CardCities from '../../Components/CardCities';
import FloatButtom from '../../Components/FloatButton';
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
      getCities(setGetRealm, 0);
    }
  }, [digit]);

  return (
    <View style={{flex: 1}}>
      <Header digit={digit} setDigit={setDigit} setResults={setResults} />
      <Container>
        {digit ? (
          <FlatList
            contentContainerStyle={{display: 'flex', alignItems: 'center'}}
            keyExtractor={(item, index) => index.toString()}
            data={results}
            renderItem={(item) => {
              return <CardAdd infos={item} setDigit={setDigit} />;
            }}
            extraData={results}
          />
        ) : (
          <>
            <FlatList
              contentContainerStyle={{
                display: 'flex',
                alignItems: 'center',
              }}
              keyExtractor={(item, index) => item.result.id.toString()}
              data={getRealm}
              renderItem={(item) => {
                return <CardCities navigation={navigation} infos={item} />;
              }}
              extraData={getRealm}
            />

            <FloatButtom setGetRealm={setGetRealm} />
          </>
        )}
      </Container>
    </View>
  );
}

export default Home;
