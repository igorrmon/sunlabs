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

  return (
    <Container>
      <Card>
        <Section>
          <PartOne>
            <Title>{infos.item.structured_formatting.main_text}</Title>
            <Text>{infos.item.terms[infos.item.terms.length - 1].value}</Text>
          </PartOne>
          <View>
            <Temperature>18°</Temperature>
          </View>
        </Section>
        <SectionTwo>
          <View>
            <Condition>Parcialmente nublado</Condition>
            <Text>18º - 24º</Text>
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
