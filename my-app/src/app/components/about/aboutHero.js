import React from "react";
import Image from "next/image";
import CustomButton from "../customButton";
import Link from "next/link";

export default function AboutHero({ title, subtitle }) {
  return (
    <div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-36 w-full">
        <div className="flex justify-center flex-col mx-auto w-11/12 lg:w-1/4">
          <h1 className="hero__title text-center lg:text-start">{title}</h1>
          <p className="hero_subtitle text-center lg:text-start">{subtitle}</p>
        </div>
        <div className="mt-2 lg:mt-0 w-11/12 lg:w-2/4 h-full mx-auto rounded-lg shadow-lg flex justify-center">
          <Image src={"/Sector_StateFarm02.jpg"} width={700} height={700} alt="headquarters"/>
        </div>
      </div>
      <div className="flex flex-row justify-evenly lg:w-2/6 mx-auto mt-3">
        <Link href={"/#discover"}>
          <CustomButton text={"Rent a Car"} btnType={"button"} classStyle={"bg-blue-600 text-white rounded-full mt-10"} />
        </Link>
        <Link href={"/contact"}>
          <CustomButton text={"Contact Us"} btnType={"button"} classStyle={"bg-blue-600 text-white rounded-full mt-10"} />
        </Link>
      </div>
    </div>
  );
}
