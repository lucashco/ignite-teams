import { useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useRoute } from '@react-navigation/native'

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import * as S from './styles';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const _renderItem: ListRenderItem<string> = ({ item }) => (
    <Filter
      onPress={() => setTeam(item)}
      title={item}
      isActive={team === item}
    />
  )

  const _renderPlayers: ListRenderItem<string> = ({ item }) => (
    <PlayerCard name={item} onRemove={() => console.log(item)} />
  )

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <IconButton icon="add" />
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
        keyExtractor={item => item}
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

      <Button variant="secondary">Remover turma</Button>

    </S.Container>
  )
}
