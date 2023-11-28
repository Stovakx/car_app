"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../customButton/customButton";

export default function Header() {
  return (
    <header clasname="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="felx justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />{" "}
        </Link>
        <CustomButton
        text={'Sign in'}
        btnType={'button'}
        classStyle={'text-primary-blue rounded-full bg-white min-w-[130px]'}
      />
      </nav>
    </header>
  );
}
