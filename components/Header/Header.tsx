"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "../Container";

import { siteInfo } from "@/constants/siteInfo";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { menu } from "@/constants/menu";
import MobileMenu from "./MobileMenu";
import Social from "../Social";

const Header = () => {
  const headerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isOpenMobileMenu, setIsMobileMenu] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleMobileMenu = () => {
    setIsMobileMenu((prv) => !prv);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "xl:h-16 h-[50px] sticky top-0 z-[3] flex justify-center items-center transition-all duration-300 xl:bg-transparent bg-dark/80",
          scrollY > 0 && "xl:bg-dark/80 backdrop-blur-lg"
        )}
      >
        <Container className="flex justify-between items-center">
          <Link
            href={"/"}
            className="xl:w-[78px] w-[62px] xl:h-[41px] h-8 hover-opacity"
          >
            <Image
              alt="Логотип"
              src={siteInfo.logos.header}
              width={78}
              height={41}
              className="w-full h-full object-contain"
            />
          </Link>

          <nav className="xl:block hidden">
            <ul className="flex items-center gap-12">
              {menu.map(({ id, link, name }) => (
                <li key={id}>
                  <Link
                    className="font-semibold text-base leading-[20.11px] hover:text-red text-white"
                    href={link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="xl:flex hidden items-center gap-7">
            <Link
              className="text-base leading-[20.11px] text-white hover:text-red font-bold"
              href={`tel:${siteInfo.telInfo.format}`}
            >
              {siteInfo.telInfo.value}
            </Link>

            <Social />
          </div>

          <button
            onClick={handleMobileMenu}
            id="handleMobileMenu"
            className={cn(
              "h-[30px] relative w-[30px] xl:hidden flex justify-center items-center handleMobileTelMenu",
              isOpenMobileMenu && "active"
            )}
          >
            <svg
              className="burgerIcon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H29M1 15.5H29M1 25H29"
                stroke="#D9251C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="closeIcon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1302_371)">
                <path
                  d="M25.9602 25.8805C25.7746 26.066 25.523 26.1702 25.2606 26.1702C24.9982 26.1702 24.7465 26.066 24.561 25.8805L15 16.3195L5.43901 25.8805C5.25347 26.066 5.00182 26.1702 4.73943 26.1702C4.47703 26.1702 4.22539 26.066 4.03985 25.8805C3.8543 25.6949 3.75007 25.4433 3.75007 25.1809C3.75007 24.9185 3.8543 24.6668 4.03985 24.4813L13.6008 14.9203L4.03985 5.35932C3.8543 5.17378 3.75007 4.92213 3.75007 4.65974C3.75007 4.39734 3.8543 4.1457 4.03985 3.96015C4.22539 3.77461 4.47703 3.67038 4.73943 3.67038C5.00182 3.67038 5.25347 3.77461 5.43901 3.96015L15 13.5211L24.561 3.96015C24.7465 3.77461 24.9982 3.67038 25.2606 3.67038C25.523 3.67038 25.7746 3.77461 25.9602 3.96015C26.1457 4.1457 26.2499 4.39734 26.2499 4.65974C26.2499 4.92213 26.1457 5.17378 25.9602 5.35932L16.3992 14.9203L25.9602 24.4813C26.1457 24.6668 26.2499 24.9185 26.2499 25.1809C26.2499 25.4433 26.1457 25.6949 25.9602 25.8805Z"
                  fill="#D9251C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1302_371">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={isOpenMobileMenu} handle={handleMobileMenu} />
    </>
  );
};
export default Header;
