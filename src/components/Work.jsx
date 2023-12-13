import React from "react";
import WorkItem from "./WorkItem";

// Array of objects
const data = [
  {
    year: 2020,
    title: "Example 1",
    duration: "3+ Years (Ongoing)",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel placerat mi. Praesent vulputate finibus est, non auctor tortor finibus quis. Sed posuere sit amet sapien at mattis. Nunc nisi libero, congue eu nunc auctor, mollis blandit metus. Ut at lectus porta, finibus leo congue, finibus enim. In sed tincidunt urna. Morbi lectus erat, dignissim id efficitur non, sagittis nec lectus. Sed molestie lectus malesuada.",
  },
  {
    year: 2017,
    title: "Sample 2",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sollicitudin tellus. Sed gravida metus et dui blandit, sit amet varius velit vehicula. Vestibulum aliquam elit quam, sollicitudin iaculis ipsum vulputate id. Nunc et mi elit. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
  },
  {
    year: 2013,
    title: "Tibit 3",
    duration: "4 Years",
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
