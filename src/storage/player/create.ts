import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@utils/AppError';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { Player } from './dto';
import { getPlayersByGroup } from './listByGroup';


export async function createPlayer(newPlayer: Player, group: string): Promise<void> {
  try {
    const storedPlayers = await getPlayersByGroup(group);

    const playerAlreadyExists = storedPlayers
      .filter(player => player.name === newPlayer.name);

    if (playerAlreadyExists) {
      throw new AppError('Esse jogador já está em um time');
    }

    storedPlayers.push(newPlayer)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(storedPlayers));

  } catch (error) {
    throw error;
  }
}



