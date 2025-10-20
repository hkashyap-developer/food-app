"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { productServiceSliderBasic } from "@/sanity/lib/queries";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Servicecardsingle from "./service-card-single";

import { client } from "@/sanity/lib/client"; // STEP 1
import { postQuery } from "@/sanity/lib/queries"; // STEP 1

// ✅ Type definition for fetched data // STEP 2
interface ServiceCardLayoutType {
  title?: string;
}

export default async function ServiceCardLayout() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // ✅ Use different variable name to prevent self-reference error STEP 3
  const postQueryData = (await client.fetch(
    postQuery
  )) as ServiceCardLayoutType | null;
  console.log("Postquery Data: ", postQueryData);
  return (
    <section className="py-8 sm:py-20">
      <div className="w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-0"></CarouselContent>
        </Carousel>
      </div>
      <div className="w-full mt-8">
        <div className="mb-0 flex flex-col justify-between md:flex-row md:items-end">
          <div className="flex shrink-0 items-center justify-start gap-2 mx-auto">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
