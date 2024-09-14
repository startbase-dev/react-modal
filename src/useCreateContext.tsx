import { useCallback, useState } from 'react';

function useCreateContext() {
  const [modals, setModals] = useState([]);
  const [openedModals, setOpenedModals] = useState({});
  const [modalProps, setModalProps] = useState({});

  const openModal = useCallback((modalName: string, props: object) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: true,
      };
    });
    setModalProps((prevState) => {
      return {
        ...prevState,
        [modalName]: props,
      };
    });
  }, []);

  const closeModal = useCallback((modalName: string) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: false,
      };
    });
  }, []);

  return {
    modals,
    setModals,
    openedModals,
    modalProps,
    openModal,
    closeModal,
  };
}

export default useCreateContext;
