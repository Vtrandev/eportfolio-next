"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Background = () => {
  const [location, setLocation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setLocation({ x: event.clientX - 125, y: event.clientY - 125 });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div>
      <div
        style={{ top: location.y, left: location.x }}
        className={`-z-30 fixed w-[250px] h-[250px] circle bg-white rounded-full
      opacity-10 blur-3xl`}
      ></div>
      <div className="-z-40 fixed top-0 left-0 w-full h-full bg-[#131313]"></div>
      <div className="fixed top-0 left-0 w-full h-full background -z-20"></div>

      <figure className="fixed z-10 w-10 h-10 bottom-14 left-10">
        <a href="https://github.com/Vtrandev" target="_blank">
          <img
            className="w-full"
            src="/assets/github-mark-white.svg"
            alt="Github"
          />
        </a>
      </figure>

      <span className="fixed z-10 bottom-12 right-10 text-white group">
        <a href="#">
          Back to Top{" "}
          <ChevronDoubleUpIcon className="w-5 inline-block group-hover:animate-[bounce_1s_linear_infinite]" />
        </a>
      </span>
    </div>
  );
};

export default Background;
