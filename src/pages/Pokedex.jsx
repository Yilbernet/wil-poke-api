import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/pokedex.css';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import PokePages from '../components/pokedex/PokePages';
import { setPage } from '../store/slices/page.slice';

const Pokedex = () => {

  const [inputValue, setInputValue] = useState('');
  const [pokemons, getPokemons, getType, isLoading, hasError] = useFetch();

  const trainer = useSelector(store => store.trainer);
  const page = useSelector(store => store.page);
  const selectValue = useSelector(store => store.selectValue);

  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue('');
    if (selectValue) {
      getType(selectValue);
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=1305';
      getPokemons(url);
    }
  }, [selectValue]);
  
  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = '';
    dispatch(setPage(1));
  }

  const pokeSearch = (poke) => {
    const perName = poke.name.includes(inputValue);
    return perName;
  }

  const quantity = 8;
  const total = Math.ceil(pokemons?.results.filter(pokeSearch).length / quantity);
  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    return pokemons?.results.filter(pokeSearch).slice(start, end);
  }

  return (
    <section className='pokedex'>
      {
        isLoading ?
          <figure className='pokeload__img'>
            <img src="../../assets/pokeload.gif" alt="pokeLoading" />
            <figcaption>Loading...</figcaption>
          </figure>
          :
          <>
            <h2 className='pokedex__title'><span>Welcome {trainer},</span> here you can find your favorite pokemon, let's go!</h2>
            <div className='pokedex__filters'>
              <form className='pokedex__form' onSubmit={handleSubmit}>
                <input ref={textInput} type="text" />
                <button>Search</button>
              </form>
              <PokeSelect/>
            </div>
            <div>
              {
                hasError ?
                  <div className='pokedex__error'>
                    <h2>something went wrong</h2>
                    <h3>please try again more late</h3>
                  </div>
                  :
                  <>
                    {
                      total > 1 &&
                      <PokePages
                        total={total}
                      />
                    }
                    <div className='pokedex__container'>
                      {
                        pagination()?.map((poke) => (
                          <PokeCard
                            key={poke.url}
                            url={poke.url}
                          />
                        ))
                      }
                    </div>
                    {
                      total > 1 ?
                      <PokePages
                        total={total}
                      />
                      :
                      <h2 className='pokedex__pages'>There are no more pokemons</h2>
                    }
                  </>
              }
            </div>
          </>
      }
    </section>
  )
}

export default Pokedex;