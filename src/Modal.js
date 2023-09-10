import { useContext } from 'react';

import ReactModal from 'react-modal';

import ModalContext from './ModalContext';

export default function Modal({ name, children, ...rest }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <ReactModal
      name={name}
      ariaHideApp={false}
      onRequestClose={() => closeModal(name)}
      shouldCloseOnOverlayClick={true}
      {...rest}
    >
      {children}
    </ReactModal>
  );
}
