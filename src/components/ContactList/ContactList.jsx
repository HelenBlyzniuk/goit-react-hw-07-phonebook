
import { useDispatch } from 'react-redux';

import { removeContact } from 'components/redux/contactsSlice.js';
import { useSelector } from 'react-redux';

import { ListContainer, ListItem, ListButton } from './ContactList.styled.jsx';

export function ContactList() {
  const filterState=useSelector(state=>state.filters)
  const contacts =useSelector(state=>state.contacts)
 
  const normalizedFilter = filterState.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
 
  const dispatch=useDispatch();
  const handleClick = e => {
    dispatch(removeContact(e.currentTarget.id));
  };

  return (
    <ListContainer>
      List of contacts
      {visibleContacts.map(({ name, number, id }) => (
        <ListItem id={id} key={id}>
          {name}: {number}
          <ListButton
            type="button"
            className="deleteContact"
            id={id}
            onClick={handleClick}
          >
            Delete
          </ListButton>
        </ListItem>
      ))}
    </ListContainer>
  );
}

