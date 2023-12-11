import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson, BsMailboxFlag } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

// Building out the mobile navigation first
const SideNav = () => {
  const [nav, setNav] = useState(false); // Default value: false
  // Change the state of the navbar
  const handleNav = () => {
    setNav(!nav); // Set the nav to the opposite of its current value
    console.log("State Changed");
  };

  return (
    <div>
      {/* onClick = Run the handleNav function that will toggle the state back and forth */}
      {/* md = media query */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {/* Using ternary operator to show nav links, otherwise show nothing */}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400"
          >
            <BsMailboxFlag size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideNav;
