import { ModalContext, ModalContextProvider } from "@/contexts/modal";
import { ReactNode, useContext, useState } from "react";

export const useModalContext = () => {
  const { open, isOpen, close } = useContext(ModalContext);
  return {
    isOpen,
    open,
    close
  };
};

export const useModal = (children: ReactNode) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    content: (
      <ModalContextProvider open={open} close={close} isOpen={isOpen}>
        {children}
      </ModalContextProvider>
    ),
    open,
    close,
    isOpen
  };
};
