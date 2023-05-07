import { useState } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { createGroup } from '@storage/group/create';
import { AppError } from '@utils/AppError';

import * as S from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  async function handleCreateGroup() {
    try {

      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo','Informe o nome do grupo.');
      }

      await createGroup(group)
      navigation.navigate('players', { group, });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
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
          onPress={handleCreateGroup}
        >
          Criar
        </S.ButtonWithMargin>
      </S.Content>
    </S.Container>
  )
}
