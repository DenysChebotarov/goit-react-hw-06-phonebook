import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContactState } from 'redux/contactSlice';

import s from './ContactForm.module.css';
import Button from '../Button/Button';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactState);

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    let isAdded = false;
    contacts.forEach(el => {
      if (el.name === contact.name) {
        Report.failure(
          'WARNING',
          `${contact.name} is already in contacts`,
          'close'
        );
        isAdded = true;
      }
    });
    if (isAdded) {
      return;
    }
    dispatch(add(contact));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
      </label>
      <label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +00 000 000 00 00"
          required
          onChange={handleChangeNumber}
        />
      </label>
      <Button text="Add Contact" />
    </form>
  );
}

export default ContactForm;
