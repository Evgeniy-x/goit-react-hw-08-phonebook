import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './AddContactModal.styled';

const AddContactModal = ({ toggleModal, children }) => {
  const modalRoot = document.getElementById('modal-root');
  useEffect(() => {
    const closeOnEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [toggleModal]);

  const clickOnbackDrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={clickOnbackDrop}>
      <ModalWindow
      // toggleModal={toggleModal}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, { toggleModal })
        )}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;
