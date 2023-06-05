import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deletContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deletContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
