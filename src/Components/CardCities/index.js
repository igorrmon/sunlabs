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
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../UI/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Heart from '../../Assets/heart.png';

const heart = <Icon name="heart" size={30} color={colors.favorite} />;
const noHeart = <Icon name="heart-o" size={30} color={colors.favorite} />;

// import { Container } from './styles';

const CardCities = ({infos}) => {
  const [favorite, setFavorite] = useState(false);
  {
    console.log(infos);
  }
  return (
    <Container>
      <Card>
        <Section>
          <PartOne>
            <Title>{infos.item?.place_name}</Title>
            <Text>{infos.item?.result.sys.country}</Text>
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
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {favorite ? heart : noHeart}
          </TouchableOpacity>
        </SectionTwo>
      </Card>
    </Container>
  );
};

export default CardCities;
