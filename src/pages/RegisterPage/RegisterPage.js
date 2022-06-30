import React from "react";
import Lottie from "lottie-react";
import rocketjson from "../../assets/rocket.json";
import FormRegister from "./FormRegister/FormRegister";

export default function RegisterPage() {
  return (
    <div className=" w-screen h-screen bg-blue-300 flex items-center">
      <div className="flex w-full h-full">
        <div className="hidden md:w-1/2 md:flex items-center h-full">
          <Lottie animationData={rocketjson} loop={true} />
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center">
          <h2 className="mx-auto my-8 text-primary text-2xl font-bold">
            Đăng Ký tài khoản
          </h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
