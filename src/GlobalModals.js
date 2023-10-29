import React, { Children, cloneElement, useContext, useEffect } from 'react';

import ModalContext from './ModalContext';

export default function GlobalModals({ children }) {
  const { setModals, openedModals } = useContext(ModalContext);

  const childrenArray = Children.toArray(children);

  useEffect(() => {
    const modals = childrenArray?.map((item) => item?.props?.name);
    setModals(modals);
  }, []);

  return (
    <>
      {Children.map(childrenArray, (child, index) => {
        return cloneElement(child, {
          isOpen: openedModals?.[child?.props?.name],
          style: {
            ...child?.props?.style,
            overlay: {
              zIndex: openedModals?.[child?.props?.name]
                ? 1000 + Object.keys(openedModals).length + index
                : 'unset',
              ...child?.props?.style?.overlay,
            },
          },
        });
      })}
    </>
  );
}
