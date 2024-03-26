import { FC } from "@/utilities/types";
import React from "react";
import Icon from "./Icon";
import Image from "next/image";
import icon from "../../assets/images/folder.png";

type Props = {
  name: string;
  id: string | number;
};

const Folder: FC<Props> = ({ name, id }) => {
  return (
    <div className="flex flex-col">
      <button className="w-full">
        <Image height={100} width={100} src={icon} className="w-full" alt={`folder for ${name}`} />
      </button>
      <footer className="flex justify-between items-center p-2">
        <button>{name}</button>
        <button>
          <Icon name="icon-trash-01" size={16} />
        </button>
      </footer>
    </div>
  );
};

export default Folder;
