import PasswordInput from "@/components/molecules/PasswordInput";
import { FC } from "@/utilities/types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Roles } from "@/utilities/enums";
import { addUser, editUser } from "@/app/lib/actions/forms";
import { TUser } from ".";

type Props = {
  close: () => void;
  isEdit: boolean;
  data?: TUser;
};

const UserModalForm: FC<Props> = ({ close, isEdit, data }) => {
  const action = async (formData: FormData) => {
    isEdit
      ? await editUser(data?._id as string, formData)
      : await addUser(formData);
    close();
  };
  return (
    <form className="grid sm:grid-cols-2 gap-4 my-6" action={action}>
      <Input
        name="first_name"
        label="First Name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        placeholder="John"
        defaultValue={data?.first_name || ""}
      />
      <Input
        name="last_name"
        label="Last Name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        placeholder="Doe"
        defaultValue={data?.last_name}
      />
      <Input
        name="email"
        type="email"
        label="Email"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        placeholder="johndoe@example.com"
        defaultValue={data?.email}
        classNames={{ base: "col-span-2" }}
        readOnly={isEdit}
        description={isEdit && "This is a read only field"}
      />
      {!isEdit && (
        <PasswordInput
          name="password"
          label="Password"
          labelPlacement="outside"
          variant="bordered"
          size="lg"
          isRequired
          radius="sm"
          placeholder="********"
          defaultValue=""
          classNames={{ base: "col-span-2" }}
        />
      )}
      <Select
        name="role"
        label="Role"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        disallowEmptySelection
        items={[
          { value: "admin", label: "Admin" },
          { value: "member", label: "Member" }
        ]}
        classNames={{
          base: "col-span-2",
          listbox: "text-monochrome-1800 dark:text-monochrome-100"
        }}
        selectionMode="single"
        defaultSelectedKeys={[data?.role || Roles.MEMBER]}
      >
        {item => <SelectItem key={item.value}>{item.label}</SelectItem>}
      </Select>
      <div className="col-span-2 flex justify-end items-center gap-2">
        <Button radius="sm" className="mt-2 w-fit" onPress={close}>
          Close
        </Button>
        <Button
          color="primary"
          radius="sm"
          className="mt-2 w-fit"
          type="submit"
        >
          {isEdit ? "Edit user" : "Add user"}
        </Button>
      </div>
    </form>
  );
};

export default UserModalForm;
