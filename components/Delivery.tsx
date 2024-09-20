import { deliveryList } from "@/constants/delivery";
import Title from "./Title";
import { getInfo } from "@/lib/getInfo";

const Delivery = async () => {
  const { acf: { delivery: { info, title } } } = await getInfo();

  return (
    <section
      id="delivery"
      className="scroll-mt-20 flex flex-col gap-20 xl:items-start items-center"
    >
      <Title className="xl:text-left text-center">{title}</Title>

      <ul className="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-14">
        {info.map(({ desc, title }, idx) => (
          <li
            key={idx}
            className="xl:h-[228px] h-[218px] xl:px-10 px-12 pt-20 bg-white shadow-deliveryCard rounded-4 group relative"
          >
            <span className="absolute top-0 xl:left-0 left-1/2 xl:-translate-x-0 -translate-x-1/2 -translate-y-1/2 xl:w-[88px] w-20 xl:h-[88px] h-20 flex justify-center items-center bg-dark/10 text-red group-hover:bg-dark/40 transition-all duration-300 rounded-full xl:text-5xl text-[40px] xl:leading-[67.2px] leading-[56px]">
              0{idx + 1}
            </span>

            <div className="flex flex-col xl:gap-6 gap-4 xl:items-start items-center text-base leading-[22.4px] xl:text-left text-center">
              <span className="uppercase group-hover:text-red transition-all duration-300">
                {title}
              </span>

              <p className="xl:text-base text-sm xl:leading-[22.4px] leading-[19.6px]">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Delivery;
