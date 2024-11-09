"use client";

import { useModal, Modal } from "../Modal/Modal";
import React, { useState, CSSProperties } from "react";

export default function CustomModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { openModal } = useModal();

  const modalContentStyle: CSSProperties = {
    width: "600px",
    height: "600px",
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>open local modal</button>
      <Modal
        name="localModal"
        style={{ content: modalContentStyle }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        contentLabel="Minimal Modal Example"
      >
        local modal
        <button onClick={() => setIsModalOpen(false)}>close</button>
        <button onClick={() => openModal("modal-1")}>
          open global modal-1
        </button>
      </Modal>
    </>
  );
}
