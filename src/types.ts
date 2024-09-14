import  ReactModal  from 'react-modal';
import { ReactNode } from 'react';

export interface ReactModalProps extends ReactModal.Props {
  name: string;
}

export interface GlobalModalsProps {
  children: ReactNode;
}

export interface ModalContextType {
  modals: string[];
  openedModals: { [key: string]: boolean }; // Key-value pair for modal names and their open status
  setModals: (modals: string[]) => void;
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
}