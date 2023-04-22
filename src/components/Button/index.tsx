import { TouchableOpacityProps } from "react-native";
import * as S from './styles';

type Props = TouchableOpacityProps & {
  variant?: S.ButtonTypeStyleProps;
  children: string;
}

export function Button({children, variant = 'primary', ...rest}: Props) {
  return (
    <S.Container variant={variant} {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  )
}
