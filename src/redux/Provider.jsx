import { createContext } from 'react';
import StoreStateDump from '../StoreStateDump';

export const ReduxContext = createContext();

export const ReduxProvider = ({ children, store }) => {
  return (
    <ReduxContext.Provider value={store}>
      <fieldset
        style={{
          background: 'none',
          padding: '30px 20px 20px 20px'
        }}
      >
        <legend>Context Provider</legend>

        {children}
      </fieldset>

      <StoreStateDump />
    </ReduxContext.Provider>
  );
};
