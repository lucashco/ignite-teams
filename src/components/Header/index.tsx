import logoImg from '@assets/logo.png';
import * as S from './styles'

type Props = {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton }: Props) => {
  return (
    <S.Container>
      { showBackButton && (
        <S.ButtonContainer>
            <S.BackButton>
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
