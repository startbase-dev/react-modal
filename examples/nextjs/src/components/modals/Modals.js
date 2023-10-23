'use client';

import { useModal, GlobalModals, Modal } from '@/components/Modal/Modal';

export default function Modals() {
  const { closeModal, openModal } = useModal();

  return (
    <GlobalModals>
      <Modal
        name="modal-1"
        style={{
          content: {
            width: '500px',
            height: '500px',
          },
        }}
      >
        global modal-1
        <button onClick={() => closeModal('modal-1')}>close modal-1</button>
        <button onClick={() => openModal('modal-2')}>open modal-2</button>
      </Modal>
      <Modal
        name="modal-2"
        style={{
          content: {
            width: '400px',
            height: '400px',
          },
        }}
      >
        global modal-2
        <button onClick={() => closeModal('modal-2')}>close modal-2</button>
        <button onClick={() => openModal('modal-3')}>open modal-3</button>
      </Modal>
      <Modal
        name="modal-3"
        style={{
          content: {
            width: '300px',
            height: '300px',
          },
        }}
      >
        global modal-3
        <button onClick={() => closeModal('modal-3')}>close modal-3</button>
        <button onClick={() => openModal('modal-4')}>open modal-4</button>
      </Modal>
      <Modal
        name="modal-4"
        style={{
          content: {
            width: '200px',
            height: '200px',
          },
        }}
      >
        global modal-4
        <button onClick={() => closeModal('modal-4')}>close modal-4</button>
      </Modal>
    </GlobalModals>
  );
}
