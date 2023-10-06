"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Burgermenu = () => {
  const [flexClass, setFlexClass] = useState(false);

  function activeMenu() {
    setFlexClass(true);
  }
  function inactiveMenu() {
    setFlexClass(false);
  }

  return (
    <>
      <div className="block mr-5 sm:hidden">
        <button onClick={() => activeMenu()}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`absolute flex-col items-center top-0 left-0 right-0 bottom-0 bg-[#131313] z-10 animate-fade-left
        animate-duration-700
        ${flexClass ? "flex" : "hidden "}`}
      >
        <button onClick={() => inactiveMenu()}>
          <XMarkIcon className="absolute top-5 right-5 h-8 w-8" />
        </button>

        <ul className="flex flex-col space-y-6 mt-8 justify-center text-center">
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
