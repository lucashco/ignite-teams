import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const ButtonContainer = styled.View`
  flex: 1;
`

export const BackButton = styled.TouchableOpacity`
  max-width: 36px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))`

`
