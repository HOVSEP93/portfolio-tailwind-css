import React, { Fragment } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiScorpionTail } from "react-icons/gi";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };
  return (
    <Fragment>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
        <div className="w-full   text-primary flex items-center hover:text-secondary-focus cursor-pointer">
          <GiScorpionTail size={40} />
          <h1 className="uppercase  font-bold text-3xl  mt-4 ml-2">scorpion</h1>
        </div>
        <ul className="hidden md:flex uppercase text-primary ">
          <li className="p-4 hover:text-secondary-focus cursor-pointer ">
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              home
            </Link>
          </li>
          <li className="p-4 hover:text-secondary-focus cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              about
            </Link>
          </li>

          <li className="p-4 hover:text-secondary-focus cursor-pointer">
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              service
            </Link>
          </li>
          <li className="p-4 hover:text-secondary-focus cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              contact
            </Link>
          </li>
          <li className="p-4 hover:text-secondary-focus cursor-pointer">
            <Link
              to="offer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              offer
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className=" block md:hidden  cursor-pointer ">
          {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </div>
        <div>
          <ul
            className={
              nav
                ? "fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0f1729] ease-in-out duration-500 z-10"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="w-full justify-center  text-primary flex items-center hover:text-secondary-focus cursor-pointer">
              <GiScorpionTail size={30} />
              <h1 className="uppercase  font-bold text-xl md:text-2xl  mt-4 ml-2">
                scorpion
              </h1>
            </div>
            <li className="p-4 border-b border-b-secondary hover:text-secondary-focus cursor-pointer text-primary">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClose}
              >
                home
              </Link>
            </li>
            <li className="p-4 border-b border-b-secondary hover:text-secondary-focus cursor-pointer text-primary">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClose}
              >
                about
              </Link>
            </li>
            <li className="p-4 border-b border-b-secondary hover:text-secondary-focus cursor-pointer text-primary">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClose}
              >
                service
              </Link>
            </li>
            <li className="p-4 border-b border-b-secondary hover:text-secondary-focus cursor-pointer text-primary">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClose}
              >
                contact
              </Link>
            </li>
            <li className="p-4 hover:text-secondary-focus cursor-pointer text-primary">
              <Link
                to="offer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClose}
              >
                offer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
