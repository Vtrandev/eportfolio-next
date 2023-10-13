import React from "react";
import Image from "next/image";
import LogoImg from "../public/Logo.png";
import Burgermenu from "./Burgermenu";

function Navbar() {

  return (
    <div className="flex fixed left-0 right-0 z-10 items-center justify-between h-[80px] mx-[20px] text-white">
      <figure>
        <Image
          src={LogoImg}
          width={60}
          height={30}
          alt="logo"
          className="invert"
        />
      </figure>

      <ul className="hidden sm:flex space-x-10">
        <li className="nav__link">
          <a
            href="#"
            className="font-bold text-lg link__hover-effect link__hover-effect--white"
          >
            About
          </a>
        </li>

        <li className="font-bold text-lg link__hover-effect link__hover-effect--white">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav__link">
          <a
            href="#contact"
            className="mr-4 font-bold text-lg outline py-2 px-4 rounded-md link"
          >
            Contact
          </a>
        </li>
      </ul>
      <Burgermenu />
    </div>
  );
}

export default Navbar;
