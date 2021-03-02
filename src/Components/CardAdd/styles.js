import styled from 'styled-components/native';
import colors from '../../UI/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Card = styled.View`
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
  margin-bottom: 10px;
`;

export const SectionTwo = styled(Section)`
  display: flex;
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
  text-transform: capitalize;
`;

export const TouchableAddText = styled.Text`
  color: ${colors.button};
`;
