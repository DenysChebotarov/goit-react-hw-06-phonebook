import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deletContact } from 'redux/contacts/contacts-actions';
import s from './ContactList.module.css';
import Button from '../Button/Button';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const onDeletContact = id => dispatch(deletContact(id));
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.container}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name} :</p>
          <p className={s.text}>{number}</p>
          <Button text="Delete" onClick={() => onDeletContact(id)} />
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
