import { combineReducers } from '@reduxjs/toolkit';

import pokemonsReducer, { PokemonsState } from './pokemonsSlice';
import speciesReducer, { SpeciesState } from './speciesSlice';

const pokedexReducer = combineReducers({
  pokemon: pokemonsReducer,
  species: speciesReducer,
});

export interface PokedexState {
  pokemon: PokemonsState;
  species: SpeciesState;
}

export default pokedexReducer;
