import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardCities from '../../Components/CardCities';
import Header from '../../Components/Header';
import getPlace from '../../Requests/getPlace';
import {Container} from './styles';

function Home() {
  const [results, setResults] = useState([]);
  const [digit, setDigit] = useState('');

  useEffect(() => {
    setResults([]);
    getPlace(digit, setResults, results);
  }, [digit]);

  return (
    <View style={{flex: 1}}>
      <Header digit={digit} setDigit={setDigit} setResults={setResults} />
      <Container>
        <FlatList
          // key={(key)=> }
          contentContainerStyle={{display: 'flex', alignItems: 'center'}}
          keyExtractor={(item, index) => {
            item?.id;
          }}
          data={results}
          renderItem={(item) => {
            return <CardCities infos={item} />;
          }}
          extraData={results}
        />
        {/* // <Text>{results[0]?.description}</Text> */}
      </Container>
    </View>
  );
}

export default Home;
