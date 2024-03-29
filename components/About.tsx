import React from "react";

function About() {
  return (
    <div
      id="about"
      className="text-white flex flex-col items-center md:flex-row h-[600px] mt-10"
    >
      <div className="w-full md:w-[50%] p-5 flex flex-col justify-center">
        <h2 className="headings">
          About <span className="orange">Me</span>
        </h2>
        <p className="mb-4">
          I'm a highly motivated, self-taught{" "}
          <span className="orange">Frontend Software Engineer</span> with a
          strong passion for building awesome designed web applications with
          great user experiences.
        </p>

        <p>
          Solving problems and learning everyday to improve my skillset.{" "}
          <span className="text-sm">
            (That overwhelming satisfaction when you figure out how to fix a bug
            or a problem!)
          </span>
        </p>
      </div>

      <figure className="relative h-full w-[70%] md:w-[50%] flex justify-center items-center overflow-hidden">
        <img
          className="absolute p-10 md:p-[10%] rounded-[50%] -z-10"
          src="./assets/VonTran124.jpg"
          alt="personal photo"
        />
        <img
          className="absolute p-10 md:p-[10%] rounded-[50%] z-[0] hover:opacity-0"
          src="./assets/VonTran123.jpg"
          alt="personal photo"
        />
      </figure>
    </div>
  );
}

export default About;
