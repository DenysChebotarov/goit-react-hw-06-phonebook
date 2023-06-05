import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Name"
          onChange={e =>
            dispatch(changeFilter(e.target.value.toLocaleLowerCase()))
          }
        />
      </label>
    </div>
  );
}

export default Filter;
