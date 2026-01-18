/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/blur-fade";

type GalleryItem = {
  _id: string;
  galleryImage: {
    url: string;
    alt: string;
  };
};

type Props = {
  gallery: GalleryItem[];
};

export default function BlurFadeDemo({ gallery }: Props) {
  if (!gallery?.length) return null;

  return (
    <section id="photos" className="container mx-auto px-4 xl:px-0 pb-12">
      <div className="columns-2 gap-4 sm:columns-3">
        {gallery.map((item, idx) => (
          <BlurFade key={item._id} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={item.galleryImage.url}
              alt={item.galleryImage.alt}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
