import { useState, useEffect, useRef } from "react";
import { FlatList, ListRenderItem, Alert, TextInput } from "react-native";
import { useRoute } from '@react-navigation/native'

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { deleteGroup } from "@storage/group/delete";
import { Player } from "@storage/player/dto";
import { createPlayer } from "@storage/player/create";
import { getPlayersByGroupAndTeam } from "@storage/player/listByGroupAndTeam";
import { deletePlayerByGroup } from "@storage/player/deleteByGroup";

import { AppError } from "@utils/AppError";

import * as S from './styles';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [newPlayer, setNewPlayer] = useState('')
  const [players, setPlayers] = useState<Player[]>([])
  const inputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayer.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe um nome para adicionar')
    }

    try {
      await createPlayer({
        name: newPlayer.trim(),
        team,
      }, group);

      inputRef.current?.blur();

      setNewPlayer('');

      await fetchPlayersByTeam();

    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova pessoa', error.message)
      }
      Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      console.log(error)
    }
  }

  async function handleRemoveGroup() {
    try {
      await deleteGroup(group);
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchPlayersByTeam () {
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Buscar pessoa', error.message)
      }
      Alert.alert('Buscar pessoa', 'Não foi possível buscar pessoas')
      console.log(error)
    }
  }

  async function handleRemovePlayer(player: Player) {
    try {
      console.log(player.name, group)
      await deletePlayerByGroup(player.name, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Deletar pessoa', 'Não foi possível deletar essa pessoa')
      console.log(error)
    }
  }

  const _renderItem: ListRenderItem<string> = ({ item }) => (
    <Filter
      onPress={() => setTeam(item)}
      title={item}
      isActive={team === item}
    />
  )

  const _renderPlayers: ListRenderItem<Player> = ({ item }) => (
    <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item)} />
  )

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          inputRef={inputRef}
          onChangeText={setNewPlayer}
          value={newPlayer}
          placeholder="Nome do participante"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <IconButton onPress={handleAddPlayer} icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={_renderItem}
          horizontal
        />
        <S.PlayersNumbers>{players.length}</S.PlayersNumbers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={_renderPlayers}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1}
        ]}
        ListEmptyComponent={
          <ListEmpty
            message="Não há pessoas nesse time"
          />
        }
      />

      <Button
        onPress={handleRemoveGroup}
        variant="secondary">Remover turma</Button>

    </S.Container>
  )
}
