import React from 'react';

// app-level state management
export const defaultAppState = {
  favouriteProperties: [],
};

export const AppContext = React.createContext({
  ...defaultAppState,
  addPropertyToFavourites: (_property) => {},
  removePropertyFromFavourites: (_property) => {},
});
