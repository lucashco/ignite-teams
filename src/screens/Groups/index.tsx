import { useState } from 'react';

import { Header } from '@components/Header';
import {Highlight} from '@components/Highlight';
import {GroupCard} from '@components/GroupCard';

import * as S from './styles';
import { FlatList, ListRenderItem } from 'react-native';

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
        data={groups}
        renderItem={_renderItem}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

    </S.Container>
  )
}
