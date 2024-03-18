import { ColorVariants, FC } from "@/utilities/types";
import { cls } from "@/utilities/helpers";
import { IconNames } from "@/utilities/iconNames";

type Props = {
  name: IconNames;
  size?: number | string;
  color?: ColorVariants;
};

const textColorsProps = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
  transparent: "text-transparent",
  current: "text-current",
  warning: "text-warning",
  success: "text-success",
  error: "text-error",
  neutral: "text-neutral",
  gray: "text-gray",
};

const Icon: FC<Props> = ({ className, name, size, color }) => {
  return (
    <i
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
      }}
      className={cls(
        "text-2xl",
        name,
        color ? textColorsProps[color] : "",
        className
      )}
    />
  );
};

export default Icon;
