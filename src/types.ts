import ReactModal from "react-modal";
import { ReactNode } from "react";

export interface ReactModalProps extends Omit<ReactModal.Props, "appElement"> {
  name: string;
  appElement?: string | HTMLElement;
}

export interface GlobalModalsProps {
  children: ReactNode;
}

export interface ModalContextType {
  modals: string[];
  openedModals: Record<string, boolean>;
  modalProps: Record<string, Record<string, any>>;
  setModals: (modals: string[]) => void;
  openModal: (name: string, props?: Record<string, unknown>) => void;
  closeModal: (name: string) => void;
}
