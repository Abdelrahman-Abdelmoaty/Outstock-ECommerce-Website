"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@src/components/Form/Input";
import FacebookLogin from "@src/app/(user)/auth/components/FacebookLogin";
import GoogleLogin from "@src/app/(user)/auth/components/GoogleLogin";
import { LoginFormData, loginSchema } from "@src/utils/schemas";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import LoadingSpinner from "@src/components/Loading/LoadingSpinner";
import { authenticate } from "@src/utils/actions";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@src/redux/slices/userSlice";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const methods = useForm({ resolver: yupResolver(loginSchema) });
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const onSubmit = async (formData: LoginFormData) => {
    try {
      const response = await authenticate(formData);
      dispatch(setUser(response.user));
      toast.success("Logged in successfully");
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className="bg-white">
      <div className="mb-12">
        <p className="py-12 text-center text-4xl font-medium text-[#333]">
          Customer Login
        </p>
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:pr-[10%]">
            <p className="mb-1 text-2xl font-semibold text-[#333]">
              Registered Customers
            </p>
            <p className="text-sm text-[#666]">
              If you have an account, sign in with your email address.
            </p>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input label="email" name="email" type="email" />
                <Input label="password" name="password" type="password" />
                {error && <p className="text-red-500">{error}</p>}
                <a
                  href="/"
                  className="hv-eff mb-6 mt-2 inline-block text-sm text-[#666]"
                >
                  Forgot Your Password?
                </a>
                <button
                  type="submit"
                  className="animate-btn block border-2 border-black px-16 py-4 text-xs font-semibold uppercase hover:border-[var(--secondary-color)]"
                >
                  {methods.formState.isSubmitting ? (
                    <LoadingSpinner sz="4" />
                  ) : (
                    <span>Sign in</span>
                  )}
                </button>
              </form>
            </FormProvider>
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <span className="line"></span>
          <div className="md:pl-[10%]">
            <p className="mb-1 text-2xl font-semibold text-[#333]">
              New Customers
            </p>
            <p className="text-sm text-[#666]">
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </p>
            <a
              href="/auth/signup"
              className="animate-btn mt-5 inline-block border-2 border-black px-20 py-3 text-sm font-semibold uppercase hover:border-[var(--secondary-color)]"
            >
              <span>Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
