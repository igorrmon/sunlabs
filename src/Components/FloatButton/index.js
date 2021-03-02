import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../UI/colors';
const heart = <Icon name="heart" size={30} color={colors.favorite} />;
const noHeart = <Icon name="heart-o" size={30} color={colors.favorite} />;
const remove = <Icon name="remove" size={30} color={colors.favorite} />;
const options = [heart, noHeart, remove];

export default function FloatButtom() {
  const [position, setPosition] = useState(options);
  const [pos, setPos] = useState(0);
  function handleOptions() {
    let aux = pos;
    if (aux === 2) {
      setPos(0);
    } else {
      setPos(pos + 1);
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
