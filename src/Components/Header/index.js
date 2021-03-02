import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  ContainerSpace,
  Input,
  SearchButton,
  TextPage,
} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../UI/colors';
const searchIcon = <Icon name="zoom" size={16} color={colors.white} />;
const closeIcon = <Icon name="close-a" size={16} color={colors.white} />;

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
            <SearchButton onPress={() => setViewSearch(false)}>
              <Text>{searchIcon}</Text>
            </SearchButton>
          </View>
        </ContainerSpace>
      ) : (
        <Container>
          <View>
            <SearchButton onPress={() => handleClose(true)}>
              {closeIcon}
            </SearchButton>
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

export default Header;
