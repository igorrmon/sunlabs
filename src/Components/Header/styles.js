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

export const ContainerSpace = styled(Container)`
  justify-content: space-between;
`;

export const TextPage = styled.Text`
  font-size: 20px;
  color: ${colors.white};
`;
// lat=-6.112330999999999&lon=-38.2052039
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  color: ${colors.white};
  width: 50%;
  font-size: 18px;
  margin-left: 21px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 20px;
  height: 16px;
  display: flex;
  align-items: center;
`;
