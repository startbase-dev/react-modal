'use client';

import {
  Modal as ReactModal,
  GlobalModals,
  ModalProvider,
  useModal,
} from '@start-base/react-modal';

import styles from './Modal.module.css';

const Modal = ({ ...props }) => (
  <ReactModal
    appElement="html"
    {...props}
    className={styles.modal}
    overlayClassName={styles.overlay}
  />
);

export { Modal, GlobalModals, ModalProvider, useModal };
