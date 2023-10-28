import { fetchPokemen } from './pokemonStore';
import { useDispatch } from './redux/useDispatch';
import { Wrapper } from './Wrapper';

export default function ComponentA() {
  const dispatch = useDispatch();

  const handleFetchClick = () => {
    // Dispatch the "fetchPokemen" action
    dispatch(fetchPokemen());
  };

  return (
    <Wrapper label="Component A">
      <button onClick={handleFetchClick}>Fetch Pokémon</button>
    </Wrapper>
  );
}
