// import { useMMKVBoolean } from 'react-native-mmkv';
// remember to comment the next line once we go to production
import SyncStorage from 'react-native-sync-storage';

import { useState, useEffect } from 'react';
const IS_FIRST_TIME = 'IS_FIRST_TIME';
/**
 * the next custom hook is used like useMMKBoolean 
 * remove it when we go to production mode
 */

function useSyncBoolean(key: string, initialValue: boolean) {
  const [value, setValue] = useState(() => {
    const storedValue = SyncStorage.get(key);
    return storedValue !== undefined ? !!storedValue : initialValue;
  });

  useEffect(() => {
    SyncStorage.set(key, value);
  }, [key, value]);

  return [value, setValue];
}



export const useIsFirstTime = () => {
  // const [isFirstTime, setIsFirstTime] = useMMKVBoolean(IS_FIRST_TIME);
  const [isFirstTime, setIsFirstTime] = useSyncBoolean(IS_FIRST_TIME, false);
  if (isFirstTime === undefined) {
    return [true, setIsFirstTime] as const;
  }
  return [isFirstTime, setIsFirstTime] as const;
};
