import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles';

type Props = TouchableOpacityProps & {
  variant?: S.IconButtonTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function IconButton({ variant = 'primary', icon, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon}  variant={variant} />
    </S.Container>
  )
}
