import { upBlockList } from "@/constants/upBlock";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  className?: string;
}

const Edges: FC<IProps> = ({ className }) => {
  return (
    <ul
      className={cn(
        "grid xl:grid-cols-3 grid-cols-1 xl:gap-6 gap-10 xl:items-start items-center",
        className
      )}
    >
      {upBlockList.map(({ desc, id, value }) => (
        <li
          key={id}
          className="flex flex-col xl:gap-2 gap-4 xl:items-start items-center group xl:text-left text-center"
        >
          <span className="xl:text-[40px] text-4xl xl:leading-[56px] leading-[50.4px] font-bold group-hover:text-red transition-all duration-300">
            {value}
          </span>

          <p
            dangerouslySetInnerHTML={{ __html: desc }}
            className="xl:text-base text-lg xl:leading-[22.4px] leading-[25.2px] xl:w-auto w-[220px]"
          />
        </li>
      ))}
    </ul>
  );
};
export default Edges;
