import React from "react";

function Projects() {
  function ProjectTiles({ image }: { image: string }) {
    return (
      <div className="border-2 border-white border-solid h-[300px] flex justify-center items-center">
        {image}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl">My Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectTiles image="Project 1" />
        <ProjectTiles image="Project 2" />
        <ProjectTiles image="Project 3" />
        <ProjectTiles image="Project 4" />
      </div>
    </div>
  );
}

export default Projects;
