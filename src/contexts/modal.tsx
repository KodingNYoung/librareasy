import { FC } from "@/utilities/types";
import { createContext } from "react";

type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {}
});

export const ModalContextProvider: FC<ModalContextType> = ({
  children,
  open,
  close,
  isOpen
}) => {
  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
