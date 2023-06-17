import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from './redux/thunks';
import { getContacts, getError, getIsLoading } from './redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  console.log("items",items.length)

  useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 30,
        color: 'grey',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {items.length > 0 && !error && <ContactList />}
    </div>
  );
}

