"use client";

import {
  Modal as ReactModal,
  GlobalModals,
  ModalProvider,
  useModal,
} from "@start-base/react-modal";

import styles from "./Modal.module.css";
import React from "react";

const Modal = ({ name, isOpen, ...props }) => (
  <ReactModal
    appElement="html"
    {...props}
    name={name}
    isOpen={isOpen}
    className={styles.modal}
    overlayClassName={styles.overlay}
  />
);

export { Modal, GlobalModals, ModalProvider, useModal };
