import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Quantityselector from "@/components/custom/cards/single-item-selector";
import Image from "next/image";

interface Feature {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface Feature73Props {
  title: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Feature73 = ({
  title = "Key Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  buttonUrl = "https://shadcnblocks.com",
  buttonText = "Book a demo",
  features = [
    {
      id: "feature-1",
      heading: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "/test6.jpg",
      url: "https://shadcnblocks.com",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-0 px-4 sm:pt-0 border-1 border-red-800">
      <div className="container w-full mx-auto flex flex-row align-middle justify-between">
        <div className="w-full flex lg:gap-8 relative">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full flex flex-col rounded-xl border"
            >
              <a href={feature.url} className="">
                <Image
                  src={feature.image}
                  alt={feature.heading}
                  className="w-full rounded-xl"
                  width="1920"
                  height="1080"
                />
              </a>
              <div className="max-w-full lg:max-w-sm md:absolute bottom-4 left-4 p-4">
                <div className="min-w-full md:min-w-[600px] flex flex-col supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 justify-start gap-2 rounded-2xl p-0 sm:p-2 backdrop-blur-md">
                  <div className="">
                    <p className=" mb-3 text-black font-semibold md:mb-4 md:text-4xl lg:mb-6">
                      {title}
                    </p>
                    {description && (
                      <p className="text-black mb-4 text-sm lg:text-lg">
                        {description}
                      </p>
                    )}

                    <div className="mb-0 sm:mb-0">
                      <Quantityselector />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature73;
