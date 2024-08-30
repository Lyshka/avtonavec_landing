import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button
      className="text-xl leading-[25.14px] font-semibold text-white max-w-[280px] h-16 w-full flex justify-center items-center bg-red rounded-8 hover:bg-red-hover"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
