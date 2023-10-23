"use client";

import {useModal, Modal} from "@/components/Modal/Modal"
import {useState} from "react";

export default function CustomModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {openModal} = useModal();

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>open local modal</button>
            <Modal
                style={
                    {
                        content: {
                            width: "600px",
                            height: "600px",
                        }
                    }
                    }
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
                contentLabel="Minimal Modal Example"
            >
                local modal
                <button onClick={() => setIsModalOpen(false)}>close</button>
                <button onClick={() => openModal("modal-1")}>open global modal-1</button>
            </Modal>
        </>

    )
}
