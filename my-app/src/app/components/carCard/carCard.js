"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "../customButton/customButton";
import { calculateCarRent } from "@/app/utils";
import CardDetails from "../carDetails/carDetails";

export default function CarCard({ car }) {
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(car.city_mpg, car.year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          fill
          alt={`${car.model}`}
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-800">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            text={"View more"}
            classStyle={"w-full py-[16px] rounded-full bg-blue-700"}
            textStyle={"text-white text-[14px] leading-[17px] font-bold"}
            handleClick={()=>setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car} type={"button"}/>
    </div>
  );
}
