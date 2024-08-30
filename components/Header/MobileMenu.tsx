import { cn } from "@/lib/utils";
import { FC } from "react";
import Container from "../Container";
import Link from "next/link";
import { menu } from "@/constants/menu";
import { siteInfo } from "@/constants/siteInfo";
import Social from "../Social";

interface IProps {
  isOpen: boolean;
  handle: () => void;
}

const MobileMenu: FC<IProps> = ({ isOpen, handle }) => {
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
            href={`tel:${siteInfo.telInfo.format}`}
          >
            {siteInfo.telInfo.value}
          </Link>

          <Link className="hover:text-red" href={`mailto:${siteInfo.mail}`}>
            {siteInfo.mail}
          </Link>

          <Social />
        </div>
      </Container>
    </section>
  );
};
export default MobileMenu;
