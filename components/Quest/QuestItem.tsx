"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface IProps {
  title: string;
  desc: string;
}

const QuestItem: FC<IProps> = ({ desc, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prv) => !prv);
  };

  return (
    <li
      className={cn(
        "border-b last:border-b-0 xl:pt-5 pt-3.5 flex flex-col gap-4 border-dark/15 last:pb-0 first:pt-0",
        isOpen && "xl:pb-5 pb-3.5"
      )}
    >
      <button
        onClick={handleOpen}
        className="flex justify-between items-center gap-4 xl:text-xl text-base xl:leading-7 leading-[28px] w-full text-left"
      >
        {title}

        <svg
          className={cn("xl:w-8 w-4 xl:h-8 h-4", isOpen && "rotate-45")}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={cn(isOpen && "fill-dark")}
            opacity="0.6"
            d="M32 16C32 16.2709 31.8924 16.5306 31.7009 16.7222C31.5093 16.9137 31.2496 17.0213 30.9787 17.0213H17.0213V30.9787C17.0213 31.2496 16.9137 31.5093 16.7222 31.7009C16.5306 31.8924 16.2709 32 16 32C15.7291 32 15.4694 31.8924 15.2778 31.7009C15.0863 31.5093 14.9787 31.2496 14.9787 30.9787V17.0213H1.02128C0.750417 17.0213 0.490651 16.9137 0.299125 16.7222C0.107598 16.5306 0 16.2709 0 16C0 15.7291 0.107598 15.4694 0.299125 15.2778C0.490651 15.0863 0.750417 14.9787 1.02128 14.9787H14.9787V1.02128C14.9787 0.750417 15.0863 0.490651 15.2778 0.299125C15.4694 0.107598 15.7291 0 16 0C16.2709 0 16.5306 0.107598 16.7222 0.299125C16.9137 0.490651 17.0213 0.750417 17.0213 1.02128V14.9787H30.9787C31.2496 14.9787 31.5093 15.0863 31.7009 15.2778C31.8924 15.4694 32 15.7291 32 16Z"
            fill="#D9251C"
          />
        </svg>
      </button>

      <div
        className={cn(
          "transition-all duration-500 grid overflow-hidden",
          isOpen ? "grid-rows-1" : "grid-rows-0"
        )}
      >
        <div
          className="xl:text-base text-sm xl:leading-6 leading-[19.6px] min-h-0"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </li>
  );
};
export default QuestItem;
