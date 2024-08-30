"use client";

import { sendTelegram } from "@/hooks/sendTelegam";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/store/mobileMenu";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IForm {
  tel: string;
  name: string;
}

const Modal = () => {
  const { isOpen, setIsOpen } = useMobileMenu();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const handleSubmitForm = handleSubmit(
    async (data) => {
      const message = `
<b>Имя: </b>${data.name}
<b>Телефон: </b>${data.tel}
      `;

      const ok = await sendTelegram(message);

      if (ok) {
        toast.success("Мы скоро с вами свяжемся!");
        setIsOpen();
        reset();
      }
    },
    () => {
      if (errors.tel) {
        console.log(1);
        toast.error(errors.tel.message);
      }

      if (errors.name) {
        toast.error(errors.name.message);
      }
    }
  );

  return (
    <section className={cn("modal", isOpen && "open")}>
      <div className="max-w-[390px] w-full pb-10 pt-16 flex flex-col gap-10 bg-white px-4 shadow-deliveryCard relative">
        <button
          onClick={setIsOpen}
          className="hover-opacity absolute top-3.5 right-3.5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8801 22.8805C22.6945 23.066 22.4429 23.1702 22.1805 23.1702C21.9181 23.1702 21.6664 23.066 21.4809 22.8805L11.9199 13.3195L2.35894 22.8805C2.17339 23.066 1.92175 23.1702 1.65935 23.1702C1.39696 23.1702 1.14531 23.066 0.959767 22.8805C0.774225 22.6949 0.669988 22.4433 0.669988 22.1809C0.669988 21.9185 0.774225 21.6668 0.959767 21.4813L10.5208 11.9203L0.959768 2.35932C0.774226 2.17378 0.669989 1.92213 0.669989 1.65974C0.669989 1.39734 0.774226 1.1457 0.959767 0.960155C1.14531 0.774613 1.39696 0.670377 1.65935 0.670377C1.92175 0.670377 2.1734 0.774613 2.35894 0.960154L11.9199 10.5211L21.4809 0.960154C21.6664 0.774613 21.9181 0.670377 22.1805 0.670377C22.4429 0.670377 22.6945 0.774613 22.8801 0.960155C23.0656 1.1457 23.1699 1.39734 23.1699 1.65974C23.1699 1.92213 23.0656 2.17378 22.8801 2.35932L13.3191 11.9203L22.8801 21.4813C23.0656 21.6668 23.1699 21.9185 23.1699 22.1809C23.1699 22.4433 23.0656 22.6949 22.8801 22.8805Z"
              fill="#D9251C"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-6">
          <h6 className="text-2xl leading-[31.2px]">Форма обратной связи</h6>

          <p className="text-base leading-[22.4px]">
            Укажите ваши контакты, и мы с радостью предоставим подробную
            консультацию по всем интересующим вас темам.
          </p>
        </div>

        <form onSubmit={handleSubmitForm} className="flex flex-col gap-6">
          <input
            {...register("tel", {
              required: "Номер не был заполнен",
            })}
            placeholder="Ваш номер"
            type="tel"
          />
          <input
            {...register("name", {
              required: "Укажите ваше имя",
            })}
            type="text"
            placeholder="Ваше имя*"
          />

          <button className="h-14 text-white w-full flex justify-center items-center bg-red hover:bg-red-hover rounded-7 text-base leading-[20.11px]">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};
export default Modal;
