"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ProjectStack {
  key: number;
  project: string;
  src: string;
  codeurl: string;
  siteurl: string;
  tech: string;
  description: string;
}

function Projects() {
  function ProjectTiles({
    project,
    src,
    tech,
    description,
    codeurl,
    siteurl,
  }: ProjectStack) {
    return (
      <div className="border-2 border-white border-solid h-[400px] relative flex justify-center items-center overflow-hidden">
        <img className="w-[100%] opacity-50" src={src} alt={project} />
        {/* Hover overlay */}
        <div className="absolute flex flex-col m-4">
          <h3 className="text-lg font-bold mb-2">{project}</h3>
          <p className="text-md font-semibold mb-2">{tech}</p>
          <p className="text-sm mb-4">{description}</p>
          <Link href={codeurl}>View the code</Link>
          <Link href={siteurl}>Visit site</Link>
        </div>
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
    <div id="projects" className="outline">
      <h2 className="text-5xl mt-10">My Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectFiles.map((project: any) => (
          <ProjectTiles
            key={project.id}
            project={project.project}
            src={project.src}
            codeurl={project.codeurl}
            siteurl={project.siteurl}
            tech={project.tech}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
