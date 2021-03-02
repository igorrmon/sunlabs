import React from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Card,
  Title,
  Section,
  Temperature,
  Condition,
  PartOne,
  SectionTwo,
} from './styles';

var months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

var days = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

const CardDetails = ({infos, navigation, units}) => {
  function timeConvert(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    return `${day + ' de ' + month}`;
  }

  function getDayName(timestamp) {
    let date = new Date(timestamp * 1000);
    console.log('data', date.getDay());
    var dayName = days[date.getDay()];
    return dayName;
  }

  return (
    <Container>
      <Card>
        <Section>
          <PartOne>
            <Title>
              {infos.index === 0
                ? 'Hoje'
                : infos.index === 1
                ? 'Amanhã'
                : getDayName(infos.item.dt)}
              {/* {getDayName(infos.item.dt)} */}
            </Title>
            <Text>{timeConvert(infos.item.dt)}</Text>
          </PartOne>
          <View>
            <Temperature>
              <Text>
                {parseInt(infos?.item.temp.day)}°{units}
              </Text>
            </Temperature>
          </View>
        </Section>
        <SectionTwo>
          <View>
            <Condition>{infos?.item.weather[0]?.description}</Condition>
            <Text>
              {parseInt(infos?.item.temp.min)}° -{' '}
              {parseInt(infos?.item.temp.max)}°
            </Text>
          </View>
        </SectionTwo>
      </Card>
    </Container>
  );
};

export default CardDetails;
