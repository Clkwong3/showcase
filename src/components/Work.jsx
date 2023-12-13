import React from "react";
import WorkItem from "./WorkItem";

// Array of objects
const data = [
  {
    year: 2023,
    title: "Example 1",
    duration: "5+ Years (Ongoing)",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in leo pellentesque diam aliquam rutrum non vitae lorem. Maecenas dapibus nibh ac ipsum mollis imperdiet.",
  },
  {
    year: 2020,
    title: "Sample 2",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna diam, lobortis quis luctus non, egestas sed dui. Maecenas libero libero, suscipit sed blandit vitae, rhoncus cursus ligula. Pellentesque habitant morbi tristique senectus et netus.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((workExperience, index) => (
        <WorkItem
          key={index}
          year={workExperience.year}
          title={workExperience.title}
          duration={workExperience.duration}
          details={workExperience.details}
        />
      ))}
    </div>
  );
};

export default Work;
