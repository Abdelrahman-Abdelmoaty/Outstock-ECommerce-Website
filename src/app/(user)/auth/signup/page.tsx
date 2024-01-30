"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/Form/Input";
import FacebookLogin from "@src/app/(user)/auth/components/FacebookLogin";
import GoogleLogin from "@src/app/(user)/auth/components/GoogleLogin";
import { RegisterFormData, registerSchema } from "@src/utils/schemas";
import { useState } from "react";
import { FormProvider, set, useForm } from "react-hook-form";
import { register } from "@src/utils/actions";
import LoadingSpinner from "@src/components/Loading/LoadingSpinner";
import { useAppDispatch } from "@src/redux/store";
import { setAuthentication } from "@src/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const methods = useForm({ resolver: yupResolver(registerSchema) });
  const dispatch = useAppDispatch();
  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const response = await register(formData);
      dispatch(setAuthentication(response));
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className="bg-white">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="my-12">
            <p className="mb-12 text-center text-4xl font-medium text-[#333]">
              Create New Customer Account
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-5 rounded border p-8">
                <p className="mb-10 text-xl font-medium">
                  Personal Information
                </p>
                <Input label="name" name="name" type="text" />
                <Input label="username" name="username" type="text" />
                <Input label="phone number" name="phoneNumber" type="text" />
                <GoogleLogin />
                <FacebookLogin />
              </div>
              <div className="mb- h-fit rounded border p-8">
                <p className="mb-10 text-xl font-medium">Sign-in Information</p>
                <Input label="email" name="email" type="email" />
                <Input label="new password" name="password" type="password" />
                <Input
                  label="confirm password"
                  name="password_confirmation"
                  type="password"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="/auth"
                className="animate-btn mt-5 inline-block border-2 border-black px-20 py-4 text-center text-sm font-semibold uppercase hover:border-[var(--secondary-color)]"
              >
                <span>Back</span>
              </a>
              <button
                type="submit"
                className="animate-btn mt-5 inline-block border-2 border-black px-20 py-4 text-center text-sm font-semibold uppercase hover:border-[var(--secondary-color)]"
              >
                {methods.formState.isSubmitting ? (
                  <LoadingSpinner sz="4" />
                ) : (
                  <span>Create An Account</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
