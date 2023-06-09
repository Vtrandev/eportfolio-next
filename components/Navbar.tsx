import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center justify-between h-[80px] mx-[20px]">
      <figure>
        <Image src={"/Logo.png"} width={60} height={30} alt="logo" />
      </figure>

      <ul className="flex">
        <li className="nav__link">
          <a
            href="#"
            className="mx-5 font-bold text-lg hover:underline hover:underline-offset-4"
          >
            About
          </a>
        </li>

        <li className="mx-5 font-bold text-lg hover:underline hover:underline-offset-4">
          <Link href="/projects">Projects</Link>
        </li>

        <li className="nav__link">
          <a
            href="#"
            className="mx-5 font-bold text-lg hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click">
          <a href="#" className="mx-5">
            <i className="fas fa-adjust"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
