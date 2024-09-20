import Container from "./Container";
import Link from "next/link";
import { menu } from "@/constants/menu";
import Image from "next/image";
import { getInfo } from "@/lib/getInfo";

const Footer = async () => {
  const { acf: { mainInfo } } = await getInfo();

  return (
    <footer className="bg-dark/5 xl:py-[50px] py-10">
      <Container className="flex xl:justify-between xl:gap-0 gap-16 xl:flex-row flex-col">
        <div className="flex flex-col xl:gap-8 gap-6 xl:order-first order-last">
          <Link href={"/"} className="xl:w-[130px] w-20 xl:h-[70px] h-10">
            <Image
              alt="Логотип"
              src={mainInfo.logos.footer}
              width={130}
              height={70}
              className="w-full h-full object-contain"
            />
          </Link>

          <ul className="flex flex-col xl:gap-3 gap-4 text-xs leading-[15.08px]">
            <li>
              <Link className="hover:text-red underline" href={mainInfo.conf} target="_blank">
                Политика конфиденциальности
              </Link>
            </li>

            <li>
              <span>Торговое унитарное предприятие “АВТОнаВЕК”</span>
            </li>

            <li>
              <Link target="_blank" href={"https://artcly.by/"}>
                Создание сайта:{" "}
                <span className="hover:text-red">ArtCly.by</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="xl:contents grid grid-cols-2 gap-20">
          <div className="flex flex-col xl:gap-8 gap-6">
            <span className="xl:text-xl text-lg xl:leading-[25.14px] leading-[22.63px] font-semibold">
              Покупателям
            </span>

            <nav>
              <ul className="flex flex-col gap-4">
                {menu.slice(0, -1).map(({ id, link, name }) => (
                  <li key={id}>
                    <Link
                      className="xl:text-base text-sm xl:leading-[19.36px] leading-[17.6px] hover:text-red"
                      href={link}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col xl:gap-8 gap-6">
            <span className="font-semibold xl:text-xl text-lg xl:leading-[25.14px] leading-[22.63px]">
              Контакты
            </span>

            <div className="flex flex-col gap-2.5">
              <Link
                className="xl:text-base text-sm xl:leading-[20.11px] leading-[17.6px] font-bold hover:text-red"
                href={`tel:${mainInfo.telInfo.format}`}
              >
                {mainInfo.telInfo.value}
              </Link>

              <Link
                className="xl:text-lg text-sm xl:leading-[22.63px] leading-[17.6px] font-semibold text-dark/70 hover:text-red"
                href={`mailto:${mainInfo.mail}`}
              >
                {mainInfo.mail}
              </Link>
            </div>

            <address className="xl:text-sm text-xs xl:leading-[19.6px] leading-[16.8px] text-dark/70 xl:max-w-[195px] max-w-[146px] w-full">
              {mainInfo.address}
            </address>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
