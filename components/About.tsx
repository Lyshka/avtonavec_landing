import Image from "next/image";
import Title from "./Title";
import { aboutList } from "@/constants/about";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 space-y-20">
      <Title className="max-w-[590px] w-full">
        О компании и наших успехах в сфере “зеленой” экономики
      </Title>

      <div className="flex justify-between">
        <div className="max-w-[537px] w-full h-[495px] overflow-hidden">
          <Image
            src={"/about.webp"}
            alt="Мотоцикл"
            width={537}
            height={495}
            className="w-full h-full object-contain hover:scale-90"
          />
        </div>

        <div className="max-w-[488px] w-full flex flex-col gap-11">
          <div className="space-y-6 text-base leading-[22.4px]">
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

          <ul className="grid grid-cols-2 gap-16">
            {aboutList.map(({ desc, id, value }) => (
              <li key={id} className="flex flex-col gap-4 group">
                <span className="text-[42px] leading-[58.8px] font-semibold transition-all duration-300 group-hover:text-red">
                  {value}
                </span>

                <p
                  className="text-sm leading-[19.6px]"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </li>
            ))}
          </ul>

          <button className="max-w-[279px] w-full h-[59px] flex justify-center items-center border border-red rounded-8 hover:bg-red-hover hover:border-red-hover hover:text-white text-lg leading-[22.63px]">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
