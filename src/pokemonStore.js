export const initialState = {
  status: 'idle',
  pokemon: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'idle':
      return { ...state, status: 'idle' };

    case 'fetching':
      return { ...state, status: 'fetching', pokemon: null };

    case 'fetched':
      return { ...state, status: 'fetched', pokemon: action.payload };

    default:
      return state;
  }
};

// Action creators
const fetchPokemen = () => (dispatch) => {
  // Dispatch the "fetching" action
  dispatch(fetching());

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
          dispatch(
            fetched({
              name: json.name,
              image: json.sprites.front_default
            })
          )
        )
    );
};

const fetching = () => ({
  type: 'fetching'
});

const fetched = (pokemon) => ({
  type: 'fetched',
  payload: pokemon
});

export default reducer;
export { fetchPokemen };
