import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { CloseButton } from './Contacts.styled';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {number}
        </p>
        <CloseButton
          onClick={() => dispatch(deleteContact(id))}
          type="CloseButton"
        >
          Delete
        </CloseButton>
      </li>
    </>
  );
};

export default ContactsItem;
