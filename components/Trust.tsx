import Image from "next/image";
import Title from "./Title";
import { trustList } from "@/constants/trsut";

const Trust = () => {
  return (
    <section className="flex flex-col gap-20">
      <Title className="text-center">Почему нам доверяют?</Title>

      <div className="flex justify-between">
        <ul className="max-w-96 w-full flex flex-col gap-16">
          {trustList.map(({ desc, icon, id, title }) => (
            <li key={id} className="flex items-center gap-10 group">
              <Image
                src={icon}
                alt="Иконка"
                width={48}
                height={48}
                className="w-auto h-auto group-hover:scale-105 flex-shrink-0"
              />

              <div className="flex flex-col gap-2">
                <span className="text-lg leading-[25.2px] uppercase transition-all duration-300 group-hover:text-red">
                  {title}
                </span>

                <p className="text-base leading-[22.4px]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="max-w-[659px] w-full h-[500px] overflow-hidden">
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
