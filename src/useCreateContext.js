import { useCallback, useState } from 'react';

function useCreateContext() {
  const [modals, setModals] = useState([]);
  const [openedModals, setOpenedModals] = useState({});

  const openModal = useCallback((modalName) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: true,
      };
    });
  }, []);

  const closeModal = useCallback((modalName) => {
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
    openModal,
    closeModal,
  };
}

export default useCreateContext;
