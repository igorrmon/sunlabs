import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import getPlace from '../../Requests/getPlace';

// import { Container } from './styles';

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPlace('Pau dos Ferros', setResults);
  }, []);

  return (
    <View>
      <View>
        <FlatList
          // key={(key)=> }

          keyExtractor={(item, index) => item.place_id}
          data={results}
          renderItem={(item) => {
            return (
              <View>
                <Text>{item.item.description}</Text>
              </View>
            );
          }}
        />
        {/* // <Text>{results[0]?.description}</Text> */}
      </View>
    </View>
  );
}

export default Home;
