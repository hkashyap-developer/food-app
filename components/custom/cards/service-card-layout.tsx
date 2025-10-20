"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { productServiceSliderBasic } from "@/sanity/lib/queries";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Servicecardsingle from "./service-card-single";

interface GalleryItem {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  coverImage: string;
}

const Gallery6 = ({ heading = "Gallery" }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [items, setItems] = useState<GalleryItem[]>([]);

  // ✅ Fetch Sanity data on client side
  useEffect(() => {
    const fetchGallery = async () => {
      const data = (await client.fetch(
        productServiceSliderBasic
      )) as GalleryItem[];
      setItems(data || []);
    };
    fetchGallery();
  }, []);

  // ✅ Carousel scroll state
  useEffect(() => {
    if (!carouselApi) return;

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

  return (
    <section className="py-8 sm:py-20">
      <h2 className="mb-6 text-2xl font-bold text-center">{heading}</h2>
      <div className="w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item._id}
                className="ml-8 max-w-[240px] md:max-w-[360px]"
              >
                <Servicecardsingle
                  title={item.title}
                  summary={item.excerpt}
                  url={`/posts/${item.slug.current}`}
                  image={item.coverImage}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="w-full mt-8 flex justify-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default Gallery6;
