import React from 'react';
import './styles/pokeHead.css';
import { useNavigate } from 'react-router-dom';

const PokeHead = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokedex');
  }

  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className='pokehead'>
      <div className='pokehead__red'>
        <figure onClick={handleClick} className='pokehead__img'>
          <img src="../../../assets/poketitle.png" alt="poketitle" />
        </figure>
      </div>
      <div className='pokehead__black'>
        <div className='pokehead__out'>
          <div onClick={handleHome} className='pokehead__in'></div>
        </div>
      </div>
    </div>
  )
}

export default PokeHead;