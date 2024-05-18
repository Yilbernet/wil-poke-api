import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css';

const PokeInfo = () => {

  const params = useParams();

  const navigate = useNavigate();

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
  }, [params.id]);
  
  scroll(0, 0);

  const handlePrev = () => {
    switch(+params.id) {
      case 1: navigate(`/pokedex/10277`);
        break;
      case 10001: navigate(`/pokedex/1025`);
        break;
      default: navigate(`/pokedex/${+params.id - 1}`);
    }
  }

  const handleNext = () => {
    switch(+params.id) {
      case 1025: navigate(`/pokedex/10001`);
        break;
      case 10277: navigate(`/pokedex/1`);
        break;
      default: navigate(`/pokedex/${+params.id + 1}`);
    }
  }

  return (
    <section className='pokeinfo'>
      <div className={`pokeinfo__back bg-${pokemon?.types[0].type.name}`}></div>
      <figure className='pokeinfo__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
        <img src="../../assets/serpentina.gif" alt="confetti" />
      </figure>
      <span className='pokeinfo__id'># {pokemon?.id}</span>
      <div className='pokeinfo__name'>
        <hr />
        <h2 className={`tx-${pokemon?.types[0].type.name}`}>{pokemon?.name.split('-').join(' ')}</h2>
        <hr />
      </div>
      <ul className='pokeinfo__data'>
        <div className='pokeinfo__btn pokeinfo__prev' onClick={handlePrev}>
          {'<'}
        </div>
        <li><span>weight</span><span>{pokemon?.weight}</span></li>
        <li><span>height</span><span>{pokemon?.height}</span></li>
        <div className='pokeinfo__btn pokeinfo__next' onClick={handleNext}>
          {'>'}
        </div>
      </ul>
      <div className='pokeinfo__container'>
        <article>
          <h3>type</h3>
          <ul>
            {
              pokemon?.types.map(type => (
                <li className={`tp-${type.type.name}`} key={type.type.url}>
                  {type.type.name}
                </li>
              ))
            }
          </ul>
        </article>
        <article>
          <h3>skills</h3>
          <ul>
            {
              pokemon?.abilities.map(skill => (
                <li key={skill.ability.url}>{skill.ability.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
      <div className='pokeinfo__title'>
        <h2>Stats</h2>
        <hr />
        <img src="../../assets/pokebola.png" alt="pokebola" />
      </div>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
            <div className='stats__bar'><div style={{width: `${stat.base_stat/2.5}%`}} className='stats__prog'></div></div></li>
          ))
        }
      </ul>
      <div className='pokeinfo__title'>
        <h2>Movements</h2>
        <hr />
        <img src="../../assets/pokebola.png" alt="pokebola" />
      </div>
      <ul className='pokeinfo__moves'>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.url}>{move.move.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default PokeInfo;