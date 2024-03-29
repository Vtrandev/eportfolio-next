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
      <div className="border-4 h-[400px] relative flex justify-center items-center overflow-hidden rounded-lg group hover:shadow-xl hover:shadow-white/30">
        <img
          className="h-[100%] object-cover group-hover:opacity-20 group-hover:blur-sm"
          src={src}
          alt={project}
        />

        {/* Hover overlay */}
        <div className="absolute z-[1] opacity-0 w-full h-full group-hover:bg-black group-hover:opacity-40"></div>
        <div className="absolute z-[2] flex-col m-4 opacity-0 transition-all duration-800 group-hover:opacity-100">
          <h3 className="text-lg font-bold mb-2">{project}</h3>
          <p className="text-md font-semibold mb-2">{tech}</p>
          <p className="text-sm mb-4">{description}</p>
          <p>
            <a href={codeurl} className="link">
              View the code
            </a>
          </p>
          <p>
            <a href={siteurl} className="link">
              Visit site
            </a>
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
      <h2 className="headings mt-20">
        My <span className="orange">Projects</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
