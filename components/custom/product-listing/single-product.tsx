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
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      url: "https://shadcnblocks.com",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-12 sm:py-32 px-4 sm:pt-0 border-1 border-red-800">
      <div className="container w-full mx-auto flex flex-row align-middle justify-between">
        <div className="w-full grid gap-6 md:grid-cols-1 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border"
            >
              <a href={feature.url}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                />
              </a>
              <div className="mb-8 lg:max-w-sm">
                <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  {title}
                </h2>
                {description && (
                  <p className="text-muted-foreground mb-8 lg:text-lg">
                    {description}
                  </p>
                )}
                <div className="mb-6">
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
