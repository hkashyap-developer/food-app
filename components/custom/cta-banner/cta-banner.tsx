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
  buttonOne?: ButtonType;
  buttonTwo?: ButtonType;
}) => {
  const title = props.title || demo.title;
  const description = props.description || demo.description;
  const buttonOne = props.buttonOne;
  const buttonTwo = props.buttonOne;

  return (
    <div className="bg-gray-100 flex flex-col justify-center min-h-[600px] container mx-auto px-8 text-left sm:mb-20 rounded-xl">
      {/* Title */}
      {title && (
        <h2 className="text-pretty mt-5 mb-4 text-lg lg:text-4xl font-semibold">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <div className="mb-8">
          <PortableText className="prose-lg " value={description} />
        </div>
      )}

      {/* CTA Button */}
      {buttonOne?.label && (
        <a
          href={buttonOne.url}
          target={buttonOne.newTab ? "_blank" : "_self"}
          rel={buttonOne.newTab ? "noopener noreferrer" : undefined}
          className={`max-w-min inline-block py-3 rounded-lg font-semibold transition-all duration-200 `}
        >
          <Button variant="outline">{buttonOne.label}</Button>
        </a>
      )}
    </div>
  );
};

export default Ctabanner;
