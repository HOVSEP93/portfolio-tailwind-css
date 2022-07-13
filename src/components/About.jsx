import React from "react";
import Portrait from "../assets/portrait.png";

const About = () => {
  return (
    <div id="about">
      <div class="px-10 ">
        <h1 class="font-bold text-center mt-10 md:mt-20 text-4xl">ABOUT ME</h1>
        <div class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* <!-- left --> */}
          <div class="relative">
            <div class="h-full rounded-full overflow-hidden ">
              <img src={Portrait} alt="my-pic" />
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="my-auto flex flex-col gap-3">
            <h1 class="text-3xl font-medium  text-primary">Better Design</h1>
            <h1 class="text-3xl font-medium  text-primary">
              Better Experience
            </h1>
            <p class="text-lg italic">
              I design and build digital products. I'm also a multi-disciplinary
              maker with over 10 years of experiences in wide range of design
              disciplines.
            </p>
            <h2 class="text-primary font-medium">HTML</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-primary font-medium">Javascript</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-primary font-medium">React</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
