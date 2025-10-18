"use client";

import React from "react";
import Image from "next/image"; // ✅ correct import
import { Button } from "@/components/ui/button";

type ButtonType = {
  label?: string;
  link?: string;
};

const Herobanner = (props: {
  title?: string | null;
  description?: any;
  buttonOne?: ButtonType;
  buttonTwo?: ButtonType;
  backgroundImage?: string;
  coverImage?: string;
}) => {
  const { title, description, buttonOne, buttonTwo, coverImage } = props;

  return (
    <section className="w-full bg-gray-50 py-0 pb-10 sm:py-16 md:py-20 border-b-1">
      <div className="container mx-auto px-0 sm:px-4 flex justify-between flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 px-4 pt-8 sm:px-0 max-w-[420px] sm:max-w-[720px]">
          {title && (
            <h1 className="text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl font-bold">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              {description}
            </p>
          )}
          <div className="flex gap-4 justify-center md:justify-start">
            {buttonOne && (
              <Button variant="default" className="">
                {buttonOne.label}
              </Button>
            )}
            {buttonTwo && (
              <Button variant="outline" className="">
                {buttonTwo.label}
              </Button>
            )}
          </div>
        </div>

        {/* Image Section */}
        {coverImage && (
          <div className="max-w-[620px] flex-1 flex justify-center md:justify-end">
            <Image
              src={coverImage}
              alt="test"
              width={800}
              height={800}
              className="rounded-xl object-cover w-full h-full"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Herobanner;
