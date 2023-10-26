import { useContext, useState, useEffect } from 'react';
import { ReduxContext } from './Provider';

export const useSelector = (selector) => {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      setState(newState);
    });

    return () => {
      unsubscribe();
    };
  }, [selector, store]);

  return state;
};
