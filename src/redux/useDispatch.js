import { useContext } from 'react';
import { ReduxContext } from './Provider';

export function useDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}
