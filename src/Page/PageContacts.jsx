import { Container } from 'Styled/ContactsContainer.styled';
import {
  AddContactWrapper,
  IconBtn,
} from 'components/Contacts/Contacts.styled';
import Contacts from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';
import AddContactModal from 'components/FormAddContact/AddContactModal';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ReactComponent as Icon } from '../Icon/plus.svg';
import { FilterListContainer } from 'components/FormAddContact/AddContactModal.styled';

const PageContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <Container>
      <AddContactWrapper>
        <p>Add Contact to phone book</p>
        <IconBtn onClick={toggleModal}>
          <Icon width="35px" />
        </IconBtn>
      </AddContactWrapper>
      {showModal && (
        <AddContactModal toggleModal={toggleModal}>
          <FormAddContact />
        </AddContactModal>
      )}
      <FilterListContainer>
        <Filter />
        <Contacts />
      </FilterListContainer>
    </Container>
  );
};

export default PageContacts;
