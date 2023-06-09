import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import Button from '../Button/Button';
import { remove } from 'redux/contactSlice';

function ContactList() {
  const items = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch(remove(contactId));
  };

  const FilterItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(nameFilter));
  };

  let contacts = nameFilter === "" ? items : FilterItems();

  return (
    <ul className={s.container}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name} :</p>
          <p className={s.text}>{number}</p>
          <Button text="Delete" onClick={() => deleteContact(id)} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
