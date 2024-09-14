import React, { Children, cloneElement, useContext, useEffect, ReactElement } from 'react';
import ModalContext from './ModalContext';
import { GlobalModalsProps } from './types';

const GlobalModals: React.FC<GlobalModalsProps> = ({ children }) => {
  const { setModals, openedModals } = useContext(ModalContext);

  const childrenArray = Children.toArray(children) as ReactElement[];

  useEffect(() => {
    const modals = childrenArray?.map((item) => item?.props?.name);
    setModals(modals);
  }, [childrenArray, setModals]);

  return (
    <>
      {Children.map(childrenArray, (child, index) =>
        cloneElement(child, {
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
        })
      )}
    </>
  );
};

export default GlobalModals;
