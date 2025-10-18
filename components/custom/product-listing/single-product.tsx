import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Quantityselector from "@/components/custom/cards/single-item-selector";
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
      image: "/169.jpg",
      url: "https://shadcnblocks.com",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-0 sm:py-12 px-4 sm:pt-0 border-1 border-red-800">
      <div className="container w-full mx-auto flex flex-row align-middle justify-between">
        <div className="w-full grid gap-6 md:grid-cols-1 lg:gap-8 relative">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border"
            >
              <a href={feature.url}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </a>
              <div className="lg:max-w-sm md:absolute bottom-4 left-4 p-4">
                <p className="mb-3 text-base font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  {title}
                </p>
                {description && (
                  <p className="text-muted-foreground mb-4 text-sm lg:text-lg">
                    {description}
                  </p>
                )}
                <div className="mb-0 sm:mb-6">
                  <Quantityselector />
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
