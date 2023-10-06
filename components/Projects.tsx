"use client";
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
      <div className="border-2 drop-shadow-md h-[400px] relative flex justify-center items-center overflow-hidden rounded-lg group">
        <img
          className="h-[100%] object-cover group-hover:opacity-20 group-hover:blur-sm"
          src={src}
          alt={project}
        />

        {/* Hover overlay */}
        <div className="absolute z-10 opacity-0 w-full h-full group-hover:bg-black group-hover:opacity-40"></div>
        <div className="absolute z-20 flex-col m-4 flex opacity-0 transition-all duration-800 group-hover:opacity-100">
          <h3 className="text-lg font-bold mb-2">{project}</h3>
          <p className="text-md font-semibold mb-2">{tech}</p>
          <p className="text-sm mb-4">{description}</p>
          <p className="link">
            <a href={codeurl}>View the code</a>
          </p>
          <p className="link">
            <a href={siteurl}>Visit site</a>
          </p>
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
    <div id="projects">
      <h2 className="text-5xl font-semibold mt-20 mb-10">
        My <span className="orange">Projects</span>
      </h2>
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
