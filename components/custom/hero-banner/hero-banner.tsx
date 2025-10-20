"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type ButtonType = {
  label?: string;
  link?: string;
};

interface HeroBannerProps {
  title?: string | null;
  description?: string | null;
  buttonOne?: ButtonType;
  buttonTwo?: ButtonType;
  backgroundImage?: string | null;
  coverImage?: string | null;
}

export default function HeroBanner({
  title,
  description,
  buttonOne,
  buttonTwo,
  backgroundImage,
  coverImage,
}: HeroBannerProps) {
  const bgImage = backgroundImage || ""; // ✅ ensures no undefined background

  return (
    <section
      className="w-full bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      <div className="supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-sm bg-[rgba(255,255,255,0.8)]">
        <div className="py-0 pb-10 sm:py-16 md:py-20 border-b border-gray-200">
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
              {(buttonOne || buttonTwo) && (
                <div className="flex gap-4 justify-center md:justify-start">
                  {buttonOne?.label && (
                    <Button asChild variant="default">
                      <a href={buttonOne.link || "#"}>{buttonOne.label}</a>
                    </Button>
                  )}
                  {buttonTwo?.label && (
                    <Button asChild variant="outline">
                      <a href={buttonTwo.link || "#"}>{buttonTwo.label}</a>
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Image Section */}
            {coverImage && (
              <div className="max-w-[620px] flex-1 flex justify-center md:justify-end">
                <Image
                  src={coverImage}
                  alt={title || "Hero banner image"}
                  width={800}
                  height={800}
                  className="sm:rounded-xl object-cover w-full h-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
