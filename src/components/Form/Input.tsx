"use client";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  type: string;
};

export default function Input({ label, name, type }: Props) {
  const { register } = useFormContext();
  return (
    <div className="my-4 text-[#666] text-sm">
      <label htmlFor={name} className="block mb-1 capitalize">
        {label} <span className="text-red-500">*</span>
      </label>
      <input id={name} type={type} {...register(name)} className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" />
    </div>
  );
}
