"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "../Container";

import { siteInfo } from "@/constants/siteInfo";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { menu } from "@/constants/menu";

const Header = () => {
  const headerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "xl:h-16 h-[50px] sticky top-0 z-[3] flex justify-center items-center transition-all duration-300",
        scrollY > 0 && "dark"
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

          <ul className="flex items-center gap-[5px] listSocials">
            <li>
              <Link
                href={`viber://chat?number=%2B${siteInfo.telInfo.notPlus}`}
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#9920F7" />
                  <path
                    d="M6.01439 4C6.2446 4 7.16547 6.07194 7.16547 6.30216C7.16547 6.76259 6.47482 7.22302 6.2446 7.68345C6.01439 8.14389 6.47482 8.60432 6.93525 9.06475C7.1168 9.2463 7.85612 9.98561 8.31655 9.7554C8.77698 9.52518 9.23741 8.83453 9.69784 8.83453C9.92806 8.83453 12 9.7554 12 9.98561C12 10.9065 11.3094 11.5971 10.6187 11.8273C9.92806 12.0576 9.46763 12.0576 8.54676 11.8273C7.6259 11.5971 6.93525 11.3669 5.78417 10.2158C4.63309 9.06475 4.40288 8.3741 4.17266 7.45324C3.94245 6.53237 3.94245 6.07194 4.17266 5.38129C4.40288 4.69065 5.09353 4 6.01439 4Z"
                    fill="white"
                  />
                  <path
                    d="M8 6C8.44709 6.20521 8.85054 6.48928 9.19242 6.83438C9.52544 7.1705 9.80014 7.56451 10 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 6C10.8745 5.51261 10.6204 5.07689 10.276 4.7312C9.92916 4.38312 9.49078 4.12632 9 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href={`https://t.me/${siteInfo.telInfo.format}`}
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C5.87875 0 3.8425 0.843375 2.34375 2.34313C0.843465 3.84348 0.000429311 5.87823 0 8C0 10.1209 0.84375 12.1571 2.34375 13.6569C3.8425 15.1566 5.87875 16 8 16C10.1213 16 12.1575 15.1566 13.6562 13.6569C15.1562 12.1571 16 10.1209 16 8C16 5.87913 15.1562 3.84288 13.6562 2.34313C12.1575 0.843375 10.1213 0 8 0Z"
                    fill="url(#paint0_linear_1196_395)"
                  />
                  <path
                    d="M3.54988 8.01349C5.69777 7.02572 7.12969 6.3745 7.84565 6.05982C9.89225 5.16137 10.317 5.00533 10.5944 5.00005C10.6554 4.99901 10.7912 5.01493 10.8799 5.09058C10.9535 5.15439 10.9742 5.24067 10.9846 5.30125C10.9938 5.36177 11.0065 5.4997 10.9961 5.60738C10.8856 6.83723 10.4056 9.82169 10.1616 11.1992C10.0592 11.782 9.85541 11.9775 9.65858 11.9965C9.23039 12.0381 8.90579 11.6981 8.4914 11.4114C7.84335 10.9626 7.47731 10.6833 6.84768 10.2455C6.12021 9.73941 6.59214 9.46124 7.00653 9.00673C7.11473 8.88775 9.00017 7.07761 9.03586 6.91343C9.04046 6.89289 9.04506 6.81633 9.00132 6.77598C8.95873 6.73551 8.89543 6.74936 8.84938 6.7603C8.78377 6.77586 7.74896 7.4987 5.74151 8.92871C5.44799 9.14186 5.18209 9.24577 4.94267 9.2403C4.68022 9.23435 4.17376 9.08329 3.79736 8.95423C3.33693 8.79588 2.96974 8.71215 3.00197 8.44321C3.01809 8.30321 3.20111 8.15993 3.54988 8.01349Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1196_395"
                      x1="800"
                      y1="0"
                      x2="800"
                      y2="1600"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2AABEE" />
                      <stop offset="1" stopColor="#229ED9" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href={`https://wa.me/${siteInfo.telInfo.notPlus}`}
                target="_blank"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1196_405"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1196_405)">
                    <path
                      d="M15.9997 7.99985C15.9997 12.418 12.418 15.9997 7.99985 15.9997C3.58167 15.9997 0 12.418 0 7.99985C0 3.58167 3.58167 0 7.99985 0C12.418 0 15.9997 3.58167 15.9997 7.99985Z"
                      fill="#409321"
                    />
                  </g>
                  <path
                    d="M4.67196 4.31794C4.75147 4.21986 4.95464 3.99714 5.22395 4.00003C5.23891 4.00032 5.25674 4.00089 5.2773 4.00292C5.2773 4.00292 5.31971 4.00754 5.3617 4.01866C5.71124 4.11211 6.33657 4.80513 6.33657 4.80513C6.87044 5.39675 7.02458 5.42521 7.02286 5.64317C7.02113 5.84726 6.89445 6.00499 6.65937 6.24028C6.03289 6.86757 5.89931 6.91481 5.85071 7.11124C5.8221 7.22665 5.73583 7.45067 6.12276 7.88457C6.69963 8.53151 8.08155 9.85226 8.20247 9.93329C8.32311 10.014 8.75245 10.297 9.32946 9.77152C9.72329 9.41273 9.91093 8.99097 10.1909 8.96541C10.339 8.95168 10.448 9.04153 10.6711 9.23233C11.9902 10.3595 12.0096 10.5573 11.9986 10.6743C11.9797 10.8766 11.8887 11.0592 11.5834 11.2812C10.8053 11.8471 10.4566 12.3459 8.87338 11.6855C7.29015 11.025 5.62627 9.3538 5.15666 8.63926C4.68706 7.92487 3.94901 6.8332 4.00278 6.07836C4.04017 5.55332 4.2002 5.0943 4.2002 5.0943C4.34312 4.73724 4.53335 4.47884 4.67196 4.31794Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <button
          id="handleMobileMenu"
          className="h-[30px] relative w-[30px] flex justify-center items-center handleMobileTelMenu"
        >
          <svg
            className="burgerIcon"
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H30V3.33333H0V0ZM0 8.33333H30V11.6667H0V8.33333ZM0 16.6667H30V20H0V16.6667Z"
              fill="#158176"
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
            <path
              d="M4 4L26 26M4 26L26 4"
              stroke="#158176"
              strokeWidth="3.4"
            />
          </svg>
        </button>
      </Container>
    </header>
  );
};
export default Header;
