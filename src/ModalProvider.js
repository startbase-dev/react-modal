import { Provider } from './ModalContext';
import useCreateContext from './useCreateContext';

const ModalProvider = ({ children }) => {
  const { modals, openedModals, setModals, openModal, closeModal } =
    useCreateContext();

  return (
    <Provider
      value={{
        modals: modals,
        openedModals: openedModals,
        setModals: setModals,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </Provider>
  );
};

export default ModalProvider;
