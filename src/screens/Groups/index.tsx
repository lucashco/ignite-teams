import { Header } from '@components/Header';
import {Highlight} from '@components/Highlight';
import {GroupCard} from '@components/GroupCard';

import * as S from './styles';

export function Groups() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <GroupCard title='FALA MACONHEIRO' />
    </S.Container>
  )
}
