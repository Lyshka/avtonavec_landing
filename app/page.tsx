import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Quest from "@/components/Quest";
import Trust from "@/components/Trust";
import UpBlock from "@/components/UpBlock";

export default function Home() {
  return (
    <div className="xl:space-y-40 space-y-20 flex-1">
      <UpBlock />
      <About />
      <Trust />
      <Delivery />
      <Quest />
    </div>
  );
}
