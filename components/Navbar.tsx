import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../public/Logo.png";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 flex items-center justify-between h-[80px] mx-[20px] text-white">
      <figure>
        <Image src={LogoImg} width={60} height={30} alt="logo"
        className="invert" />
      </figure>

      <ul className="flex">
        <li className="nav__link">
          <a
            href="#"
            className="mx-5 font-bold text-lg link__hover-effect link__hover-effect--white"
          >
            About
          </a>
        </li>

        <li className="mx-5 font-bold text-lg link__hover-effect link__hover-effect--white">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav__link">
          <a
            href="#contact"
            className="mx-5 font-bold text-lg outline py-2 px-4 rounded-md link"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
