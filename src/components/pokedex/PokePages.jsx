import React from 'react';
import './styles/pokePages.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/slices/page.slice';

const PokePages = ({ total }) => {

  const page = useSelector(store => store.page);

  const dispatch = useDispatch();

  const handleLess = (num) => {
    const less = page - num;
    if (less > 0) {
      dispatch(setPage(less));
    } else if (total + less > 0) {
        dispatch(setPage(total + less));
    } else {
      dispatch(setPage(total));
    }
    scroll(0, 0);
  }

  const handlePlus = (num) => {
    const plus = page + num;
    if (plus <= total) {
      dispatch(setPage(plus));
    } else if (plus - total <= total) {
      dispatch(setPage(plus - total));
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