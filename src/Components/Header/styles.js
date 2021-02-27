import styled from 'styled-components/native';
import colors from '../../UI/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextPage = styled.Text`
  font-size: 20px;
  color: ${colors.white};
`;
