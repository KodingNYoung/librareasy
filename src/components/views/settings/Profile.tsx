import { FC } from "@/utilities/types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem
} from "@nextui-org/react";
import React from "react";

const Profile: FC = () => {
  return (
    <Card className="max-w-2xl w-full">
      <CardHeader className="flex-col items-start">
        <h2 className="text-xl font-semibold">User Profile</h2>
        <span className="text-xs font-normal text-monochrome-1300">
          Edit your profile details with convenience
        </span>
      </CardHeader>
      <Divider />
      <CardBody className="px-4 py-6">
        <form className="grid sm:grid-cols-2 gap-6">
          <Input
            name="first_name"
            label="First Name"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="John"
            defaultValue=""
          />
          <Input
            name="last_name"
            label="Last Name"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="Doe"
            defaultValue=""
          />
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="johndoe@example.com"
            defaultValue=""
            classNames={{ base: "col-span-2" }}
            isReadOnly
          />
          <Select
            name="organization"
            label="Organization"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            disallowEmptySelection
            items={[{ value: "kodingnyoung", label: "KodingNYoung" }]}
            classNames={{ base: "col-span-2" }}
            selectionMode="single"
            defaultSelectedKeys={["kodingnyoung"]}
          >
            {item => <SelectItem key={item.value}>{item.label}</SelectItem>}
          </Select>
          <Button size="lg" radius="sm" className="mt-4 w-fit" type="submit">
            Update
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Profile;
