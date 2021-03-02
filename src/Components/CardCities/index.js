import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {
  Container,
  Card,
  Title,
  Section,
  Temperature,
  Condition,
  MinMax,
  PartOne,
  SectionTwo,
  ButtonsDouble,
  CalendarButton,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../UI/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Heart from '../../Assets/heart.png';
import favoriteAction from '../../Storage/Controllers/favorite';
const heart = <Icon name="heart" size={30} color={colors.favorite} />;
const noHeart = <Icon name="heart-o" size={30} color={colors.favorite} />;
const calendar = <Icon name="calendar" size={30} color={colors.primary} />;

// import { Container } from './styles';

const CardCities = ({infos, navigation}) => {
  const [favorite, setFavorite] = useState(infos.item.favorite);
  {
    console.log(infos);
  }

  function viewDetails() {
    navigation.navigate('Details', {
      lat: infos.item.result.coord.lat,
      lon: infos.item.result.coord.lon,
      city: infos.item?.place_name,
    });
  }

  function handleFavorite() {
    let callBack = !favorite;
    setFavorite(callBack);
    favoriteAction(
      infos.item?.place_id,
      callBack,
      infos.item.result.coord.lat,
      infos.item.result.coord.lon,
      infos.item?.place_state,
      infos.item?.place_name,
    );
  }

  return (
    <Container>
      <Card>
        <Section>
          <PartOne>
            <Title>{infos.item?.place_name}</Title>
            <Text>
              {infos.item?.place_state + ', '}
              {infos.item?.result.sys.country}
            </Text>
          </PartOne>
          <View>
            <Temperature>
              <Text>{parseInt(infos.item?.result.main.temp)}°</Text>
            </Temperature>
          </View>
        </Section>
        <SectionTwo>
          <View>
            <Condition>{infos.item?.result.weather[0]?.description}</Condition>
            <Text>
              {parseInt(infos.item?.result.main.temp_min)}° -
              {parseInt(infos.item?.result.main.temp_max)}°
            </Text>
          </View>
          <ButtonsDouble>
            <CalendarButton
              onPress={() => {
                viewDetails();
              }}>
              {calendar}
            </CalendarButton>

            <TouchableOpacity onPress={() => handleFavorite()}>
              {favorite ? heart : noHeart}
            </TouchableOpacity>
          </ButtonsDouble>
        </SectionTwo>
      </Card>
    </Container>
  );
};

export default CardCities;
