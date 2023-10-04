"use client";
import React, { useEffect, useState } from "react";

function Projects() {
  function ProjectTiles({ text }: { text: string }) {
    return (
      <div className="border-2 border-white border-solid h-[300px] flex justify-center items-center">
        {text}
      </div>
    );
  }

  const [projectFiles, setProjectFiles] = useState<any>([]);

  useEffect(() => {
    const callAPI = async () => {
      const res: any = await fetch("/api/myproject");
      const { data }: any = await res.json();
      setProjectFiles(data);
    };

    callAPI();
  }, []);

  return (
    <div id="projects">
      <h1 className="text-5xl">My Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectFiles.map((project: any) => (
          <ProjectTiles key={project.id} text={project.project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
