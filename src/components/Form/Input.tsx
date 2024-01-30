"use client";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ name, label, ...props }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="my-4 text-sm text-[#666]">
      <label htmlFor={name} className="mb-1 block capitalize">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={name}
        className="block w-full bg-[#f5f5f5] px-2 py-4 text-black shadow-inner focus:outline-none"
        {...props}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-xs text-red-500">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
