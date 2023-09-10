var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  GlobalModals: () => GlobalModals,
  Modal: () => Modal,
  ModalProvider: () => ModalProvider_default,
  useModal: () => useModal_default
});
module.exports = __toCommonJS(src_exports);

// src/GlobalModals.js
var import_react2 = require("react");

// src/ModalContext.js
var import_react = require("react");
var initialContextState = {
  modals: [],
  openedModals: [],
  setModals: () => {
  },
  openModal: () => {
  },
  closeModal: () => {
  }
};
var ModalContext = (0, import_react.createContext)(initialContextState);
var Provider = ModalContext.Provider;
var ModalContext_default = ModalContext;

// src/GlobalModals.js
function GlobalModals({ children }) {
  const { setModals, openedModals } = (0, import_react2.useContext)(ModalContext_default);
  (0, import_react2.useEffect)(() => {
    const modals = children == null ? void 0 : children.map((item) => {
      var _a;
      return (_a = item == null ? void 0 : item.props) == null ? void 0 : _a.name;
    });
    setModals(modals);
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, import_react2.Children.map(children, (child) => {
    var _a;
    return (0, import_react2.cloneElement)(child, {
      isOpen: openedModals == null ? void 0 : openedModals[(_a = child == null ? void 0 : child.props) == null ? void 0 : _a.name]
    });
  }));
}

// src/Modal.js
var import_react3 = require("react");
var import_react_modal = __toESM(require("react-modal"));
function Modal({ name, children, ...rest }) {
  const { closeModal } = (0, import_react3.useContext)(ModalContext_default);
  return /* @__PURE__ */ React.createElement(
    import_react_modal.default,
    {
      name,
      ariaHideApp: false,
      onRequestClose: () => closeModal(name),
      shouldCloseOnOverlayClick: true,
      ...rest
    },
    children
  );
}

// src/useCreateContext.js
var import_react4 = require("react");
function useCreateContext() {
  const [modals, setModals] = (0, import_react4.useState)([]);
  const [openedModals, setOpenedModals] = (0, import_react4.useState)({});
  const openModal = (0, import_react4.useCallback)((modalName) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: true
      };
    });
  }, []);
  const closeModal = (0, import_react4.useCallback)((modalName) => {
    setOpenedModals((prevState) => {
      return {
        ...prevState,
        [modalName]: false
      };
    });
  }, []);
  return {
    modals,
    setModals,
    openedModals,
    openModal,
    closeModal
  };
}
var useCreateContext_default = useCreateContext;

// src/ModalProvider.js
var ModalProvider = ({ children }) => {
  const { modals, openedModals, setModals, openModal, closeModal } = useCreateContext_default();
  return /* @__PURE__ */ React.createElement(
    Provider,
    {
      value: {
        modals,
        openedModals,
        setModals,
        openModal,
        closeModal
      }
    },
    children
  );
};
var ModalProvider_default = ModalProvider;

// src/useModal.js
var import_react5 = require("react");
function useModal() {
  const { modals, openedModals, openModal, closeModal } = (0, import_react5.useContext)(ModalContext_default);
  return {
    modals,
    openedModals,
    openModal,
    closeModal
  };
}
var useModal_default = useModal;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GlobalModals,
  Modal,
  ModalProvider,
  useModal
});
