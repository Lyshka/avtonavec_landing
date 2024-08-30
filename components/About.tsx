"use client";

import Image from "next/image";
import Title from "./Title";
import { aboutList } from "@/constants/about";
import { useMobileMenu } from "@/store/mobileMenu";

const About = () => {
  const { setIsOpen } = useMobileMenu();

  return (
    <section id="about" className="scroll-mt-20 xl:space-y-20 space-y-8">
      <Title className="xl:max-w-[590px] w-full xl:text-left text-center">
        О компании и наших успехах в сфере “зеленой” экономики
      </Title>

      <div className="flex xl:justify-between xl:gap-0 gap-8 xl:flex-row flex-col">
        <div className="xl:max-w-[537px] w-full xl:h-[495px] overflow-hidden">
          <Image
            src={"/about.webp"}
            alt="Мотоцикл"
            width={537}
            height={495}
            className="w-full h-full object-contain hover:scale-90"
          />
        </div>

        <div className="xl:max-w-[488px] w-full flex flex-col xl:gap-11 gap-8">
          <div className="flex flex-col xl:gap-6 gap-4 xl:text-base text-sm xl:leading-[22.4px] leading-[19.6px]">
            <p>
              Компания предлагает широкий ассортимент мототехники и велоси-педов
              - мотоциклы, велосипеды, электротранспорт, мопеды, а и зап-части к
              ним. В наличии более 200 моделей с возможностью выбора
              комплектации и цвета.
            </p>

            <p>
              Наш магазин является официальным дистри-бьютором популярных
              брендов Hors, Moto, Steels, Аист и других. Компания также активно
              развивает направление экологичного электротранспорта, постоянно
              увеличивая его долю в ассортименте.
            </p>
          </div>

          <ul className="grid grid-cols-2 xl:gap-16 gap-5 xl:text-left text-center">
            {aboutList.map(({ desc, id, value }) => (
              <li
                key={id}
                className="flex flex-col xl:gap-4 xl:items-start items-center group"
              >
                <span className="xl:text-[42px] text-[28px] xl:leading-[58.8px] leading-[39.2px] font-semibold transition-all duration-300 group-hover:text-red">
                  {value}
                </span>

                <p
                  className="text-sm leading-[19.6px]"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </li>
            ))}
          </ul>

          <button onClick={setIsOpen} className="xl:max-w-[279px] w-full xl:h-[59px] h-14 flex justify-center items-center border border-red xl:rounded-8 rounded-7 hover:bg-red-hover hover:border-red-hover hover:text-white xl:text-lg text-base xl:leading-[22.63px] leading-[20.11px]">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
