"use client";

import React, { useEffect, useState } from "react";

interface dataStack {
  key: number;
  language: string;
  src: string;
}

function Techstack() {
  function TechTiles({ language, src }: dataStack) {
    return (
      <div className="relative h-[100px] flex justify-center items-center group">
        <img
          src={src}
          alt={`${language}`}
          className="h-full duration-300 group-hover:scale-75
        group-hover:brightness-75"
        />
        <p
          className="absolute -bottom-8
          scale-0
          duration-300
          group-hover:scale-100
          "
        >
          {language}
        </p>
      </div>
    );
  }

  const [techStack, setTechStack] = useState<any>([]);

  useEffect(() => {
    const callAPI = async () => {
      const res: any = await fetch("/api/tech");
      const { data }: any = await res.json();
      setTechStack(data);
    };

    callAPI();
  }, []);

  return (
    <div
      id="techstack"
      className="md:h-[700px] flex flex-col justify-center mt-20"
    >
      <h2 className="headings">
        My Tech <span className="orange">Stack</span>
      </h2>
      <p className="w-[100%] md:w-[70%] font-medium mb-5">
        My main area of expertise is front end development (client side of the web) but also have backend experience.
        <br />
        <br />
        HTML, CSS, & JS, building small and medium web applications with React or Next, custom plugins, features, animations, and coding responsive and interactive layouts.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-8 xl:gap-4">
        {techStack.map((tech: any) => (
          <TechTiles key={tech.id} language={tech.language} src={tech.src} />
        ))}
      </div>
    </div>
  );
}

export default Techstack;
