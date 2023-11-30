"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from '../customButton';
import { updateSearchParams } from '@/app/utils';

export default function ShowMore({pageNumber, isNext}) {
    const router = useRouter();

    const handleNavigation = ()=>{
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
    }


  return (
    <div className="w-full flex justify-center gap-5 mt-10">
        {!isNext && (
            <CustomButton text={"Show more"}
            btnType={"button"}
            classStyle={"bg-blue-700 rounded-full text-white"}
            handleClick={handleNavigation}
            />

        )}
    </div>
  )
}
