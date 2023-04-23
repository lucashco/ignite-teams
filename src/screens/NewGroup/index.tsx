import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import * as S from './styles';
import { Input } from '@components/Input';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  function handleAddPlayers() {
    navigation.navigate('players', { group, });
  }

  function handleGroupChangeText(text: string) {
    setGroup(text);
  }

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
          onChangeText={handleGroupChangeText}
        />

        <S.ButtonWithMargin
          onPress={handleAddPlayers}
        >
          Criar
        </S.ButtonWithMargin>
      </S.Content>
    </S.Container>
  )
}
