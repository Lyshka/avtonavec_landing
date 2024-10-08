import { cn } from "@/lib/utils";
import { FC } from "react";
import Container from "../Container";
import Link from "next/link";
import { menu } from "@/constants/menu";
import Social from "../Social";

import { useEffect, useState } from "react";
import { ACF } from "@/types/acf";
import { getInfo } from "@/lib/getInfo";

interface IProps {
  isOpen: boolean;
  handle: () => void;
}

const MobileMenu: FC<IProps> = ({ isOpen, handle }) => {
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
    <section className={cn("mobileMenu", isOpen && "open")}>
      <Container className="space-y-[60px] pt-24">
        <nav>
          <ul className="space-y-6">
            {menu.map(({ id, link, name }) => (
              <li key={id}>
                <Link
                  onClick={handle}
                  className="text-base leading-[20.11px] hover:text-red"
                  href={link}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3.5 text-base leading-[20.11px]">
          <Link
            className="font-bold hover:text-red"
            href={`tel:${siteInfo.mainInfo.telInfo.format}`}
          >
            {siteInfo.mainInfo.telInfo.value}
          </Link>

          <Link className="hover:text-red" href={`mailto:${siteInfo.mainInfo.mail}`}>
            {siteInfo.mainInfo.mail}
          </Link>

          <Social />
        </div>
      </Container>
    </section>
  );
};
export default MobileMenu;
