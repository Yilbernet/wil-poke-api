import React from 'react';
import './styles/pokePages.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/slices/page.slice';

const PokePages = ({ total }) => {

  const page = useSelector(store => store.page);

  const dispatch = useDispatch();

  const handleLess = (num) => {
    if (page > num) {
      dispatch(setPage(page - num));
    } else {
      dispatch(setPage(total));
    }
    scroll(0, 0);
  }

  const handlePlus = (num) => {
    if (page <= total - num) {
      dispatch(setPage(page + num));
    } else {
      dispatch(setPage(1));
    }
    scroll(0, 0);
  }

  return (
    <div className='pokepages'>
        <button onClick={() => {handleLess(55)}}>{'<<<'}</button>
        <button onClick={() => {handleLess(8)}}>{'<<'}</button>
        <button onClick={() => {handleLess(1)}}>{'<'}</button>
        <span> {page} / {total} </span>
        <button onClick={() => {handlePlus(1)}}>{'>'}</button>
        <button onClick={() => {handlePlus(8)}}>{'>>'}</button>
        <button onClick={() => {handlePlus(55)}}>{'>>>'}</button>
    </div>
  )
}

export default PokePages;