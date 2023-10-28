"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Burgermenu = () => {
  const [flexClass, setFlexClass] = useState(false);

  function activeMenu() {
    setFlexClass(true);
    document.body.style.overflow = 'hidden';
  }
  function inactiveMenu() {
    setFlexClass(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <div className="fixed top-5 right-12 z-[5] sm:hidden">
        <button onClick={() => activeMenu()}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`fixed flex-col top-0 w-[95vw] h-[100vh] bg-[#131313]
        ${flexClass ? "flex z-[6]" : "hidden"}`}
      >
        <button onClick={() => inactiveMenu()}>
          <XMarkIcon className="absolute top-5 right-14 h-8 w-8" />
        </button>

        <ul className="flex flex-col space-y-8 mt-8 items-center">
          <li className="nav__link"
          onClick={() => inactiveMenu()}>
            <a
              href="#"
              className="font-bold text-lg link__hover-effect link__hover-effect--white"
            >
              About
            </a>
          </li>

          <li className="font-bold text-lg link__hover-effect link__hover-effect--white"
          onClick={() => inactiveMenu()}>
            <a href="#projects">Projects</a>
          </li>

          <li
          onClick={() => inactiveMenu()}>
            <a
              href="#contact"
              className="font-bold text-lg outline py-2 px-4 rounded-md link"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Burgermenu;
