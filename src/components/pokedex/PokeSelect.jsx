import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/slices/page.slice';
import { setSelectValue } from '../../store/slices/selectValue.slice';

const PokeSelect = () => {

    const [types, getTypes] = useFetch();

    const selectValue = useSelector(store => store.selectValue);

    const dispatch = useDispatch();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/';
        getTypes(url)
    }, []);
    
    const selectOption = useRef();

    const handleChange = () => {
        dispatch(setSelectValue(selectOption.current.value));
        dispatch(setPage(1));
    }

  return (
    <select ref={selectOption} onChange={handleChange}>
        <option value="" selected>All pokemons</option>
        {
            types?.results.map(type => (
                <option
                    key={type.url}
                    value={type.url}
                    selected={
                        selectValue===type.url && true
                    }
                >
                    {type.name}
                </option>
            ))
        }
    </select>
  )
}

export default PokeSelect;