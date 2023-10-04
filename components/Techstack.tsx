"use client";

import React, { useEffect, useState } from "react";

interface dataStack {
  id: number; language: string;
}

function Techstack() {
  function TechTiles({ image }: { image: string }) {
    return (
      <div className="border-2 border-white border-solid h-[100px] flex justify-center items-center">
        {image}
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
    <div id="techstack">
      <h1 className="text-5xl">My Tech Stack</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
        {techStack.map((tech: any) => (
          <TechTiles key={tech.id} image={tech.language} />
        ))}
      </div>
    </div>
  );
}

export default Techstack;
