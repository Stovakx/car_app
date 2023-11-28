"use client"
import React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
/* import Slide from "@mui/material/Slide"; */

/* import { generateCarImageUrl } from "@utils";
 */
/* function Transition(props) {
  return <Slide direction="up" {...props} />;
} */
/* pro logiku obrázků k danému autu(nenašel jsem zatím) 
generateCarImageUrl(car) */
export default function CardDetails({ car, isOpen, closeModal }) {
  return (
    <>
      <Dialog
        open={isOpen}
        keepMounted
        onClose={closeModal}
        aria-describedby="card-details-dialog"
      >
        <div className="dialog__wrapper w-64 sm:w-80 lg:w-96">
          <div className="relative w-full max-w-lg h-44 overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 ">
            <Image src={"/hero.png"} fill alt="hero image" />
            <IconButton
              aria-label="close"
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              onClick={closeModal}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-between mt-1">
            <Image
              src={"/hero.png"}
              height={100}
              width={100}
              className="scale-x-[-1]"
              alt={`${car.model} image`}
            />
            <Image src={"/hero.png"} height={100} width={100} alt={`${car.model} image`}/>
            <Image src={"/hero.png"} height={100} width={100} className="" alt={`${car.model} image`}/>
          </div>
          <DialogTitle className="capitalize text">
            {car.make} {car.model}
          </DialogTitle>

          <DialogContent>
            {Object.entries(car).map(([key, value]) => (
              <div
                className="flex justify-between gap-5 w-full text-right"
                key={key}
              >
                <h4 className="text-grey capitalize">
                  {key.split("_").join(" ")}
                </h4>
                <p className="text-black-100 font-semibold">{value}</p>
              </div>
            ))}
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
