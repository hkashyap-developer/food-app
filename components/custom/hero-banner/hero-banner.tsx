"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="w-full bg-background py-8 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Build Beautiful{" "}
            <span className="text-primary">Web Experiences</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Empower your business with modern, scalable, and elegant web
            solutions designed to convert and impress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Card className="overflow-hidden border-0 max-w-md w-full">
            <CardContent className="p-0">
              <Image
                src="/favicon.png"
                alt="Hero Image"
                width={800}
                height={800}
                className="rounded-none object-cover w-full h-full"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
