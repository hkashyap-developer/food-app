import React from "react";

function ClipPathImage() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-another5" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.0351351C0 0.0157306 0.0174609 0 0.039 0H0.5H0.727414C0.741798 0 0.755513 0.00547207 0.765179 0.0150678L0.858 0.107207L0.98622 0.236143C0.995093 0.245066 1 0.256625 1 0.268605V0.5V0.964865C1 0.984269 0.982539 1 0.961 1H0.039C0.0174609 1 0 0.984269 0 0.964865V0.0351351Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path applied */}
      <figure style={{ clipPath: "url(#clip-another5)" }} className="">
        <img
          src="test3.jpg"
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
    </>
  );
}

export default ClipPathImage;
