import { PokedexState } from '.';
import { Pokemon } from '../utils/models';

export const allPokemonsSelector = (state: PokedexState): Pokemon[] =>
  state.pokemon.items;
