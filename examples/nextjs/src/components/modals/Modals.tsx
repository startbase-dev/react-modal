"use client";

import { useModal, GlobalModals, Modal } from "@/components/Modal/Modal";
import React, { CSSProperties } from "react";

export default function Modals() {
  const { closeModal, openModal } = useModal();

  const modalStyles: Record<string, CSSProperties> = {
    "modal-1": { width: "500px", height: "500px" },
    "modal-2": { width: "400px", height: "400px" },
    "modal-3": { width: "300px", height: "300px" },
    "modal-4": { width: "200px", height: "200px" },
  };

  return (
    <GlobalModals>
      {Object.keys(modalStyles).map((key) => (
        <Modal
          key={key}
          name={key}
          style={{ content: modalStyles[key] }}
          isOpen={false}
        >
          global {key}
          <button onClick={() => closeModal(key)}>close {key}</button>
          {key !== "modal-4" && (
            <button
              onClick={() =>
                openModal(`modal-${parseInt(key.split("-")[1], 10) + 1}`)
              }
            >
              open modal-{parseInt(key.split("-")[1], 10) + 1}
            </button>
          )}
        </Modal>
      ))}
    </GlobalModals>
  );
}
