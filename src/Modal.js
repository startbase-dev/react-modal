import React, { useContext, useEffect } from 'react';

import ReactModal from 'react-modal';

import ModalContext from './ModalContext';

export default function Modal({ appElement, name, children, isOpen, ...rest }) {
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    ReactModal.setAppElement(appElement);
  }, [appElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <ReactModal
      id={name}
      closeTimeoutMS={100}
      contentLabel={name}
      name={name}
      isOpen={isOpen}
      onRequestClose={() => closeModal(name)}
      shouldCloseOnOverlayClick
      {...rest}
    >
      {children}
    </ReactModal>
  );
}
