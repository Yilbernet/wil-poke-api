import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';

const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainer(textInput.current.value.trim()));
        textInput.current.value = '';
        navigate('/pokedex');
    }

  return (
    <div className='homepage'>
      <figure className='homepage__img'>
        <img src="../../assets/pokemon.png" alt="pokemon title" />
        <img className='homepage__gif homepage__gif-1' src="../../assets/fireworks.gif" alt="fireworks" />
        <img className='homepage__gif homepage__gif-2' src="../../assets/confetti.gif" alt="fireworks" />
      </figure>
      <h1 className='homepage__title'>Hi Trainer</h1>
      <h2>To start give me your name</h2>
      <form className='homepage__form' onSubmit={handleSubmit}>
          <input ref={textInput} type="text" />
          <button>Start</button>
      </form>
    </div>
  )
}

export default HomePage;