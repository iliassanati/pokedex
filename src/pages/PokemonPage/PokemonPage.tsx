import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { PokedexState } from '../../reducers';
import { fetchPokemonSpeciesById } from '../../reducers/speciesSlice';

import Loader from '../../components/Loader';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import './style.scss';

const PokemonDetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>()!;
  const { loading, items } = useSelector(
    (state: PokedexState) => state.species
  );
  const { items: pokemons } = useSelector(
    (state: PokedexState) => state.pokemon
  );

  const species = name && items[name];
  const pokemon = pokemons.find((item) => item.name === name)!;
  const index = pokemons.findIndex((item) => item.name === name);

  React.useEffect(() => {
    if (!species && name) {
      dispatch(fetchPokemonSpeciesById(name));
    }
  }, [dispatch, name, species]);

  if (loading || !species) {
    return <Loader />;
  }

  const visitPokemon = (name: string) => navigate(`/pokemon/${name}`);

  return (
    <>
      <div className='control-container'>
        <button
          className='button'
          onClick={() => visitPokemon(pokemons[index - 1].name)}
          disabled={index === 1}
        >
          {index > 1
            ? `< ${pokemons[index - 1].name} #${pokemons[index - 1].id}`
            : 'Prev'}
        </button>
        <button className='button is-white' onClick={() => navigate('/')}>
          Back to Search
        </button>
        <button
          className='button'
          onClick={() => visitPokemon(pokemons[index + 1].name)}
          disabled={pokemons.length === index + 1}
        >
          {index < pokemons.length
            ? `#${pokemons[index + 1].id} ${pokemons[index + 1].name} >`
            : 'Next'}
        </button>
      </div>

      <PokemonDetail
        allPokemons={pokemons}
        pokemon={pokemon}
        species={species}
        onEvolutionClick={visitPokemon}
      />
    </>
  );
};

export default PokemonDetailPage;
