import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../UI/colors';

const celsius = (
  <Icon name="temperature-celsius" size={30} color={colors.favorite} />
);
const fahrenheit = (
  <Icon name="temperature-fahrenheit" size={30} color={colors.favorite} />
);
const options = [fahrenheit, celsius];

export default function FloatButtomTemperature({setUnits}) {
  const position = options;
  const [pos, setPos] = useState(0);
  function handleOptions() {
    let aux = pos;
    if (aux === 1) {
      setUnits('metric');
      setPos(0);
      aux = 0;
    } else {
      setUnits('imperial');

      setPos(pos + 1);
      aux = aux + 1;
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleOptions();
      }}
      style={styles.fab}>
      <Text style={styles.text}>{position[pos]}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfe6e9',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
