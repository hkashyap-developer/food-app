import React from "react";
import * as demo from "@/sanity/lib/demo";
import PortableText from "@/components/custom/footer/portable-text";
import { Button } from "@/components/ui/button";
import CoverImage from "@/app/(blog)/cover-image";

type ButtonType = {
  label?: string;
  link?: string;
};

const Ctabanner = (props: {
  title?: string | null;
  description?: any;
  buttonOne?: any;
  buttonTwo?: any;
  image: string;
}) => {
  const title = props.title || demo.title;
  const description = props.description || demo.description;
  const buttonOne = props.buttonOne;
  const buttonTwo = props.buttonTwo;
  const image = props.image || demo.description;

  return (
    <section className="w-full bg-background py-8 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
              {description}- {buttonOne.label}- {buttonOne.link}-{" "}
              {buttonTwo.label}- {buttonTwo.link}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ctabanner;
