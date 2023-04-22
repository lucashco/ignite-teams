import { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Header } from '@components/Header';
import {Highlight} from '@components/Highlight';
import {GroupCard} from '@components/GroupCard';
import { Button } from '@components/Button';
import ListEmpty from '@components/ListEmpty';

import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState([]);

  const _renderItem: ListRenderItem<string> = ({ item }) => {
    return <GroupCard title={item} />
  }

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={groups}
        renderItem={_renderItem}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty
          message='Que tal cadastrar a primeira turma'
        />}
      />

      <Button>Criar nova turma</Button>

    </S.Container>
  )
}
