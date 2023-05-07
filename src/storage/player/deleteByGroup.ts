import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { getPlayersByGroup } from './listByGroup';


export async function deletePlayerByGroup(playerName: string, groupName: string): Promise<void> {
  try {
    const storedPlayers = await getPlayersByGroup(groupName);

    console.log('storedPlayers', playerName)

    const filteredPlayers = storedPlayers.filter(player => player.name !== playerName);

    console.log('filteredPlayers', filteredPlayers);
    await AsyncStorage.setItem(PLAYER_COLLECTION, JSON.stringify(filteredPlayers));

  } catch (error) {
    throw error;
  }
}
