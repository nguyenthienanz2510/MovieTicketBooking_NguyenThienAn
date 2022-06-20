import React from "react";
import FooterLayout from "../components/FooterLayout/FooterLayout";
import HeaderLayout from "../components/HeaderLayout/HeaderLayout";

export default function Layout({ Component }) {
  return (
    <div className="min-h-screen bg-color-background">
      <HeaderLayout />
      <Component />
      <FooterLayout />
    </div>
  );
}
