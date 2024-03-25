import { cls } from "@/utilities/helpers";
import { FC } from "@/utilities/types";
import {
  ListboxProps,
  MenuItemSlots,
  Select,
  SelectItem,
  SelectProps,
  SelectSlots,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = Omit<SelectProps, "children" | "classNames"> & {
  options: { value: string | number; label: ReactNode }[];
  classNames?: { [slot in SelectSlots]?: string };
  listboxProps?: Omit<ListboxProps, "itemClasses">;
  itemClasses?: { [slots in MenuItemSlots]?: string };
};

const AppSelect: FC<Props> = ({
  options,
  name,
  id,
  className,
  classNames: { trigger, mainWrapper, popoverContent, ...classNames } = {},
  itemClasses: { base, selectedIcon, ...itemClasses } = {},
  listboxProps: { variant, ...listboxProps } = { itemClasses: {} },
  disallowEmptySelection = true,
  defaultSelectedKeys,
  label,
  ...rest
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id || name} className="body-sm">
          {label}
        </label>
      )}
      <Select
        name={name}
        id={id}
        defaultSelectedKeys={
          defaultSelectedKeys || [options?.[0]?.value?.toString()]
        }
        className={cls("w-full", className)}
        classNames={{
          mainWrapper: cls("h-full", mainWrapper),
          trigger: cls(
            "p-0 rounded-sm shadow-none min-h-0 h-full p-2",
            trigger
          ),
          popoverContent: cls("p-0 shadow-lg rounded-sm ", popoverContent),
          ...classNames,
        }}
        listboxProps={{
          itemClasses: {
            base: "",
            selectedIcon: cls("!hidden", selectedIcon),
            ...itemClasses,
          },
          variant: variant || "light",
          ...listboxProps,
        }}
        aria-label="Select dropdown component"
        disallowEmptySelection={disallowEmptySelection}
        {...rest}
      >
        {options.map(option => {
          return (
            <SelectItem
              value={option.value}
              key={option.value}
              classNames={{
                base: cls("", base),
              }}
            >
              {option.label}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
};

export default AppSelect;
