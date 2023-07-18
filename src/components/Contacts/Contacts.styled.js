import styled from 'styled-components';
const AddContactWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`;

const IconBtn = styled.button`
  border: none;
  background-color: white;
`;

const CloseButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;
`;

export { AddContactWrapper, ContactsList, IconBtn, CloseButton };
