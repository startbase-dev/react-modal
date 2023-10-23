// src/GlobalModals.js
import React, { Children, cloneElement, useContext, useEffect } from 'react';

// src/ModalContext.js
import { createContext } from 'react';
var initialContextState = {
  modals: [],
  openedModals: [],
  setModals: () => {},
  openModal: () => {},
  closeModal: () => {},
};
var ModalContext = createContext(initialContextState);
var Provider = ModalContext.Provider;
var ModalContext_default = ModalContext;

// src/GlobalModals.js
function GlobalModals({ children }) {
  const { setModals, openedModals } = useContext(ModalContext_default);
  useEffect(() => {
    const modals =
      children == null
        ? void 0
        : children.map((item) => {
            var _a;
            return (_a = item == null ? void 0 : item.props) == null
              ? void 0
              : _a.name;
          });
    setModals(modals);
  }, []);
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    Children.map(children, (child) => {
      var _a;
      return cloneElement(child, {
        isOpen:
          openedModals == null
            ? void 0
            : openedModals[
                (_a = child == null ? void 0 : child.props) == null
                  ? void 0
                  : _a.name
              ],
      });
    })
  );
}

// src/Modal.js
import React2, {
  useContext as useContext2,
  useEffect as useEffect2,
} from 'react';
import ReactModal from 'react-modal';
function Modal({ appElement, name, children, isOpen, ...rest }) {
  const { closeModal } = useContext2(ModalContext_default);
  useEffect2(() => {
    ReactModal.setAppElement(appElement);
  }, [appElement]);
  useEffect2(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  return /* @__PURE__ */ React2.createElement(
    ReactModal,
    {
      id: name,
      closeTimeoutMS: 100,
      contentLabel: name,
      name,
      isOpen,
      onRequestClose: () => closeModal(name),
      shouldCloseOnOverlayClick: true,
      ...rest,
    },
    children
  );
}

// src/ModalProvider.js
import React3 from 'react';

// src/useCreateContext.js
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
var useCreateContext_default = useCreateContext;

// src/ModalProvider.js
var ModalProvider = ({ children }) => {
  const { modals, openedModals, setModals, openModal, closeModal } =
    useCreateContext_default();
  return /* @__PURE__ */ React3.createElement(
    Provider,
    {
      value: {
        modals,
        openedModals,
        setModals,
        openModal,
        closeModal,
      },
    },
    children
  );
};
var ModalProvider_default = ModalProvider;

// src/useModal.js
import { useContext as useContext3 } from 'react';
function useModal() {
  const { modals, openedModals, openModal, closeModal } =
    useContext3(ModalContext_default);
  return {
    modals,
    openedModals,
    openModal,
    closeModal,
  };
}
var useModal_default = useModal;
export {
  GlobalModals,
  Modal,
  ModalProvider_default as ModalProvider,
  useModal_default as useModal,
};
