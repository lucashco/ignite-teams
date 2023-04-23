import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type IconButtonTypeStyleProps = 'primary' | 'secondary';

type IconButtonProps = {
  variant: IconButtonTypeStyleProps;
}

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`;


export const Icon = styled(MaterialIcons).attrs<IconButtonProps>(({ theme, variant }) => {
  return {
    size: 24,
    color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  }
})``;
