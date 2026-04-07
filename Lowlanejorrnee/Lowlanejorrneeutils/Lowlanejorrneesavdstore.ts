import AsyncStorage from '@react-native-async-storage/async-storage';

const lowlanejorrneeSavdKey = 'lowlanejorrnee_saved_ids_v1';

export async function lowlanejorrneeGetSavedIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(lowlanejorrneeSavdKey);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(v => typeof v === 'string');
  } catch {
    return [];
  }
}

export async function lowlanejorrneeSetSavedIds(ids: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(lowlanejorrneeSavdKey, JSON.stringify(ids));
  } catch {
    // ignore
  }
}

export async function lowlanejorrneeToggleSavedId(
  id: string,
): Promise<string[]> {
  const curr = await lowlanejorrneeGetSavedIds();
  const next = curr.includes(id) ? curr.filter(x => x !== id) : [...curr, id];
  await lowlanejorrneeSetSavedIds(next);
  return next;
}

export function lowlanejorrneeIdsToRec(ids: string[]): Record<string, boolean> {
  const rec: Record<string, boolean> = {};
  ids.forEach(id => {
    rec[id] = true;
  });
  return rec;
}

