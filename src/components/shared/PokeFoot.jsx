import React from 'react';
import './styles/pokeFoot.css';

const PokeFoot = () => {

  const handleClick = () => {
    scroll(0, 0);
  }

  return (
    <div className='pokefoot'>
        <div className='pokefoot__red'></div>
        <div className='pokefoot__black'>
            <div className='pokefoot__out'>
                <div onClick={handleClick} className='pokefoot__in'></div>
            </div>
        </div>
    </div>
  )
}

export default PokeFoot;