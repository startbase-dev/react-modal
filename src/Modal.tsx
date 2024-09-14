import React, { useContext, useEffect } from 'react';
import ModalContext from './ModalContext';
import ReactModal from 'react-modal';
import { ReactModalProps } from './types';

const Modal = ({
  children,
  isOpen,
  appElement,
  name,
  ...rest
}: ReactModalProps) => {
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    if (appElement) ReactModal.setAppElement(appElement);
  }, [appElement]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <ReactModal
      id={name}
      closeTimeoutMS={100}
      contentLabel={name}
      isOpen={isOpen}
      onRequestClose={() => closeModal(name)}
      shouldCloseOnOverlayClick
      {...rest}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
