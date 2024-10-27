import React from "react";

const Link = ({ route }) => {
  return (
    <div className="md:px-5">
      <a href="">{route.name}</a>
    </div>
  );
};

export default Link;
