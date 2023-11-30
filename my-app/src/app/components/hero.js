"use client";
import React from "react";
import CustomButton from "./customButton";
import Image from "next/image";

export default function Hero({title, subtitle, btnText,imgContainerCss, handleClick, imgSrc, overlaycss, btnClass}) {

  
  return (
    <>
      <div className="hero mt-36">
        <div className="flex-1 padding-x">
          <h1 className="hero__title">
            {title}
          </h1>
          <p className="hero_subtitle">
            {subtitle}
          </p>
          <CustomButton
            btnType={"button"}
            text={btnText}
            classStyle={btnClass}
            handleClick={handleClick}
          />
        </div>
        <div className={imgContainerCss}>
          <div className="hero__image">
            <Image src={imgSrc} alt="hero" fill className="object-contain" />
          </div>
          <div className={overlaycss} />
          
        </div>
      </div>
    </>
  );
}
