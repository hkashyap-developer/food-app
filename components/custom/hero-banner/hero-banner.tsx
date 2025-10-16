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
  coverImage?: string;
}) => {
  const { title, description, buttonOne, buttonTwo, coverImage } = props;

  return (
    <section className="w-full bg-background py-8 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {title && <h1 className="text-3xl md:text-7xl font-bold">{title}</h1>}
          {description && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
              {description}
            </p>
          )}
        </div>

        {/* Image Section */}
        {coverImage && (
          <div className="testxx flex-1 flex justify-center md:justify-end">
            <Image
              src={coverImage}
              alt="test"
              width={800}
              height={800}
              className="rounded-none object-cover w-full h-full"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Herobanner;
