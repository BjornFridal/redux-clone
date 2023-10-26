import { useSelector } from './redux/useSelector';
import { Wrapper } from './Wrapper';

export default function StoreStateDump() {
  const state = useSelector((state) => state);

  return (
    <Wrapper label="Store state">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Wrapper>
  );
}
