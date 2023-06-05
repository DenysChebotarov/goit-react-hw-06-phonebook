import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contact/Add',
  ({ id, name, number }) => {
    return {
      payload: { id, name, number },
    };
  }
);

export const deletContact = createAction('contact/delete');
export const changeFilter = createAction('contact/chengeFilter');
