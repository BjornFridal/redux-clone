import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import { ReduxProvider } from './redux/Provider';
import { createStore } from './redux/createStore';
import pokemonReducer, { initialState } from './pokemonStore';
import { applyMiddleware } from './redux/applyMiddleware';
import { thunkMiddleware } from './redux-middelware/thunkMiddleware';
import { loggerMiddleware } from './redux-middelware/loggerMiddleware';

const store = createStore(
  pokemonReducer,
  initialState,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

function App() {
  return (
    <ReduxProvider store={store}>
      <main>
        <ComponentA />
        <ComponentB />
      </main>
    </ReduxProvider>
  );
}

export default App;
