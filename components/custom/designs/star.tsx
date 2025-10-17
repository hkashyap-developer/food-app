import React from "react";

function ClipPathImage() {
  return (
    <>
      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone14" clipPathUnits="objectBoundingBox">
            <path
              d="M1 0.4375H0.733333L0.964375 0.304167L0.901875 0.195833L0.670833 0.329167L0.804167 0.0983333L0.695833 0.0358333L0.5625 0.266667V0H0.4375V0.266667L0.304167 0.0358333L0.195833 0.0983333L0.329167 0.329167L0.0983333 0.195833L0.0358333 0.304167L0.266667 0.4375H0V0.5625H0.266667L0.0358333 0.695833L0.0983333 0.804167L0.329167 0.670833L0.195833 0.901875L0.304167 0.964375L0.4375 0.733333V1H0.5625V0.733333L0.695833 0.964375L0.804167 0.901875L0.670833 0.670833L0.901875 0.804167L0.964375 0.695833L0.733333 0.5625H1V0.4375Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path applied */}
      <figure
        style={{ clipPath: "url(#differentone14)" }}
        className="w-full h-full"
      >
        <img
          src="/test.png"
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
    </>
  );
}

export default ClipPathImage;
