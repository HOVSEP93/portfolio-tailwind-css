import React, { Fragment } from "react";

import One from "../assets/one.jpg";
import Two from "../assets/two.jpg";
import Three from "../assets/three.jpg";

const Service = () => {
  return (
    <Fragment>
      {/* <!-- works --> */}
      <div id="service" className="py-40 bg-base-content ">
        <div className="container mx-auto">
          {/* <!-- top --> */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="font-bold text-center mb-20 text-4xl text-secondary-focus">
              PORTFOLIO
            </h1>
            <h1 className="text-3xl text-black font-bold mb-10 ">
              Works & Projects
            </h1>
            <p className=" text-center text-black text-xl italic">
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee, I turn your
              requirements into a well-designed websites
            </p>
          </div>
          {/* <!-- bottom md:w-5/12 lg:w-1/5 --> */}
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={One} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Two} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Three} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={One} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Two} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Three} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5  shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={One} alt="portfolio-img" />
            </div>
            {/* <!-- card --> */}
            <div className="w-full lg:w-2/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Three} alt="portfolio-img" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Service;
