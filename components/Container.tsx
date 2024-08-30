import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={cn("max-w-[1200px] w-full xl:px-0 px-2.5 mx-auto", className)}
    >
      {children}
    </div>
  );
};
export default Container;
