"use client";
import Input from "@src/components/Form/Input";
import LoadingComponent from "@src/components/LoadingComponent";
import FacebookLogin from "@src/components/auth/FacebookLogin";
import GoogleLogin from "@src/components/auth/GoogleLogin";
import { registerUser } from "@src/lib/auth";
import axios from "axios";
import { MouseEvent, ChangeEvent, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SignUp() {
  // const [name, setName] = useState<string>("");
  // const [username, setUsername] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [confirmPassword, setConfirmPassword] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };
  // const handleName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };
  // const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value);
  // };
  // const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };
  // const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
  //   setConfirmPassword(e.target.value);
  // };
  // const handleShowPassword = () => {
  //   setShowPassword((prev) => !prev);
  // };
  // const handleShowConfirmPassword = () => {
  //   setShowConfirmPassword((prev) => !prev);
  // };
  // const handleSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   let isValid = true;

  //   if (!name) {
  //     alert("empty name");
  //     isValid = false;
  //   }
  //   if (!username) {
  //     alert("empty username");
  //     isValid = false;
  //   }
  //   if (!email) {
  //     alert("empty email");
  //     isValid = false;
  //   }
  //   if (!password) {
  //     alert("empty password");
  //     isValid = false;
  //   }
  //   if (!confirmPassword) {
  //     alert("empty confirm password");
  //     isValid = false;
  //   }

  //   if (isValid) {
  //     setIsLoading(true);
  //     const res = await registerUser({ name, username, email, password });
  //     localStorage.setItem("token", res.token);
  //     open("/", "_self");
  //   }
  // };
  const [passordsNotMatchError, setPassordsNotMatchError] = useState<boolean>(false);

  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    if (data["new password"] !== data["confirm password"]) {
      setPassordsNotMatchError(true);
    } else {
      setPassordsNotMatchError(false);
      (async function () {
        const response = await axios.post("http://127.0.0.1:8000/api/auth/register", {
          name: data.name,
          email: data.email,
          username: data.username,
          password: data["new password"],
          password_confirmation: data["confirm password"],
        });
        console.log(response);
      })();
    }
  });
  return (
    <div className="bg-white pb-96">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <FormProvider {...methods}>
          <div className="w-full px-[5%] mx-auto">
            <p className="text-[#333] text-center text-4xl font-medium py-12">Create New Customer Account</p>
            <div className="flex flex-wrap justify-center gap-x-10">
              <div className="p-8 border rounded mb-5 min-w-[500px]">
                <p className="font-medium text-xl mb-10">Personal Information</p>
                <Input name="name" type="text" />
                <Input name="username" type="text" />
                <GoogleLogin />
                <FacebookLogin />
              </div>
              <div className="p-8 border rounded mb-5 w-[500px] h-fit">
                <p className="font-medium text-xl mb-10">Sign-in Information</p>
                <Input name="email" type="email" />
                <Input name="new password" type="password" />
                <Input name="confirm password" type="password" />
                {passordsNotMatchError && <p className="text-red-500">Passwords don't match</p>}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10">
              <button className="min-w-[500px] text-center inline-block border-2 border-black font-semibold text-sm uppercase px-20 py-4 animate-btn hover:border-[var(--secondary-color)] mt-5" onClick={onSubmit}>
                <span>Create An Account</span>
              </button>
              <a href="/auth/" className="min-w-[500px] text-center inline-block border-2 border-black font-semibold text-sm uppercase px-20 py-4 animate-btn hover:border-[var(--secondary-color)] mt-5">
                <span>Back</span>
              </a>
            </div>
          </div>
        </FormProvider>
      )}
    </div>
  );
}
/* <label htmlFor="name" className="block mb-1">
Name <span className="text-red-500">*</span>
</label>
<input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="name" type="text" placeholder="Name" onChange={handleName} /> */
/* <div className="mb-5">
<label htmlFor="username" className="block mb-1">
Username <span className="text-red-500">*</span>
</label>
<input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="username" type="text" placeholder="Username" onChange={handleUsername} />
</div> */
/* <div className="mb-5">
                  <label htmlFor="email" className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="email" type="text" placeholder="Email" onChange={handleEmail} />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border rounded bg-[#f5f5f5] ">
                    <input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="password" type={showPassword ? "text" : "password"} placeholder="●●●●●●●●" onChange={handlePassword} />
                    <button type="button" className="mx-2 text-gray-700" onClick={handleShowPassword}>
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border rounded bg-[#f5f5f5] ">
                    <input className="text-black bg-[#f5f5f5] block px-2 py-4 focus:outline-none w-full shadow-inner" id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="●●●●●●●●" onChange={handleConfirmPassword} />{" "}
                    <button type="button" className="mx-2 text-gray-700" onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div> */
