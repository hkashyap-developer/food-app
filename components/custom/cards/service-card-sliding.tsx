"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PostQueryType {
  themeColor?: { hex?: string };
  marqueebannertext?: string;
}

interface Props {
  hsScrollData: PostQueryType | null;
}

export default function ServiceCardSliding({ hsScrollData }: Props) {
  const [carouselApi, setCarouselApi] = useState<any>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => carouselApi.off("select", updateSelection);
  }, [carouselApi]);
  console.log("yes", hsScrollData);
  return <section>test</section>;
}
