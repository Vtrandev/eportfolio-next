"use client"
import React from "react";

const Background = () => {

    const [isCardMoving, setIsCardMoving] = React.useState(false);

    React.useEffect(() => {
        if (isCardMoving) window.addEventListener("mousemove", handleCardMove);
        return () => window.removeEventListener("mousemove", handleCardMove);
    }, [isCardMoving]);
  
    const handleCardMove = (event : any) => console.log({ x: event.offsetX, y: event.offsetY });

    
  // const circle = document.getElementsByClassName("home-hero-glow");

  // const onMouseMove = (e) => {
  //   // Calculate the center coordinates of the circle
  //   let centerX = e.pageX - circle?.offsetWidth / 2;
  //   let centerY = e.pageY - circle?.offsetHeight / 2;

  //   // circle?.style.left = centerX + "px";
  //   // circle?.style.top = centerY + "px";
  // };

  // document.addEventListener("mousemove", onMouseMove);

  return (
    <>
      <div
        className="-z-30 absolute w-[300px] h-[300px] top-[80px] left-[300px] bg-white rounded-full
      opacity-5 blur-3xl"
      ></div>
        <div className="-z-40 fixed top-0 left-0 w-full h-full bg-[#131313]"></div>
      <div className="fixed top-0 left-0 w-full h-full background -z-20"></div>
    </>
  );
};

export default Background;
