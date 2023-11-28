"use client";
import React from "react";
import CustomButton from "../customButton/customButton";
import Image from "next/image";

export default function Hero() {
  const handleScroll = () => {
    const discoverElement = document.getElementById('discover');
    if(discoverElement){
      discoverElement.scrollIntoView({
        behavior:"smooth"
      });
    }
  };
  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find, book or rent a car -- quickly and easily!
          </h1>
          <p className="hero_subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomButton
            btnType={"button"}
            text={"Explore Cars"}
            classStyle={`bg-blue-600 text-white rounded-full mt-10`}
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </>
  );
}
