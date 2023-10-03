import React from "react";

function Techstack() {
  function TechTiles({ image }: { image: string }) {
    return (
      <div className="border-2 border-white border-solid h-[100px] flex justify-center items-center">
        {image}
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl">My Tech Stack</h1>
      <div className="grid grid-cols-4 xl:grid-cols-8 gap-4">
        <TechTiles image="HTML" />
        <TechTiles image="CSS" />
        <TechTiles image="JavaScript" />
        <TechTiles image="TypeScript" />
        <TechTiles image="React" />
        <TechTiles image="Next" />
        <TechTiles image="Firebase" />
        <TechTiles image="Redux" />
      </div>
    </div>
  );
}

export default Techstack;
