"use client";

import Skeleton from "@/components/skeleton";
import React, { useEffect, useState } from "react";

function Landing() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // }, []);

  return (
    <div className="h-[700px] flex flex-col justify-center px-[16%]">
      {loading ? (
        <>
          <div>
            <Skeleton width={"60%"} height={96} rounded="10px" />
          </div>

          <div>
            <Skeleton width={"50%"} height={32} rounded="8px" />
          </div>
          <div>
            <Skeleton width={"80%"} height={80} rounded="8px" />
          </div>
          <div>
            <Skeleton width={"40%"} height={50} rounded="8px" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Hi! My name is
          </h1>
          <h1 className="text-4xl md:text-6xl orange font-bold mb-6">
            Vuong Tran
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">
            Frontend Software Engineer
          </h2>
          <div>
            <p className="text-md md:text-lg text-white mb-2">
              Motivated, driven, well-organized, life-long learner and{" "}
              <span className="orange">love</span> problem solving.
            </p>
            <p className="text-md md:text-lg text-white mb-4">
              Interested in the entire Frontend with backend experiences and
              working on ambitious projects through collaboration.
            </p>
          </div>
          <p className="text-md text-white">View more about me here</p>
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/vuong-tran-ca" target="_blank">
              <span className="link">LinkedIn</span>
            </a>
            <a href="https://github.com/Vtrandev" target="_blank">
              <span className="link">GitHub</span>
            </a>
            <a
              href="https://drive.google.com/file/d/173WDjRDoyn_ahqr383_wVCrgsi2Wxm3H/view"
              target="_blank"
            >
              <span className="link">Resume</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Landing;
