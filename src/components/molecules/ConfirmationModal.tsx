import { FC } from "@/utilities/types";
import React, { ReactNode, useState } from "react";
import AppModal, { AppModalProps } from "./AppModal";
import {
  Button,
  ButtonProps,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { useModalContext } from "@/hooks/modalHooks";

type Props = Omit<AppModalProps, "children"> & {
  content: ReactNode;
  okBtnContent: ReactNode;
  okBtnColor?: Exclude<ButtonProps["color"], "default">;
  onOkClick: () => Promise<any> | void;
};

const ConfirmationModal: FC<Props> = ({
  title,
  content,
  okBtnColor = "danger",
  okBtnContent,
  onOkClick,
  ...rest
}) => {
  const { close } = useModalContext();
  const [loading, setLoading] = useState(false);

  return (
    <AppModal hideCloseButton classNames={{ body: "p-0" }} {...rest}>
      <main className="flex flex-col items-center text-center gap-1 p-4 pb-2">
        <ModalHeader className="border-0 font-semibold">{title}</ModalHeader>
        <span className="text-foreground-400 text-small">{content}</span>
      </main>
      <ModalFooter className="pt-1 pb-8">
        <Button
          type="button"
          color="default"
          size="sm"
          onPress={close}
          isDisabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="button"
          size="sm"
          isLoading={loading}
          color={okBtnColor}
          onPress={async () => {
            setLoading(true);
            await onOkClick();
            setLoading(false);
            close();
          }}
        >
          {okBtnContent}
        </Button>
      </ModalFooter>
    </AppModal>
  );
};

export default ConfirmationModal;
