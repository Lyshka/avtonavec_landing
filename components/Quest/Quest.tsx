import Image from "next/image";
import Title from "../Title";
import { questList } from "@/constants/quest";
import QuestItem from "./QuestItem";

const Quest = () => {
  return (
    <section id="quests" className="scroll-mt-20 flex flex-col gap-20">
      <Title>Часто задаваемые вопросы</Title>

      <div className="flex justify-between">
        <div className="max-w-[458px] h-[534px] w-full">
          <Image
            src={"/quest.webp"}
            alt="Мотоцикл"
            width={458}
            height={534}
            className="w-full h-full object-contain"
          />
        </div>

        <ul className="max-w-[590px] w-full">
          {questList.map(({ desc, id, title }) => (
            <QuestItem key={id} title={title} desc={desc} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Quest;
