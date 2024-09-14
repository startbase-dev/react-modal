import React from 'react';
import { Provider } from './ModalContext';
import useCreateContext from './useCreateContext';

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { modals, openedModals, modalProps, setModals, openModal, closeModal } =
    useCreateContext();

  return (
    <Provider
      value={{
        modals: modals,
        openedModals: openedModals,
        modalProps: modalProps,
        setModals: setModals as React.Dispatch<React.SetStateAction<string[]>>,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </Provider>
  );
};

export default ModalProvider;
