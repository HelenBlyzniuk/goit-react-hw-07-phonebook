import React from 'react';
import { nanoid } from 'nanoid';

import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled.jsx';



import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice.js';


export function ContactForm() {
  const dispatch=useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const form=e.target;

    dispatch(addContact({
      name:e.target.elements.name.value.toString(),
      number:e.target.elements.number.value.toString(),
      id: nanoid(),
    }))  

    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="...name"
          
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="...number"
          
        />
      </FormLabel>
      <FormButton type="submit" onSubmit={handleSubmit}>
        Add contact
      </FormButton>
    </FormContainer>
  );
}

