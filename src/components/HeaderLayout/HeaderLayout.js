import React from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import UserNav from "./UserNav";
import { Link } from "react-scroll";

export default function HeaderLayout() {
  return (
    <div className="h-20 w-full flex items-center justify-between shadow-lg fixed top-0 left-0 z-50 bg-black">
      <NavLink to={"/"}>
        <div className="flex">
          <img width={60} src="/germany_film.png" alt="logo" className="mx-3" />
          <span className="h-16 flex items-center text-xl font-medium hover:text-primary">
            Movie Tickets
          </span>
        </div>
      </NavLink>

      <div className="space-x-5 text-base hidden md:block">
        <Link
          activeClass="active"
          className="test1"
          to="MovieCarousel"
          spy={true}
          smooth={true}
          duration={500}
        >
          <a className="hover:text-primary">Lịch chiếu</a>
        </Link>
        <Link
          activeClass="active"
          className="test1"
          to="MovieTabs"
          spy={true}
          smooth={true}
          duration={500}
        >
          <a className="hover:text-primary">Cụm rạp</a>
        </Link>
      </div>
      <MobileMenu />
      <div style={{ minWidth: 200 }} className="hidden md:flex md:justify-end">
        <UserNav />
      </div>
    </div>
  );
}
