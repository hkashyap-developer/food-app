import React from "react";
import * as demo from "@/sanity/lib/demo";
import PortableText from "@/components/custom/footer/portable-text";
import { Button } from "@/components/ui/button";

type ButtonType = {
  label?: string;
  url?: string;
  style?: string;
  newTab?: boolean;
};

const Ctabanner = (props: {
  title?: string | null;
  description?: any;
  button?: ButtonType;
}) => {
  const title = props.title || demo.title;
  const description = props.description || demo.description;
  const button = props.button;

  return (
    <div className="bg-gray-100 flex flex-col justify-center min-h-80 container mx-auto px-4 text-center sm:mb-20">
      {/* Title */}
      {title && (
        <h2 className="text-pretty mt-5 mb-4 text-lg lg:text-2xl font-semibold">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <div className="mb-8">
          <PortableText className="prose-lg mx-auto" value={description} />
        </div>
      )}

      {/* CTA Button */}
      {button?.label && (
        <a
          href={button.url}
          target={button.newTab ? "_blank" : "_self"}
          rel={button.newTab ? "noopener noreferrer" : undefined}
          className={`max-w-min mx-auto inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 `}
        >
          <Button variant="outline">{button.label}</Button>
        </a>
      )}
    </div>
  );
};

export default Ctabanner;
