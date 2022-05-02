import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';

import pokedexReducer, { PokedexState } from './reducers';

const store = configureStore({
  reducer: pokedexReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, PokedexState, null, Action<string>>;

export default store;
