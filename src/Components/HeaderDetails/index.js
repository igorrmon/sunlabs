import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Container, SearchButton, NameCity} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../UI/colors';

const closeIcon = <Icon name="angle-left" size={16} color={colors.white} />;

// import { Container } from './styles';

function Header({navigation, city}) {
  const [viewSearch, setViewSearch] = useState(true);

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
        <NameCity>{city}</NameCity>
      </Container>
    </>
  );
}

{
  /* <View>
  {' '}
  <Input selectionColor={colors.white} placeholder="Informe a cidade" />
  <View>
    <TouchableOpacity onPress={() => setViewSearch(true)}>
      {myIcon}
    </TouchableOpacity>
  </View>
</View>; */
}

export default Header;
