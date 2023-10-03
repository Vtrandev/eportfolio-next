"use client";

import Skeleton from "@/components/skeleton";
import React, { useEffect, useState } from "react";

function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col text-left">
      {loading ? (
        <>
          <div>
            <Skeleton width={450} height={96} rounded="10px" />
          </div>

          <div>
            <Skeleton width={500} height={32} rounded="8px" />
          </div>
          <div>
            <Skeleton width={537} height={80} rounded="8px" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl orange font-bold mb-3">Hi! My name is</h1>
          <h1 className="text-8xl orange font-bold mb-6">Vuong Tran</h1>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Frontend Software Engineer
          </h2>
          <div>
            <p className="text-lg text-white">
              Driven, independent, life-long learner and <span className="orange">love</span> problem solving.
            </p>
          </div>
          <div className="flex space-x-3 text-white">
            <a href="https://www.linkedin.com/in/vuong-tran-ca" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Vtrandev" target="_blank">
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/173WDjRDoyn_ahqr383_wVCrgsi2Wxm3H/view"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Landing;
