"use client";
import React from "react";

export default function CustomButton({ text, classStyle, handleClick, btnType }) {
  return (
    <button
      disabled={false}
      type={`${btnType}`}
      onClick={handleClick}
      className={`custom-btn ${classStyle}`}
    >
      <span className="flex-1">{text}</span>
    </button>
  );
}
