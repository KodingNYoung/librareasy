"use client";
import Folder from "@/components/atoms/Folder";
import Icon from "@/components/atoms/Icon";
import { FC } from "@/utilities/types";
import { Button, Tab, Tabs } from "@nextui-org/react";
import React from "react";

const Library: FC = () => {
  return (
    <div className="p-5 py-4">
      <header className="flex justify-between items-center pb-2 border-b border-divider h-12 gap-5">
        <div className="flex-1 relative h-full">
          <div className="absolute left-0 w-full h-full">
            <Tabs
              variant="light"
              aria-label="File type tabs"
              radius="sm"
              classNames={{ base: "w-full overflow-auto" }}
            >
              <Tab key="all" title="All" />
              <Tab key="pqs" title="Past Questions" />
              <Tab key="text-books" title="Text books" />
              <Tab key="class-notes" title="Class notes" />
              <Tab key="handout" title="Handouts" />
            </Tabs>
          </div>
        </div>
        <Button isIconOnly>
          <Icon name="icon-plus" size={20} />
        </Button>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,_100px)] gap-3 py-4">
        <Folder name="100L" id="100l" />
        <Folder name="200L" id="200l" />
        <Folder name="300L" id="300l" />
        <Folder name="400L" id="400l" />
        <Folder name="500L" id="500l" />
        <Folder name="100L" id="100l" />
        <Folder name="200L" id="200l" />
        <Folder name="300L" id="300l" />
        <Folder name="400L" id="400l" />
        <Folder name="500L" id="500l" />
        <Folder name="100L" id="100l" />
        <Folder name="200L" id="200l" />
        <Folder name="300L" id="300l" />
        <Folder name="400L" id="400l" />
        <Folder name="500L" id="500l" />
      </div>
    </div>
  );
};

export default Library;
