import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button
      className="xl:text-xl text-base xl:leading-[25.14px] leading-[20.11px] text-center font-semibold text-white xl:max-w-[280px] xl:h-16 h-14 w-full flex justify-center items-center bg-red xl:rounded-8 rounded-7 hover:bg-red-hover"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
