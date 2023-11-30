import Image from "next/image";
import React from "react";
import ShadowImage from "../shadowImage";
import { carBrands } from "@/app/constants";
import Logos from "./logos";

export default function Partners({ aboutPartnersText }) {
  return (
    <div className="mx-auto mt-10 space-y-8">
      <div className=" text-center md:text-end w-full md:w-11/12">
        <h3 className="text-2xl font-semibold ">Our Partners</h3>
      </div>
      <div className="flex" id="partnership">
        <div className="max-md:hidden md:h-[380px] md:w-[280px] lg:h-[500px] lg:w-[290px] relative mx-auto rounded-md">
          <Image fill src={"/shakehands.jpg"} alt="bussiness hand shake" />
          <ShadowImage shadow={"opacity-25"} />
        </div>
        <div className="w-5/6 md:w-3/6 mx-auto">
          <div className="">
            <p>{aboutPartnersText}</p>
          </div>
          <div className="mt-3 space-y-3">
            <h3 className="text-2xl font-medium ">
              Those car brands <br /> trust us the most.{" "}
            </h3>
            <p className="">
              Our relationships with these car brands are so good that we have
              access to the latest models as well as test cars.
            </p>
            <div className="max-lg:hidden grid gap-4 grid-cols-4">
              {carBrands.map((brand, index) => (
                <Logos key={index} src={brand.src} alt={brand.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-54 md:grid-cols-4 md:gap-5  lg:hidden">
        {carBrands.map((brand, index) => (
          <Logos key={index} src={brand.src} alt={brand.name} />
        ))}
      </div>
    </div>
  );
}
