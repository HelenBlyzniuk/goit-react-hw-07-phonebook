import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteContact, fetchContacts } from './thunks';
import { handleContactAdd,handleContactFetch,handleDeleteContact,handlePending,handleRejected } from './handlers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleContactFetch)
      .addCase(addContact.fulfilled, handleContactAdd)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);

    
    // addContact(state, action) {
    //   const isContact = state.filter(
    //     contact =>
    //       contact.name.toLowerCase() === action.payload.name.toLowerCase()
    //   );

    //   if (isContact.length > 0) {
    //     alert('The contact has already existed');
    //     return;
    //   } else {
    //     state.push(action.payload);

    //   }
    // },
    // removeContact(state, action) {
    //     return state.filter(contact => contact.id !== action.payload);

    // },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
