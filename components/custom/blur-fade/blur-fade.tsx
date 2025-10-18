/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/blur-fade";

const images = Array.from({ length: 6 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/1080/1080`;
});

export default function BlurFadeDemo() {
  return (
    <section id="photos" className="container mx-auto px-4 xl:px-0 pb-12">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
