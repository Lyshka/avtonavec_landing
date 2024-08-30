import { deliveryList } from "@/constants/delivery";
import Title from "./Title";

const Delivery = () => {
  return (
    <section id="delivery" className="scroll-mt-20 space-y-20">
      <Title>Доставка и оплата</Title>

      <ul className="grid grid-cols-3 gap-5">
        {deliveryList.map(({ desc, id, title }, idx) => (
          <li
            key={id}
            className="h-[228px] px-10 pt-20 bg-white shadow-deliveryCard rounded-4 group relative"
          >
            <span className="absolute top-0 left-0 -translate-y-1/2 w-[88px] h-[88px] flex justify-center items-center bg-dark/10 text-red group-hover:bg-dark/40 transition-all duration-300 rounded-full text-5xl leading-[67.2px]">
              0{idx + 1}
            </span>

            <div className="flex flex-col gap-6 text-base leading-[22.4px]">
              <span className="uppercase group-hover:text-red transition-all duration-300">{title}</span>

              <p>{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Delivery;
