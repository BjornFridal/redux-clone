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

export default reducer;
