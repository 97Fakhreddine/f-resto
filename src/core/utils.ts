import { Linking } from 'react-native';
// import { MMKV } from 'react-native-mmkv';
// for expo only use the next line as a storage 
import SyncStorage from 'react-native-sync-storage';

import type { StoreApi, UseBoundStore } from 'zustand';
/**
 * Use MMK for real app and asyncStorage for expo go
 * remember to uncomment and comment storage type when going
 * in production mode
 */
// export const storage = new MMKV();
const storage = SyncStorage;

// export function getItem<T>(key: string): T {
//   const value = storage.getString(key);
//   return value ? JSON.parse(value) || null : null;
// }

export function getItem<T>(key: string): T {
  const value = storage.get(key);
  return value ? JSON.parse(value) || null : null;
}
storage.getString = getItem
// export async function setItem<T>(key: string, value: T) {
//   storage.set(key, JSON.stringify(value));
// }

export function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

// export async function removeItem(key: string) {
//   storage.delete(key);
// }

export function removeItem(key: string) {
  storage.remove(key);
}

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url));
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};


export default storage;
