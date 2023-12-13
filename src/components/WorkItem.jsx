import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol>
      <li>
        <div />
        <p>
          <span>{year}</span>
          <span>{title}</span>
          <span>{duration}</span>
        </p>
        <p>{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
