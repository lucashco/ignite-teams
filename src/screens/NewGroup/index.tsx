import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import * as S from './styles';
import { Input } from '@components/Input';

export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
        />

        <S.ButtonWithMargin>Criar</S.ButtonWithMargin>
      </S.Content>
    </S.Container>
  )
}
