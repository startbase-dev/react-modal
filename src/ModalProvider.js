import React from 'react';
import { Provider } from './ModalContext';
import useCreateContext from './useCreateContext';

const ModalProvider = ({ children }) => {
  const { modals, openedModals, modalProps, setModals, openModal, closeModal } =
    useCreateContext();

  return (
    <Provider
      value={{
        modals,
        openedModals,
        modalProps,
        setModals,
        openModal,
        closeModal,
      }}
    >
      {children}
    </Provider>
  );
};

export default ModalProvider;
