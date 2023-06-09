import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

import { filter } from 'redux/contactSlice';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);
  const onChange = e => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase()));
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Name"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;
