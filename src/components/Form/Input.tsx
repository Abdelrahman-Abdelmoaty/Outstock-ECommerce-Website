"use client";

import { ChangeEvent, DOMElement, useEffect, useId, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type: string;
};
export default function Input({ name, type }: Props) {
  const { register } = useFormContext();
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const id = useId();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // if (name === "new password") {
    //   if (!input.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)) {
    //     setError("Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character.");
    //   } else {
    //     setError("");
    //   }
    // }
  };

  return (
    <div className="my-4 text-[#666] text-sm">
      <label htmlFor={id} className="block mb-1 capitalize">
        {name} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={id}
        {...register(
          name
          //   , {
          //   required: {
          //     value: true,
          //     message: "required",
          //   },
          // }
        )}
        className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner"
        onChange={handleInput}
      />
      {error && <p className="text-red-500 ease-500">{error}</p>}
    </div>
  );
}
/* 
<div className="mb-5">
    <label htmlFor="password" className="block mb-1">
      Password <span className="text-red-500">*</span>
    </label>
    <div className="flex border rounded bg-[#f5f5f5] ">
      <input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="password" type={showPassword ? "text" : "password"} placeholder="●●●●●●●●" onChange={handlePassword} />
      <button type="button" className="mx-2 text-gray-700" onClick={handleShowPassword}>
        {showPassword ? (                    
        ) : (
        )}
      </button>
</div> 
*/

// const openEye = (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// const closeEye = (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
//     />
//   </svg>
// );
