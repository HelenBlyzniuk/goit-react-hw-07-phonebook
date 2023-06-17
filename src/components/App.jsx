import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { Error } from './Error/Error';
import { fetchContacts } from './redux/thunks';
import { getContacts, getError, getIsLoading } from './redux/selectors';


export function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
 

  useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        maxWidth: '600px',
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
      {loading && <Loader/>}
      {error && <Error/>}
      {items.length > 0 && !error && <ContactList />}
    </div>
  );
}

