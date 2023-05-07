import { useState, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';

import { getGroups } from '@storage/group/list';

import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const _renderItem: ListRenderItem<string> = ({ item }) => {
    return <GroupCard onPress={() => handleOpenGroup(item)} title={item} />
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const storedGroups = await getGroups();
      setGroups(storedGroups);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []))


  return (
    <S.Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        // contentContainerStyle={{ flex: 1 }}
        data={groups}
        renderItem={_renderItem}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty
          message='Que tal cadastrar a primeira turma'
        />}
      />

      <Button onPress={handleNewGroup}>Criar nova turma</Button>

    </S.Container>
  )
}
