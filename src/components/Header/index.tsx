import { useNavigation } from '@react-navigation/native'

import logoImg from '@assets/logo.png';
import * as S from './styles'

type Props = {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton }: Props) => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate('groups');
  }

  return (
    <S.Container>
      { showBackButton && (
        <S.ButtonContainer>
            <S.BackButton onPress={handleBack}>
              <S.BackIcon />
            </S.BackButton>
          </S.ButtonContainer>
        )
      }

      <S.Logo
        source={logoImg}
      />
    </S.Container>
  )
}
