import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import { ReduxProvider } from './redux/Provider';
import { createStore } from './redux/createStore';
import pokemonReducer, { initialState } from './pokemonStore';

const store = createStore(pokemonReducer, initialState);

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
