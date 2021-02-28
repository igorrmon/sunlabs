import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Container, ContainerSpace, Input, TextPage} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../UI/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const searchIcon = <Icon name="zoom" size={16} color={colors.white} />;
const closeIcon = <Icon name="close-a" size={16} color={colors.white} />;

// import { Container } from './styles';

function Header({digit, setDigit, setResults}) {
  const [viewSearch, setViewSearch] = useState(true);

  function handleClose() {
    setViewSearch(true);
    setDigit('');
    setResults([]);
  }

  return (
    <>
      {viewSearch ? (
        <ContainerSpace>
          <View>
            <TextPage>Cidades</TextPage>
          </View>
          <View>
            <TouchableOpacity onPress={() => setViewSearch(false)}>
              <Text>{searchIcon}</Text>
            </TouchableOpacity>
          </View>
        </ContainerSpace>
      ) : (
        <Container>
          <View>
            <TouchableOpacity onPress={() => handleClose(true)}>
              {closeIcon}
            </TouchableOpacity>
          </View>

          <Input
            value={digit}
            onChangeText={(text) => setDigit(text)}
            autoFocus={true}
            selectionColor={colors.white}
            placeholder="Informe a cidade"
          />
        </Container>
      )}
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
