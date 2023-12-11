import React, { useState } from "react";
// Importing icons from react-icon packages
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson, BsMailboxFlag } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

// Array representing the nav items
const navItems = [
  { icon: <AiOutlineHome size={20} />, label: "Home", href: "#home" },
  { icon: <GrProjects size={20} />, label: "Work", href: "#work" },
  {
    icon: <AiOutlineProject size={20} />,
    label: "Projects",
    href: "#projects",
  },
  { icon: <BsPerson size={20} />, label: "Resume", href: "#resume" },
  { icon: <BsMailboxFlag size={20} />, label: "Contact", href: "#contact" },
];

// Common styles for each link
const mobileLinkStyle =
  "w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-400";

const desktopLinkStyle =
  "rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300";

// Function to generate nav links dynamically
const generateNavLinks = (showLabels, isMobile) => {
  const linkStyle = isMobile ? mobileLinkStyle : desktopLinkStyle; // Use ternary op to get the correct style based on isMobile parameter

  // Map through each navigation item and create a link
  return navItems.map((menuItem, menuPosition) => (
    <a key={menuPosition} href={menuItem.href} className={linkStyle}>
      {/* Display the icon associated with the navigation item */}
      {menuItem.icon}
      {/* Conditionally display the label if showLabels is true */}
      {showLabels && <span className="pl-4">{menuItem.label}</span>}
    </a>
  ));
};

// Functional component for the SideNav
const SideNav = () => {
  const [nav, setNav] = useState(false); // State to manage the nav visibility

  // Function to handle toggling the nav state
  const handleNav = () => {
    setNav(!nav); // Toggle the nav state
    console.log("State Changed"); // Log a message when the state changes
  };

  return (
    <div>
      {/* Hamburger menu icon to trigger nav links */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {/* Render the nav links if the nav state is true */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          {/* Generate and display mobile nav links with labels */}
          {generateNavLinks(true, true)}
        </div>
      )}

      {/* Desktop version of the nav */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {/* Generate and display desktop nav links without labels */}
          {generateNavLinks(false, false)}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
