"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0">
      <div
        className={`bg-white text-zinc-500 border-b border-zinc-100 lg:border-none ${
          isHidden ? "lg:shadow-bottom" : ""
        }`}
      >
        <div className="2xl:px-32 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-5 w-full lg:w-auto">
              <Link href={"/"} className="hidden lg:block">
                <Image
                  src="/images/logos/mainLogo.svg"
                  alt="Logo digikala"
                  width={1000}
                  height={1000}
                  className="w-80"
                />
              </Link>
              <div className="bg-zinc-100 rounded-lg py-3 flex items-center gap-x-4 w-full lg:pl-80 xl:pl-96 pr-4 mx-4 lg:mx-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                  className="text-zinc-400"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="جستجو"
                  className="bg-zinc-100 placeholder:text-xs"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-x-5">
              <Link
                href={"/auth"}
                className="flex items-center gap-x-3 border border-zinc-200 rounded-lg py-2 px-4 text-[13px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="rotate-180 text-zinc-800"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinejoin="round"
                      d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"
                    />
                    <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" />
                  </g>
                </svg>
                <span className="text-zinc-800">ورود | ثبت‌‌‌‌نام</span>
              </Link>
              <span className="w-[0.1px] h-6 bg-zinc-300" />
              <Link href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  transform="scale(-1, 1)"
                  className="text-zinc-800"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`bg-white text-zinc-500 transition-all duration-500 ${
          isHidden ? "opacity-0 z-0" : "opacity-100 z-40 shadow-bottom"
        }`}
      >
        <div className="2xl:px-32">
          <div className="hidden lg:flex items-center justify-between font-[iranr] py-3 sticky top-20">
            <div className="flex items-center gap-x-4">
              <Link
                href={"/"}
                className="flex items-center gap-x-2 text-sm border-l border-zinc-300 pl-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.8em"
                  height="0.8em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2m974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2s18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2m0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2"
                  />
                </svg>
                <span>دسته‌بندی کالاها</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-2.5-4l5-5" />
                    <path d="M5 5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" />
                  </g>
                </svg>
                <span>شگفت‌انگیز‌ها</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759"
                    clipRule="evenodd"
                  />
                </svg>
                <span>سوپر‌مارکت</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 512 512"
                >
                  <rect
                    width="416"
                    height="320"
                    x="48"
                    y="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    rx="56"
                    ry="56"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="60"
                    d="M48 192h416M128 300h48v20h-48z"
                  />
                </svg>
                <span>کارت هدیه</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 128 128"
                >
                  <radialGradient
                    id="notoFire0"
                    cx="68.884"
                    cy="124.296"
                    r="70.587"
                    gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".314" stopColor="#ff9800" />
                    <stop offset=".662" stopColor="#ff6d00" />
                    <stop offset=".972" stopColor="#f44336" />
                  </radialGradient>
                  <path
                    fill="url(#notoFire0)"
                    d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
                  />
                  <radialGradient
                    id="notoFire1"
                    cx="64.921"
                    cy="54.062"
                    r="73.86"
                    gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".214" stopColor="#fff176" />
                    <stop offset=".328" stopColor="#fff27d" />
                    <stop offset=".487" stopColor="#fff48f" />
                    <stop offset=".672" stopColor="#fff7ad" />
                    <stop offset=".793" stopColor="#fff9c4" />
                    <stop
                      offset=".822"
                      stopColor="#fff8bd"
                      stopOpacity="0.804"
                    />
                    <stop
                      offset=".863"
                      stopColor="#fff6ab"
                      stopOpacity="0.529"
                    />
                    <stop
                      offset=".91"
                      stopColor="#fff38d"
                      stopOpacity="0.209"
                    />
                    <stop offset=".941" stopColor="#fff176" stopOpacity="0" />
                  </radialGradient>
                  <path
                    fill="url(#notoFire1)"
                    d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
                  />
                </svg>
                <span>پرفروش‌ترین‌ها</span>
              </Link>
              <Link
                href={"/"}
                className="hidden xl:flex items-center gap-x-2 text-sm border-l border-zinc-300 pl-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M.5 11a1 1 0 0 0 .998 1h11.004a1 1 0 0 0 .998-1V8.966a2.037 2.037 0 0 1 0-3.932V3a1 1 0 0 0-.998-1H1.498A1 1 0 0 0 .5 3v2.03a2.037 2.037 0 0 1 0 3.94zm4.02-1.5l5-5" />
                    <path d="M5.02 5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" />
                  </g>
                </svg>
                <span>تخفیف‌ها و پیشنهادها</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <span>سوالی دارید؟</span>
              </Link>
              <Link href={"/"} className="flex items-center gap-x-2 text-sm">
                <span>در دیجی‌کالا بفروشید!</span>
              </Link>
            </div>
            <button className="text-xs flex items-center gap-x-2 bg-orange-50 text-orange-500 rounded-full py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7" />
                  <circle cx="12" cy="10" r="3" />
                </g>
              </svg>
              <span>لطفا شهر خود را انتخاب کنید</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
