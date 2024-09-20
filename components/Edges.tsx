"use client";

import { getInfo } from "@/lib/getInfo";
import { cn } from "@/lib/utils";
import { ACF } from "@/types/acf";
import { FC, useEffect, useState } from "react";

interface IProps {
  className?: string;
}

const Edges: FC<IProps> = ({ className }) => {
  const [siteInfo, setSiteInfo] = useState<ACF | null>(null);

  useEffect(() => {
    const fetchSiteInfo = async () => {
      const { acf } = await getInfo();
      setSiteInfo(acf);
    };

    fetchSiteInfo();
  }, []);

  if (!siteInfo) return

  return (
    <ul
      className={cn(
        "grid xl:grid-cols-3 grid-cols-1 xl:gap-6 gap-10 xl:items-start items-center",
        className
      )}
    >
      {siteInfo.upBlock.edges.map(({ desc, value }, idx) => (
        <li
          key={idx}
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
