import { createFolder } from "@/app/(organization)/library/actions";
import SubmitBtn from "@/components/molecules/SubmitBtn";
import { useModalContext } from "@/hooks/modalHooks";
import { useFormToast } from "@/hooks/toastHooks";
import { TEntity } from "@/utilities/objectTypes";
import { FC, FormState } from "@/utilities/types";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

type Props = {
  isEdit: boolean;
  data?: TEntity;
  parent?: string;
};
type ModalFormStateType = { name: string } & FormState;

const initialValues: ModalFormStateType = {
  name: ""
};

const FolderModalForm: FC<Props> = ({ isEdit, data, parent }) => {
  const { close } = useModalContext();

  const [response, action] = useFormState<ModalFormStateType>(
    isEdit ? console.log : (createFolder as any),
    initialValues
  );

  const formRef = useFormToast(response);

  useEffect(() => {
    if ("success" in response && response.success) {
      close();
    }
  }, [response]);

  return (
    <form className="grid gap-4 my-4" action={action} ref={formRef}>
      <input hidden value={parent} name="parent" readOnly />
      <Input
        name="name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        defaultValue={data?.name || "New folder"}
        onFocus={e => (e.currentTarget as HTMLInputElement).select()}
      />
      <div className="flex justify-end items-center gap-2">
        <Button
          radius="sm"
          size="md"
          className="w-fit"
          onPress={close}
          variant="light"
        >
          Close
        </Button>
        <SubmitBtn className="mt-0" size="md">
          {isEdit ? "OK" : "Create"}
        </SubmitBtn>
      </div>
    </form>
  );
};

export default FolderModalForm;
