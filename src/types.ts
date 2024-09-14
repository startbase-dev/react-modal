import ReactModal from 'react-modal';
import { ReactNode } from 'react';

export interface ReactModalProps extends ReactModal.Props {
  name: string;
}

export interface GlobalModalsProps {
  children: ReactNode;
}

export interface ModalContextType {
  modals: string[];
  openedModals: Record<string, boolean>; // Key-value pair for modal names and their open status
  modalProps: object;
  setModals: (modals: string[]) => void;
  openModal: (name: string, props: object) => void;
  closeModal: (name: string) => void;
}
