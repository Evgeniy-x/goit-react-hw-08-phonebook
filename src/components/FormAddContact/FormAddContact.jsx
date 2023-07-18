import React, { useState } from 'react';
import Notiflix from 'notiflix';
import css from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Button, Input, Label, Title } from 'Styled/Form.styled';
import { BtnList } from './AddContactModal.styled';
import { ContactsList } from 'components/Contacts/Contacts.styled';

export function FormAddContact({ toggleModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    const form = e.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    const existingName = contacts.find(({ name }) => name === formName);
    const existingNumber = contacts.find(({ number }) => number === formNumber);

    if (existingName) {
      reset();
      return Notiflix.Notify.failure(`${formName} is already in contacts`);
    } else if (existingNumber) {
      reset();
      return Notiflix.Notify.failure(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    reset();
    toggleModal();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSumbit} className={css.form}>
      <Title>Add Contact</Title>
      <ContactsList>
        <li className={css.item}>
          <Label>
            Name:
            <Input
              value={name}
              onChange={onChangeHandler}
              name="name"
              type="text"
            />
          </Label>
        </li>
        <li className={css.item}>
          <Label>
            Phone:
            <Input
              value={number}
              name="number"
              onChange={onChangeHandler}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </li>
      </ContactsList>
      <BtnList>
        <li>
          <Button type="submit">Add to Contacts</Button>
        </li>
        <li>
          <Button type="Button" onClick={toggleModal}>
            Close
          </Button>
        </li>
      </BtnList>
    </form>
  );
}
