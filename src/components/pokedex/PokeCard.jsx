import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/pokeCard.css';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
      getPokemon(url);
    }, []);

    const hadlePokemon = () => {
        navigate(`/pokedex/${pokemon.id}`);
    }

  return (
    <article onClick={hadlePokemon} className={`pokecard bd-${pokemon?.types[0].type.name}`}>
        <img className='pokecard__brillo' src="../../../assets/pokebrillo.gif" alt="brillo" />
        <div className={`pokecard__back bg-${pokemon?.types[0].type.name}`}></div>
        <figure className='pokecard__img'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemonimage" />
        </figure>
        <h3 className={`pokecard__name tx-${pokemon?.types[0].type.name}`}>{pokemon?.name.split('-').join(' ')}</h3>
        <ul className='pokecard__types'>
            {
                pokemon?.types.map(type => (
                    <li className={`slot${type.slot}`} key={type.type.url}>{type.type.name}</li>
                ))
            }
        </ul>
        <span>type</span>
        <hr />
        <ul className='pokecard__stats'>
            {
                pokemon?.stats.map(stat => (
                    !stat.stat.name.includes('-') &&
                    <li key={stat.stat.url}><span>{stat.stat.name}</span><span className={`tx-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span></li>
                ))
            }
        </ul>
    </article>
  )
}

export default PokeCard;