import { useEffect, useId, useState } from 'react';
// import { useDebouncedCallback } from "use-debounce";
import css from './TextFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTextFilter, selectTextFilter } from '../../redux/filterSlice.js';
import { useDebounce } from 'use-debounce';

export default function TextFilter() {
  const id = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(
    /*(state) => state.filters.text*/ selectTextFilter,
  );

  const [text, setText] = useState(filterValue ); //це локальний стан для фільтра
  const [debounceText] = useDebounce(text, 1300); // а в редакс записуємо тільки коли змінюється debounceText

  //   const debounced = useDebouncedCallback(
  //     (value) => dispatch(changeTextFilter(value)),
  //     300
  //   );
  // const handleChange = (event) => {
  //   dispatch(changeTextFilter(event.target.value));
  // };
  useEffect(()=>{
    dispatch(changeTextFilter(debounceText));
  },[debounceText, dispatch])
  return (
    <div className={css.wrapper}>
    

      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input
        className={css.field}
        type="text"
        id={id}
        value={text}
        // onChange={handleChange}
        // defaultValue={filterValue}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
