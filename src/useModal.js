import { useContext } from 'react';

import ModalContext from './ModalContext';

function useModal() {
  const { modals, openedModals, openModal, closeModal } =
    useContext(ModalContext);

  return {
    modals,
    openedModals,
    openModal,
    closeModal,
  };
}

export default useModal;
