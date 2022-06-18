import React from "react";
import HeaderLayout from "../components/HeaderLayout/HeaderLayout";

export default function Layout({ Component }) {
  return (
    <div>
      <HeaderLayout />
      <Component />
    </div>
  );
}
