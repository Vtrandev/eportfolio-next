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
      <div className="relative border-2 border-white border-solid h-[100px] flex justify-center items-center group">
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
    <div id="techstack" className="h-[80vh] flex flex-col justify-center outline">
      <h1 className="text-5xl mb-10 font-semibold">
        My Tech <span className="orange">Stack</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-8 xl:gap-4">
        {techStack.map((tech: any) => (
          <TechTiles key={tech.id} language={tech.language} src={tech.src} />
        ))}
      </div>
    </div>
  );
}

export default Techstack;
