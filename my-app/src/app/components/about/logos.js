import React from 'react'
import Image from 'next/image';

export default function Logos({src, alt,}) {
  return (
    <div className='h-28 lg:h-12 w-28 lg:w-12 relative'>
    <Image src={src} alt={alt} fill/>
    </div>
  )
}
