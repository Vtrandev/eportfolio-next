import React from "react";

function About() {
  return (
    <div id="about" className="text-white outline flex">
      <div className="w-[50%]">
        <h1 className="text-5xl">About Me</h1>
        <p className="mb-4">
          I'm a highly motivated, self-taught Frontend Software Engineer strong
          passion for building awesome designed web applications with great user
          experiences.
        </p>

        <p>
          Solving problems and learning everyday to improve my skillset. (That
          overwhelming satisfaction when you figure out how to fix a bug or a
          problem!)
        </p>
      </div>

      <figure className="w-[50%] flex justify-center items-center outline">
        <p>Image</p>
      </figure>
    </div>
  );
}

export default About;
