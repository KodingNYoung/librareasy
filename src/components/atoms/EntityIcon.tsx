import { FC } from "@/utilities/types";
import React from "react";
import doc from "../../assets/images/file-icons/doc.png";
import folder from "../../assets/images/file-icons/folder.png";
import image from "../../assets/images/file-icons/image.png";
import js from "../../assets/images/file-icons/js.png";
import pdf from "../../assets/images/file-icons/pdf.png";
import ppt from "../../assets/images/file-icons/ppt.png";
import record from "../../assets/images/file-icons/record.png";
import svg from "../../assets/images/file-icons/svg.png";
import txt from "../../assets/images/file-icons/txt.png";
import xls from "../../assets/images/file-icons/xls.png";
import zip from "../../assets/images/file-icons/zip.png";
import Image from "next/image";

type FileType =
  | "image"
  | "doc"
  | "js"
  | "pdf"
  | "ppt"
  | "sound"
  | "svg"
  | "txt"
  | "xls"
  | "zip"
  | "folder";

type Props = {
  fileType: FileType;
};

const getEntityIcon = (fileType: FileType) => {
  switch (fileType) {
    case "image":
      return image;
    case "doc":
      return doc;
    case "js":
      return js;
    case "pdf":
      return pdf;
    case "ppt":
      return ppt;
    case "sound":
      return record;
    case "svg":
      return svg;
    case "txt":
      return txt;
    case "xls":
      return xls;
    case "zip":
      return zip;
    case "folder":
      return folder;
  }
};

const EntityIcon: FC<Props> = ({ fileType }) => {
  return (
    <div className="w-6 h-6">
      <Image
        src={getEntityIcon(fileType)}
        alt="file-icon"
        height={24}
        width={24}
        className="w-full h-full"
      />
    </div>
  );
};

export default EntityIcon;
