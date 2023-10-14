import React, { useContext } from 'react';

import ReactModal from 'react-modal';

import ModalContext from './ModalContext';

export default function Modal({ name, children, ...rest }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <ReactModal
      name={name}
      onRequestClose={() => closeModal(name)}
      shouldCloseOnOverlayClick
      {...rest}
    >
      {children}
    </ReactModal>
  );
}
