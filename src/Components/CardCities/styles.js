import styled from 'styled-components/native';
import colors from '../../UI/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  width: 100%;

  /* padding: 15px 16px; */
`;

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  max-width: 328px;
  /* max-height: 130px; */
  width: 328px;
  min-height: 130px;
  padding: 15px 16px;
  margin-bottom: 16px;
  background-color: ${colors.white};
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const Section = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SectionTwo = styled(Section)`
  margin-top: 10px;
`;

export const PartOne = styled.View`
  width: 75%;
  display: flex;
`;

export const Temperature = styled.Text`
  font-size: 34px;
  color: ${colors.secondary};
`;

export const Condition = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
`;

export const FavoriteTouch = styled.TouchableOpacity``;
