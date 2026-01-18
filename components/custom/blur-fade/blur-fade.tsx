/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/blur-fade";
import { client } from "@/sanity/lib/client";

import { homeGalleryQuery } from "@/sanity/lib/queries";

// Parent document ID and type
const DOCUMENT_ID = "homePage";
const DOCUMENT_TYPE = "homePage";

export interface GalleryItem {
  _key: string;
  galleryImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export interface GalleryType {
  gallery: GalleryItem[];
}

const images = Array.from({ length: 6 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/1080/1080`;
});

export default async function BlurFadeDemo() {
  const gallery = (await client.fetch(homeGalleryQuery)) as GalleryType | null;
  console.log("Gallery Items:", gallery);
  if (!gallery.length) return null;
  return (
    <section id="photos" className="container mx-auto px-4 xl:px-0 pb-12">
      <div className="columns-2 gap-4 sm:columns-3">
        {gallery.map((item, idx) => (
          <BlurFade key={item._key} delay={0.25 + idx * 0.05} inView>
            <img
              src={item.galleryImage?.asset?.url ?? ""}
              alt={item.galleryImage?.alt ?? ""}
              className="mb-4 w-full rounded-lg object-contain cursor-pointer"
              data-sanity-edit-target
              data-sanity={JSON.stringify({
                id: DOCUMENT_ID,
                type: DOCUMENT_TYPE,
                path: `gallery[_key=="${item._key}"].galleryImage`,
              })}
            />
          </BlurFade>
        ))}
      </div>

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
