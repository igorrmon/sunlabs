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
    if (digit.length > 0) {
      getPlace(digit, setResults);
    } else {
      setResults([]);
    }
  }, [digit]);

  return (
    <View style={{flex: 1}}>
      <Header digit={digit} setDigit={setDigit} setResults={setResults} />
      <Container>
        <FlatList
          // key={(key)=> }
          contentContainerStyle={{display: 'flex', alignItems: 'center'}}
          keyExtractor={(item, index) => item.place_id}
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
