import About from "@/components/About";
import Container from "@/components/Container";
import Delivery from "@/components/Delivery";
import Edges from "@/components/Edges";
import Quest from "@/components/Quest/Quest";
import Trust from "@/components/Trust";
import UpBlock from "@/components/UpBlock";
import { getInfo } from "@/lib/getInfo";

export default async function Home() {
  const { acf: { mainInfo: { code_map } } } = await getInfo();

  return (
    <div className="xl:space-y-40 space-y-20 flex-1">
      <UpBlock />

      <Edges className="xl:hidden grid" />

      <Container className="xl:space-y-40 space-y-20">
        <About />
        <Trust />
        <Delivery />
        <Quest />
      </Container>

      <iframe
        id="buy"
        className="scroll-mt-20 xl:h-[556px] h-[441px] w-full"
        src={code_map}
        width="500"
        height="400"
      ></iframe>
    </div>
  );
}
