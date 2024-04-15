import Icon from "@/components/atoms/Icon";
import { useModalContext } from "@/hooks/modalHooks";
import { FC } from "@/utilities/types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps
} from "@nextui-org/react";
import React from "react";
import UserModalForm from "./UserModalForm";
import { PopupModes } from "@/utilities/enums";
import { IUser } from "@/app/lib/types";

type Props = Omit<ModalProps, "children"> & {
  mode?: PopupModes;
  data?: IUser;
};

const UserModal: FC<Props> = ({ mode, data }) => {
  const { isOpen, close } = useModalContext();
  const isEdit = mode === PopupModes.EDIT;
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
        base: "text-monochrome-1800 dark:text-monochrome-100",
        closeButton: "rounded-sm top-4 right-4",
        backdrop: "bg-[#00000040]",
        header: "border-b border-divider"
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
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>{isEdit ? "Edit user" : "Add user"}</ModalHeader>
            <ModalBody>
              <UserModalForm close={close} isEdit={isEdit} data={data} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
