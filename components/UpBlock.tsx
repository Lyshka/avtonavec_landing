import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { upBlockList } from "@/constants/upBlock";

const UpBlock = () => {
  return (
    <main className="h-[800px] relative -mt-16 flex items-center">
      <div className="w-full h-full absolute inset-0">
        <Image
          alt="Мотоциклист"
          src={"/upBlock.webp"}
          width={1920}
          height={1920}
          className="w-full h-full object-cover"
        />
      </div>

      <Container className=" text-white relative z-[1]">
        <div className="max-w-[593px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-4xl leading-[50.4px] uppercase">
              Все для вашего передвижения - от классики до инноваций
            </h1>

            <p>
              Широкий выбор велосипедов, мотоциклов, скутеров
              <br /> и электрической техники в Брестской области
            </p>
          </div>

          <Button>Заказать сейчас</Button>

          <ul className="grid grid-cols-3 gap-6">
            {upBlockList.map(({ desc, id, value }) => (
              <li key={id} className="flex flex-col gap-2 group">
                <span className="text-[40px] leading-[56px] font-bold group-hover:text-red transition-all duration-300">
                  {value}
                </span>

                <p
                  dangerouslySetInnerHTML={{ __html: desc }}
                  className="text-base leading-[22.4px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};
export default UpBlock;
