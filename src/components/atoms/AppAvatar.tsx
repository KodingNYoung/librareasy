import { FC } from "@/utilities/types";
import { Avatar, AvatarProps, AvatarSlots } from "@nextui-org/react";
import React from "react";
import Icon from "./Icon";

type Props = Omit<AvatarProps, "classNames"> & {
  classNames?: { [slot in AvatarSlots]?: string };
};

const AppAvatar: FC<Props> = ({ src, classNames, ...props }) => {
  return (
    <Avatar
      isBordered
      radius="sm"
      showFallback
      src={src}
      classNames={classNames}
      fallback={<Icon name="icon-user-01" size={20} />}
      {...props}
    />
  );
};

export default AppAvatar;
