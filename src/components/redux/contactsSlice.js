import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      const isContact = state.filter(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
     
      if (isContact.length > 0) {
        alert('The contact has already existed');
        return;
      } else {
        state.push(action.payload);
       
      }
    },
    removeContact(state, action) {
        return state.filter(contact => contact.id !== action.payload);
        
    },
  },
});

export const {addContact, removeContact}=contactSlice.actions;
export const contactReducer=contactSlice.reducer;