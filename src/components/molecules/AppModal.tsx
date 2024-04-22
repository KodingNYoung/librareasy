import { useModalContext } from "@/hooks/modalHooks";
import { FC } from "@/utilities/types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
  ModalSlots
} from "@nextui-org/react";
import { HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";
import Icon from "../atoms/Icon";
import { cls } from "@/utilities/helpers";

export type AppModalProps = Omit<ModalProps, "isOpen" | "onClose"> & {
  showHeader?: boolean;
  title?: ReactNode;
  classNames?: { [slots in ModalSlots]?: string };
  motionProps?: HTMLMotionProps<"div">;
};

const AppModal: FC<AppModalProps> = ({
  children,
  title,
  showHeader,
  classNames: { base, closeButton, header, backdrop, ...classNames } = {},
  ...rest
}) => {
  const { isOpen, close } = useModalContext();
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      closeButton={
        <Button isIconOnly variant="light" radius="sm" size="sm">
          <Icon name="icon-x-close" size={18} />
        </Button>
      }
      radius="sm"
      shadow="sm"
      classNames={{
        base: cls("text-monochrome-1800 dark:text-monochrome-100", base),
        closeButton: cls("rounded-sm top-4 right-4", closeButton),
        backdrop: cls("bg-[#00000040]", backdrop),
        header: cls("border-b border-divider", header),
        ...classNames
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }
        }
      }}
      {...rest}
    >
      <ModalContent>
        {() => (
          <>
            {showHeader && <ModalHeader>{title}</ModalHeader>}
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
