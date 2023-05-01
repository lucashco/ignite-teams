import { Player } from './dto';
import { getPlayersByGroup } from './listByGroup';


export async function getPlayersByGroupAndTeam(group: string, team: string): Promise<Player[]> {
  try {
    const storage = await getPlayersByGroup(group)

    const players = storage.filter(player => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}



