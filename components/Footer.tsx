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
        <a href="#"><Image
          src={LogoImg}
          width={60}
          height={30}
          alt="logo"
          className="invert pb-5"
        /></a>
      </figure>
      <div className="flex space-x-8">
        <Link href="https://github.com/Vtrandev" target="_blank">
          <p className="link__hover-effect link__hover-effect--white">
            Github
          </p>
        </Link>
        <Link href="https://www.linkedin.com/in/vuong-tran-ca/" target="_blank">
          <p className="link__hover-effect link__hover-effect--white">
            LinkedIn
          </p>
        </Link>
        <Link href="#contact">
          <p className="link__hover-effect link__hover-effect--white">
            Contact
          </p>
        </Link>
        <Link
          href="https://drive.google.com/file/d/173WDjRDoyn_ahqr383_wVCrgsi2Wxm3H/view"
          target="_blank"
        >
          <p className="link__hover-effect link__hover-effect--white">
            Resume
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
