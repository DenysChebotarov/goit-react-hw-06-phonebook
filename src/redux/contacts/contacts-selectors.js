export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getItems(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
