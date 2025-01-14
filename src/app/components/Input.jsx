"use client";
import { useState } from "react";

const Input = ({ text, name, type, placeholder, handleChange, formErrors }) => {
  return (
    <div className="flex flex-col mt-[12px]">
      <p className="text-[#334155] font-bold text-[14px]">
        {text}
        <span className="text-red-600">*</span>
      </p>
      <input
        name={name}
        className={`relative
          outline-[#0CA5E9] border rounded-lg p-2 w-[100%]
          focus:border-[#0CA5E9] ${
            formErrors ? "border-[#E14942]" : "border-[#0CA5E9]"
          }
        `}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {<p className="text-red-600 text-sm">{formErrors}</p>}
    </div>
  );
};

export default Input;
