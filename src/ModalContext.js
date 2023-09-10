import { createContext } from 'react';

const initialContextState = {
  modals: [],
  openedModals: [],
  setModals: () => {},
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext(initialContextState);

export const Provider = ModalContext.Provider;

export default ModalContext;
