export const applyMiddleware = (...middlewares) => {
  return (createStore) => (reducer, initialState) => {
    const store = createStore(reducer, initialState);

    const composedMiddleware = middlewares
      .map((middleware) => {
        // Give the middleware access to
        // the store's state and dispatch.
        return middleware({
          getState: store.getState,
          dispatch: (action) => store.dispatch(action)
        });
      })
      .reduce((composed, middleware) => {
        // Compose the middleware together.
        return (...args) => composed(middleware(...args));
      });

    // Override the store's dispatch method.
    // Now any action dispatched will run
    // through each middleware first.
    store.dispatch = composedMiddleware(store.dispatch);

    return store;
  };
};
