import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { parseCookies, setCookie } from 'nookies';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState(() => {
    const { key: storageValue } = parseCookies();

    console.log(initialState);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(undefined, key, state);
  }, [key, state]);

  return [state, setState];
}
