"use client";
import Input from "@src/components/Form/Input";
import FacebookLogin from "@src/components/auth/FacebookLogin";
import GoogleLogin from "@src/components/auth/GoogleLogin";
import { saveAccessToken } from "@src/lib/utils";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Login() {
  const [error, setError] = useState<boolean>(false);
  const methods = useForm();
  // const dispatch = useApp
  const onSubmit = methods.handleSubmit((data) => {
    setError(false);

    // (async function () {
    //   try {
    //     const response = await axios.post("http://127.0.0.1:8000/api/auth/login", data);
    //     saveAccessToken(response.data.token);
    //     open("/", "_self");
    //   } catch (error) {
    //     setError(true);
    //   }
    // })();
  });
  return (
    <div className="bg-white pb-96">
      <div className="w-full xl:w-[60%] mx-auto">
        <p className="text-[#333] text-center text-4xl font-medium py-12">Customer Login</p>
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4">
          <div className="mx-[5%] md:pr-[10%]">
            <p className="text-[#333] text-2xl font-semibold mb-1">Registered Customers</p>
            <p className="text-[#666] text-sm">If you have an account, sign in with your email address.</p>
            <FormProvider {...methods}>
              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <Input name="email" type="email" />
                <Input name="password" type="password" />
              </form>
              {error && <p className="text-white bg-red-500 p-2">Wrong email or password</p>}
              <a href="" className="hv-eff text-[#666] text-sm inline-block mt-2 mb-6">
                Forgot Your Password?
              </a>
              <button className="block border-2 border-black font-semibold text-xs uppercase px-16 py-4 animate-btn hover:border-[var(--secondary-color)]" onClick={onSubmit}>
                <span>Sign in</span>
              </button>
            </FormProvider>
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <span className="v-line hidden md:block"></span>
          <div className="mx-[5%] md:pl-[10%]">
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
