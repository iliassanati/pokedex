import * as React from 'react';
import { useSelector } from 'react-redux';

import { SearchParams } from '../../utils/models';
import { PokedexState } from '../../reducers';

import SearchView from '../../components/SearchView';
import PokemonGridView from '../../components/PokemonGridView';

import './style.scss';
import { useNavigate } from 'react-router';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { items: pokemons } = useSelector(
    (state: PokedexState) => state.pokemon
  );
  const [displayItems, setDisplayItems] = React.useState(pokemons);

  const onItemClick = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  const handleChangeFilter = (filter: SearchParams) => {
    setDisplayItems(
      pokemons.filter(
        (pokemon) =>
          pokemon.id.toString().includes(filter.id) &&
          pokemon.name.toLowerCase().includes(filter.name) &&
          pokemon.types.reduce(
            (a, { type }) => a || type.name.toLowerCase().includes(filter.type),
            false
          ) &&
          pokemon.abilities.reduce(
            (a, { ability }) =>
              a || ability.name.toLowerCase().includes(filter.ability),
            false
          )
      )
    );
  };

  return (
    <div className='main-page-container'>
      <SearchView onChangeFilter={handleChangeFilter} />
      <PokemonGridView items={displayItems} onItemClick={onItemClick} />
    </div>
  );
};

export default MainPage;
