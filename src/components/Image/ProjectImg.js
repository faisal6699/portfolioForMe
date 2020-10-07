import React from "react";
import pic from "./20578.jpg";

const ProjectImg = ({ source,alt }) => {
  console.log(source)
  return (
    <img
      src={source}
      className=""
      alt={alt}
      style={{ width: '100%', borderRadius: '2%'}}
    />
  );
};

export default ProjectImg;
