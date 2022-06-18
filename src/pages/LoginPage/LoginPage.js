import React from "react";
import FormLogin from "./FormLogin/FormLogin";
import Lottie from "lottie-react";
import rocketjson from "../../assets/rocket.json";

export default function LoginPage() {
  return (
    <div className=" w-screen h-screen bg-blue-300 flex items-center">
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full">
          <Lottie animationData={rocketjson} loop={true} />
        </div>
        <div className="w-1/2 mx-auto p-5 bg-white rounded">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
