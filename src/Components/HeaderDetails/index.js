import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, SearchButton} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../UI/colors';
import {TextPage} from '../Header/styles';

const closeIcon = <Icon name="angle-left" size={16} color={colors.white} />;

function Header({navigation, city}) {
  function handleClose() {
    navigation.goBack();
  }

  return (
    <>
      <Container>
        <View>
          <SearchButton onPress={() => handleClose(true)}>
            {closeIcon}
          </SearchButton>
        </View>
        <TextPage>{city}</TextPage>
      </Container>
    </>
  );
}

export default Header;
