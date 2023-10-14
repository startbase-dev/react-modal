import React, { Children, cloneElement, useContext, useEffect } from 'react';

import ModalContext from './ModalContext';

export default function GlobalModals({ children }) {
  const { setModals, openedModals } = useContext(ModalContext);

  useEffect(() => {
    const modals = children?.map((item) => item?.props?.name);
    setModals(modals);
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          isOpen: openedModals?.[child?.props?.name],
        });
      })}
    </>
  );
}
