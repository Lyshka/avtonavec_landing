import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Title: FC<IProps> = ({ children, className }) => {
  return (
    <h2 className={cn("font-semibold text-4xl leading-[50.4px]", className)}>
      {children}
    </h2>
  );
};
export default Title;
