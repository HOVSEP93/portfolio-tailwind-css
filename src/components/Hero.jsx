import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="w-full max-w-[800px] mt-[-96px] h-screen mx-auto flex flex-col justify-center text-center">
        <p className="title uppercase">Hovsep Stepanian</p>
        <h1 className="text-4xl md:text-5xl m-2 uppercase">
          {" "}
          front-end developer
        </h1>

        <div className="flex justify-center items-center'">
          <p className=" flex sm:text-4xl md:text-5xl text-xl py-4">
            Freelances
            <span className="pl-2 text-secondary">
              <Typewriter
                options={{
                  strings: ["Developer", "Designer", "Content Creator"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>

        <button className="main-button">Contact Me</button>
      </div>
    </div>
  );
};

export default Hero;
