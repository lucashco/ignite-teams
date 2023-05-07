import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { getGroups } from './list';

export async function deleteGroup(groupName: string): Promise<void> {
  try {
    const storedGroups = await getGroups();

    const index = storedGroups
      .findIndex(group => group === groupName);

    if (index !== -1) {
      storedGroups.splice(index, 1);
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storedGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
  } catch (error) {
    throw error;
  }
}
