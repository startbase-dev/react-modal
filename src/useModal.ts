import { useContext } from 'react';

import ModalContext from './ModalContext';

function useModal() {
  const { modals, openedModals, modalProps, openModal, closeModal } =
    useContext(ModalContext);

  return {
    modals,
    openedModals,
    modalProps,
    openModal,
    closeModal,
  };
}

export default useModal;
