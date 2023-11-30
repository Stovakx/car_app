"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./customButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { headerLinks } from "@/app/constants";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLgScreen = window.innerWidth >= 1024;
      setIsNavOpen(isNavOpen);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full h-20 ">
      <nav className="h-full max-w-[1440px] overflow-y-hidden mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex-shrink-0">
          <Link href="/" className="felx justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Car Hub logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="max-lg:hidden">
          <ul className="flex space-x-6 items-center  p-4">
            {headerLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <CustomButton
                text={"Sign in"}
                btnType={"button"}
                classStyle={
                  "text-primary-blue rounded-full bg-white min-w-[130px]"
                }
              />
            </li>
          </ul>
        </div>

        <div className="h-full flex items-center lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="">
            {!isNavOpen ? (
              <MenuIcon className="text-5xl md:text-4xl" />
            ) : (
              <CloseIcon className="text-5xl md:text-4xl" />
            )}
          </button>
        </div>

        {isNavOpen && (
          <div
            className={`flex flex-col text-center px-2 py-7 space-y-5 sm:px-3 absolute right-0 top-20 z-10 bg-gradient-to-b from-white to-blue-600 text-3xl w-full sm:w-64 md:text-2xl `}
          >
            {headerLinks.map((link, index) => (
              <Link href={link.url} key={index} onClick={closeNav}>
                {link.title}
              </Link>
            ))}

            <CustomButton
              text={"Sign in"}
              btnType={"button"}
              classStyle={
                "text-primary-blue rounded-full bg-white min-w-[130px]"
              }
              onClick={closeNav}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
