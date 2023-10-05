import React from "react";
import LogoImg from "../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div
      id="footer"
      className="text-white flex flex-col items-center p-10 bg-[#252525]"
    >
      <figure>
        <Image
          src={LogoImg}
          width={60}
          height={30}
          alt="logo"
          className="invert pb-5"
        />
      </figure>
      <div className="grid grid-cols-4 gap-10">
        <Link href="https://github.com/Vtrandev" target="_blank">
          <p className="text-center border">Github</p>
        </Link>
        <Link href="https://www.linkedin.com/in/vuong-tran-ca/" target="_blank">
          <p className="text-center border">LinkedIn</p>
        </Link>
        <Link href="#contact">
          <p className="text-center border">Contact</p>
        </Link>
        <Link
          href="https://drive.google.com/file/d/173WDjRDoyn_ahqr383_wVCrgsi2Wxm3H/view"
          target="_blank"
        >
          <p className="text-center border">Resume</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
