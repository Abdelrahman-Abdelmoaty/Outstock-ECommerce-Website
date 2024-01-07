"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/Form/Input";
import FacebookLogin from "@src/app/(user)/auth/components/FacebookLogin";
import GoogleLogin from "@src/app/(user)/auth/components/GoogleLogin";
import { loginSchema } from "@src/lib/schemas";
import { login, mergeCarts } from "@src/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { redirect, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import store from "@src/redux/store";
import { useState, useTransition } from "react";
import LoadingSpinner from "@src/components/Loading/LoadingSpinner";

export default function Login() {
  const [isPending, setIsPending] = useState<boolean>();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const methods = useForm({ resolver: yupResolver(loginSchema) });
  const onSubmit = methods.handleSubmit(async (data: { email: string; password: string }) => {
    setIsPending(true);
    try {
      await dispatch(login({ email: data.email, password: data.password })).unwrap();

      dispatch(mergeCarts());
      router.replace("/");
    } catch {
      setError(store.getState().auth.error as string);
    }
    setIsPending(false);
  });

  return (
    <div className="bg-white">
      <div className="mb-12">
        <p className="text-[#333] text-center text-4xl font-medium py-12">Customer Login</p>
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4">
          <div className="md:pr-[10%]">
            <p className="text-[#333] text-2xl font-semibold mb-1">Registered Customers</p>
            <p className="text-[#666] text-sm">If you have an account, sign in with your email address.</p>
            <FormProvider {...methods}>
              <Input label="email" name="email" type="email" />
              {methods.formState.errors.email && <p className="text-red-500">{methods.formState.errors.email.message}</p>}
              <Input label="password" name="password" type="password" />
              {methods.formState.errors.password && <p className="text-red-500">{methods.formState.errors.password.message}</p>}
              {error && <p className="text-red-500">{error}</p>}
              <a href="/" className="hv-eff text-[#666] text-sm inline-block mt-2 mb-6">
                Forgot Your Password?
              </a>
              <button type="submit" className="block border-2 border-black font-semibold text-xs uppercase px-16 py-4 animate-btn hover:border-[var(--secondary-color)]" onClick={onSubmit}>
                {isPending ? <LoadingSpinner sz="4" /> : <span>Sign in</span>}
              </button>
            </FormProvider>
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <span className="line"></span>
          <div className="md:pl-[10%]">
            <p className="text-[#333] text-2xl font-semibold mb-1">New Customers</p>
            <p className="text-[#666] text-sm">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            <a href="/auth/signup" className="inline-block border-2 border-black font-semibold text-sm uppercase px-20 py-3 animate-btn hover:border-[var(--secondary-color)] mt-5">
              <span>Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
