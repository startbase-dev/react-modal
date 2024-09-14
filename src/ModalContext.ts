import { createContext } from 'react';
import { ModalContextType } from './types';

const initialContextState: ModalContextType = {
  modals: [],
  openedModals: {},
  modalProps: {},
  setModals: () => ({}),
  openModal: () => ({}),
  closeModal: () => ({}),
};

const ModalContext = createContext<ModalContextType>(initialContextState);

export const Provider = ModalContext.Provider;

export default ModalContext;
