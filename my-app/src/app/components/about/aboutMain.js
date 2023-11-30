import Image from "next/image";
import React from "react";
import ShadowImage from "../shadowImage";

export default function AboutMain({aboutusText}) {
  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="w-full h-[300px] xl:h-[450px] overflow-hidden hidden lg:flex  relative shadow-lg 2xl:rounded-lg">
        <Image src={'/groupofcars.jpg'} fill objectFit="cover" objectPosition="bottom" />
        <ShadowImage shadow={"opacity-25"}/>
      </div>
      <div className="lg:mt-8 mx-auto w-10/12 space-y-3">
            <h3 className="text-3xl font-semibold">About us</h3>
            <p className="whitespace-pre-line text-lg">{aboutusText}</p>
      </div>
    </div>
  );
}
