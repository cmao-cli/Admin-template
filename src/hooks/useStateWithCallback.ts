import { useState, useEffect } from 'react';

type Callback<V> = (value:V) => void;
export type UseStateWithCallback<V> = {
  value:V;
  callback?:Callback<V>;
}
export type UseStateWithCallbackReturn<T> = (nextValue:T, callback?:Callback<T>) => void;

export function useStateWithCallback<T = any>(defaultValue:T):[T, UseStateWithCallbackReturn<typeof defaultValue>] {
  const [state, setState] = useState<UseStateWithCallback<T>>({
    value: defaultValue,
    callback: (value) => value,
  });
  useEffect(() => {
    const { callback } = state;
    callback && callback(state.value);
  }, [state.value]);

  return [
    state.value,
    (nextValue, callback) => {
      setState({
        value: nextValue,
        callback,
      });
    },
  ];
}
