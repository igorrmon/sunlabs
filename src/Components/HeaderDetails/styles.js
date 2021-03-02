import styled from 'styled-components/native';
import colors from '../../UI/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  padding: 0px 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const NameCity = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;

// lat=-6.112330999999999&lon=-38.2052039

//  margin-left: 21px;
export const SearchButton = styled.TouchableOpacity`
  width: 20px;
  height: 16px;
  display: flex;
  align-items: center;
  margin-right: 21px;
`;
