import About from "@/components/About";
import Container from "@/components/Container";
import Delivery from "@/components/Delivery";
import Quest from "@/components/Quest/Quest";
import Trust from "@/components/Trust";
import UpBlock from "@/components/UpBlock";

export default function Home() {
  return (
    <div className="xl:space-y-40 space-y-20 flex-1">
      <UpBlock />
      
      <Container className="xl:space-y-40 space-y-20">
        <About />
        <Trust />
        <Delivery />
        <Quest />
      </Container>

      <iframe
        id="buy"
        className="scroll-mt-20 h-[556px] w-full"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf8f91334d9ca034a8a00a69bee4e82c5cd4f4951ac211cba4afa79c010404df&amp;source=constructor"
        width="500"
        height="400"
      ></iframe>
    </div>
  );
}
