import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="container mx-auto flex flex-col items-center w-fit justify-center gap-3 p-6 mt-16 lg:mt-24
     shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ">
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p className="text-sm">Email</p>
        <input
          type="text"
          className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
          placeholder=" Email"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p lassName="text-sm">Password</p>
        <input
          type="text"
          className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
          placeholder=" Password"
        />
      </div>
      <div className="flex items-center gap-24 text-blue-600 text-sm my-4">
        <Link href={'/'}>Forgot Password</Link>
        <Link href={'/register'}>sign up</Link>

      </div>
      <p className="bg-blue-600 px-3 py-1 rounded-lg text-white">Login</p>
    </div>
  );
};

export default LoginForm;
