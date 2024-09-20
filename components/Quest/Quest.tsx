import Image from "next/image";
import Title from "../Title";
import QuestItem from "./QuestItem";
import { getInfo } from "@/lib/getInfo";

const Quest = async () => {
  const { acf: { questList } } = await getInfo();

  return (
    <section
      id="quests"
      className="scroll-mt-20 flex flex-col xl:gap-20 gap-12 xl:items-start items-center w-full"
    >
      <Title className="xl:text-left text-center">
        Часто задаваемые вопросы
      </Title>

      <div className="flex xl:justify-between xl:flex-row flex-col xl:gap-0 gap-10 xl:items-start items-center w-full">
        <div className="xl:max-w-[458px] xl:h-[534px] w-full">
          <Image
            src={"/quest.webp"}
            alt="Мотоцикл"
            width={458}
            height={534}
            className="w-full h-full object-contain"
          />
        </div>

        <ul className="xl:max-w-[590px] w-full">
          {questList.map(({ desc, title }, idx) => (
            <QuestItem key={idx} title={title} desc={desc} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Quest;
