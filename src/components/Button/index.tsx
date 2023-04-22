import { TouchableOpacityProps } from "react-native";
import * as S from './styles';

type Props = TouchableOpacityProps & {
  children: string;
}

export function Button({children, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  )
}
