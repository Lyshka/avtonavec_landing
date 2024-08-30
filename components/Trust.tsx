import Image from "next/image";
import Title from "./Title";
import { trustList } from "@/constants/trsut";

const Trust = () => {
  return (
    <section className="flex flex-col xl:gap-20 gap-[60px] xl:items-start items-center w-full">
      <Title className="text-center">Почему нам доверяют?</Title>

      <div className="flex xl:justify-between xl:gap-0 gap-20 xl:flex-row flex-col-reverse w-full">
        <ul className="xl:max-w-96 w-full flex flex-col xl:items-start items-center xl:gap-16 gap-10">
          {trustList.map(({ desc, icon, id, title }) => (
            <li
              key={id}
              className="flex xl:flex-row flex-col items-center xl:gap-10 gap-6 group"
            >
              <Image
                src={icon}
                alt="Иконка"
                width={48}
                height={48}
                className="w-12 h-12 group-hover:scale-105 flex-shrink-0"
              />

              <div className="flex flex-col xl:gap-2 gap-4 xl:items-start items-center xl:w-auto w-[250px] xl:text-left text-center">
                <span className="xl:text-lg text-base xl:leading-[25.2px] leading-[22.4px] uppercase transition-all duration-300 group-hover:text-red xl:font-normal font-semibold">
                  {title}
                </span>

                <p className="text-base leading-[22.4px]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="xl:max-w-[659px] w-full xl:h-[500px] overflow-hidden">
          <Image
            src={"/trust.webp"}
            alt="Мотоцикл"
            width={659}
            height={500}
            className="w-full h-full object-contain hover:scale-90"
          />
        </div>
      </div>
    </section>
  );
};
export default Trust;
