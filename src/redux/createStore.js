export const createStore = (reducer, initialState) => {
  const store = {
    state: initialState,
    listeners: [],
    getState: () => store.state,
    subscribe: (listener) => {
      store.listeners.push(listener);

      return () => {
        const index = store.listeners.indexOf(listener);
        store.listeners.splice(index, 1);
      };
    },
    dispatch: (action) => {
      store.state = reducer(store.state, action);
      store.listeners.forEach((listener) => listener());
    }
  };

  return store;
};
