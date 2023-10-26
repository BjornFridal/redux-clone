import { useDispatch } from './redux/useDispatch';
import { Wrapper } from './Wrapper';

export default function ComponentA() {
  const dispatch = useDispatch();

  const handleFetchClick = () => {
    // Dispatch the "fetching" action
    dispatch({
      type: 'fetching'
    });

    // Fetch a random pokemon
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(
        Math.random() * 1000
      )}`
    )
      .then((res) => res.json())
      .then((json) => json.results[0].url)
      .then((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((json) =>
            // Dispatch the "fetched" action
            // with the Pokemon as the payload
            dispatch({
              type: 'fetched',
              payload: {
                name: json.name,
                image: json.sprites.front_default
              }
            })
          )
      );
  };

  return (
    <Wrapper label="Component A">
      <button onClick={handleFetchClick}>Fetch Pokémon</button>
    </Wrapper>
  );
}
