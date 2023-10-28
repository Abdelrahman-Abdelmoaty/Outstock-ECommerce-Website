"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/Form/Input";
import LoadingComponent from "@src/components/LoadingComponent";
import FacebookLogin from "@src/app/auth/(components)/FacebookLogin";
import GoogleLogin from "@src/app/auth/(components)/GoogleLogin";
import { signupSchema } from "@src/lib/schemas";
import { signup } from "@src/redux/slices/authSlice";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@src/redux/store";
import { User, signupFormData } from "@src/lib/types";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm({ resolver: yupResolver(signupSchema) });
  const onSubmit = (formData: signupFormData) => {
    setIsLoading(true);
    dispatch(signup(formData));
    setIsLoading(false);
    router.replace("/");
  };
  return (
    <div className="bg-white res-w">
      {isLoading ? (
        <div className="flex-center h-[70vh]">
          <LoadingComponent />
        </div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="my-12">
              <p className="text-[#333] text-center text-4xl font-medium mb-12">Create New Customer Account</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-8 border rounded mb-5">
                  <p className="font-medium text-xl mb-10">Personal Information</p>
                  <Input label="name" name="name" type="text" />
                  {methods.formState.errors.name && <p className="text-red-500">{methods.formState.errors.name.message}</p>}
                  <Input label="username" name="username" type="text" />
                  {methods.formState.errors.username && <p className="text-red-500">{methods.formState.errors.username.message}</p>}
                  <Input label="phone number" name="phoneNumber" type="text" />
                  {methods.formState.errors.phoneNumber && <p className="text-red-500">{methods.formState.errors.phoneNumber.message}</p>}
                  <GoogleLogin />
                  <FacebookLogin />
                </div>
                <div className="p-8 border rounded mb- h-fit">
                  <p className="font-medium text-xl mb-10">Sign-in Information</p>
                  <Input label="email" name="email" type="email" />
                  {methods.formState.errors.email && <p className="text-red-500">{methods.formState.errors.email.message}</p>}
                  <Input label="new password" name="password" type="password" />
                  {methods.formState.errors.password && <p className="text-red-500">{methods.formState.errors.password.message}</p>}
                  <Input label="confirm password" name="password_confirmation" type="password" />
                  {methods.formState.errors.password_confirmation && <p className="text-red-500">{methods.formState.errors.password_confirmation.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <a href="/auth/" className="text-center inline-block border-2 border-black font-semibold text-sm uppercase px-20 py-4 animate-btn hover:border-[var(--secondary-color)] mt-5">
                  <span>Back</span>
                </a>
                <button type="submit" className="text-center inline-block border-2 border-black font-semibold text-sm uppercase px-20 py-4 animate-btn hover:border-[var(--secondary-color)] mt-5">
                  <span>Create An Account</span>
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
