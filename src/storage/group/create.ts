import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { getGroups } from './list';

export async function createGroup(groupName: string): Promise<void> {
  try {
    const storedGroups = await getGroups();

    storedGroups.push(groupName);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storedGroups));

  } catch (error) {
    throw error;
  }
}



