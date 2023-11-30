import React from 'react'

export default function ShadowImage({shadow}) {
  return (
    <div className={` absolute inset-0 bg-black ${shadow}`}/>
  )
}
