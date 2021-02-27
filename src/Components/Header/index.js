import React from 'react';
import {Text, View} from 'react-native';
import {Container, TextPage} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../UI/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const myIcon = <Icon name="search-location" size={16} color={colors.white} />;

// import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <View>
        <TextPage>Cidades</TextPage>
      </View>
      <View>
        <TouchableOpacity>{myIcon}</TouchableOpacity>
      </View>
    </Container>
  );
};

export default Header;
