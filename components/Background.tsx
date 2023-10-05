"use client";
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
    </div>
  );
};

export default Background;
