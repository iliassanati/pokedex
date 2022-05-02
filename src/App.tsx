import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { PokedexState } from './reducers';
import { fetchPokemons } from './reducers/pokemonsSlice';

import MainPage from './pages/MainPage';
import PokemonPage from './pages/PokemonPage';
import Loader from './components/Loader';

import './style/style.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: PokedexState) => state.pokemon);

  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div className='container'>
            <a href='/'>
              <h1 className='title'>Pokédex</h1>
            </a>
          </div>
        </div>
      </section>

      <div className='container'>
        {loading ? (
          <Loader />
        ) : (
          <div className='app-content'>
            <Router>
              <Routes>
                <Route element={<MainPage />} path='/' />
                <Route element={<PokemonPage />} path='/pokemon/:name' />
              </Routes>
            </Router>
          </div>
        )}
      </div>
    </>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
