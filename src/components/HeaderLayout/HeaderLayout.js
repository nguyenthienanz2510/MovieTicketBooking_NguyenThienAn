import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderLayout() {
  return (
    <div className="h-20 w-full flex items-center justify-between shadow-lg fixed z-50 bg-black">
      <NavLink to={"/"}>
        <div className="flex">
          <img
            width={60}
            src="./germany_film.png"
            alt="logo"
            className="mx-3"
          />
          <span className="h-16 flex items-center text-xl font-medium hover:text-primary">
            Movie Tickets
          </span>
        </div>
      </NavLink>

      <div className="space-x-5 text-base">
        <a className="hover:text-primary">Tin tức</a>
        <a className="hover:text-primary">Cụm rạp</a>
        <a className="hover:text-primary">Lịch chiếu</a>
      </div>
      <UserNav />
    </div>
  );
}
