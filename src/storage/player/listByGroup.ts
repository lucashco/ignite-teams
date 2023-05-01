import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@utils/AppError';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { Player } from './dto';


export async function getPlayersByGroup(group: string): Promise<Player[]> {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const players: Player[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}



