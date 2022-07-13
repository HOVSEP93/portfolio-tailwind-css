import React from "react";

const Newsletter = () => {
  return (
    <div id="contact" className="w-full py-16  px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="title">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex md:flex-col  xl:flex-row items-center justify-between w-full">
            <input
              type="text"
              placeholder="Email address"
              class="input input-bordered input-primary flex  w-full max-w-xs"
            />
            <button class="btn btn-primary ml-1">Notify Me</button>
          </div>
          <p className="mt-5">
            We care bout the protection of your data. Read our{" "}
            <span className="text-primary">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
