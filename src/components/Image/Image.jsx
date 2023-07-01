import React from "react";

function Image({ source, imgName }) {
  return (
    <>
      <img src={source} alt={imgName} className="mb-2 shadow-lg sm:h-full" />
    </>
  );
}

export default Image;
