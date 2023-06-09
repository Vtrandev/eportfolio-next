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
    <div className="flex flex-col my-[200px] mx-[60px]">
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
          <h1 className="text-8xl orange font-bold">I'm Vuong.</h1>
          <h2 className="text-2xl font-bold mt-2">
            Frontend Developer / Frontend Software Engineer
          </h2>
          <div className="w-[50%]">
            <p className="text-lg">
              I'm a <span className="orange">Frontend Developer</span> Frontend
              Developer with a strong passion for building web applications with
              great user experiences.
            </p>
            <p>
              Here's a bit more <span className="orange">about me.</span>
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/vuong-tran-ca"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Vtrandev"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="./assets/Resume.pdf"
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
