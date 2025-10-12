import React from "react";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import PortableText from "./portable-text";
const footer = () => {
  const footer = data?.footer || [];
  return (
    <div>
      {" "}
      <footer className="bg-accent-1 border-accent-2 border-t">
        <div className="container mx-auto px-5">
          {footer.length > 0 ? (
            <PortableText
              className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
              value={footer as PortableTextBlock[]}
            />
          ) : (
            <div className="flex flex-col items-center py-28 lg:flex-row">
              <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                MarketVisit
              </h3>
              <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4 gap-12">
                <a
                  href="https://mediaxinfinity.com"
                  className="mx-3 text-[12px] hover:underline"
                >
                  Powered by Media X Infinity
                </a>
                <a
                  href="https://atmnc.in"
                  className="mx-3 text-[12px] hover:underline"
                >
                  Backed buy: ATMNC
                </a>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default footer;
