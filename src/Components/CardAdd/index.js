import React from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Card,
  Title,
  Section,
  PartOne,
  SectionTwo,
  TouchableAddText,
} from './styles';

import {TouchableOpacity} from 'react-native-gesture-handler';
import saveCity from '../../Storage/Controllers/saveCity';

const CardAdd = ({infos, setDigit}) => {
  const city = infos.item.results[0]?.address_components[0].long_name;
  const country = infos.item.results[0]?.address_components.find((item) =>
    getCountry(item),
  );

  const state = infos.item.results[0]?.address_components.find((item) =>
    getState(item),
  );

  function getCountry(item) {
    return item.types[0] === 'country';
  }

  function getState(item) {
    return item.types[0] === 'administrative_area_level_1';
  }

  function saveCityCallBack() {
    let place_id = infos.item.results[0]?.place_id;
    let geometry = infos.item.results[0]?.geometry.location;

    let lat = geometry.lat;
    let lon = geometry.lng;

    saveCity(lat, lon, place_id, city, state, setDigit);
  }

  return (
    <Container>
      <Card>
        <Section>
          <PartOne>
            <Title>{city}</Title>
            <Text>{state.short_name + ', ' + country.short_name}</Text>
          </PartOne>
          <View />
        </Section>
        <SectionTwo>
          <View>
            <TouchableOpacity onPress={() => saveCityCallBack()}>
              <TouchableAddText>ADICIONAR</TouchableAddText>
            </TouchableOpacity>
          </View>
        </SectionTwo>
      </Card>
    </Container>
  );
};

export default CardAdd;
