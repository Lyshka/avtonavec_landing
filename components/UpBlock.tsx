"use client";

import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import Edges from "./Edges";
import { useMobileMenu } from "@/store/mobileMenu";
import { ACF } from "@/types/acf";
import { useEffect, useState } from "react";
import { getInfo } from "@/lib/getInfo";

const UpBlock = () => {
  const { setIsOpen } = useMobileMenu();

  const [siteInfo, setSiteInfo] = useState<ACF | null>(null);

  useEffect(() => {
    const fetchSiteInfo = async () => {
      const { acf } = await getInfo();
      setSiteInfo(acf);
    };

    fetchSiteInfo();
  }, []);

  if (!siteInfo) return

  return (
    <main className="xl:h-[800px] relative xl:-mt-16 -mt-[50px] flex items-center">
      <div className="w-full h-full absolute inset-0">
        <Image
          alt="Мотоциклист"
          src={"/upBlock.webp"}
          width={1920}
          height={800}
          className="w-full h-full object-cover xl:block hidden"
        />

        <Image
          alt="Мотоциклист"
          src={"/upBlockMobile.webp"}
          width={390}
          height={640}
          className="w-full h-full object-cover xl:hidden block"
        />
      </div>

      <Container className="text-white relative z-[1] xl:pt-0 pt-[185px] xl:pb-0 pb-20">
        <div className="xl:max-w-[593px] w-full flex flex-col xl:gap-10 gap-24">
          <div className="flex flex-col xl:gap-6 gap-8 xl:items-start items-center xl:text-left text-center">
            <h1 className="font-semibold xl:text-4xl text-2xl xl:leading-[50.4px] leading-[33.6px] uppercase">
              {siteInfo.upBlock.title}
            </h1>

            <p dangerouslySetInnerHTML={{ __html: siteInfo.upBlock.desc }} className="xl:text-lg text-xl xl:leading-[25.2px] leading-7" />
          </div>

          <Button onClick={setIsOpen}>Заказать сейчас</Button>

          <Edges className="xl:grid hidden" />
        </div>
      </Container>
    </main>
  );
};
export default UpBlock;
