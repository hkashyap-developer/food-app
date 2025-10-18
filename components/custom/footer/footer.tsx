import React from "react";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import PortableText from "./portable-text";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import * as demo from "@/sanity/lib/demo";
export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);

  let metadataBase: URL | undefined = undefined;

  try {
    // If settings.ogImage is a string, pass it directly to the URL constructor
    if (settings?.ogImage) {
      metadataBase = new URL(settings.ogImage);
    }
  } catch (error) {
    metadataBase = undefined;
  }

  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}
const Footer = async () => {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  return (
    <div>
      {" "}
      <footer className="bg-black border-accent-2 border-t">
        <div className="container mx-auto px-4">
          {footer.length > 0 ? (
            <PortableText
              className="prose-sm text-pretty bottom-0 w-full max-w-none text-white py-12 text-center md:py-20"
              value={footer as PortableTextBlock[]}
            />
          ) : (
            <div className="flex justify-start flex-col items-start py-28 lg:flex-col gap-8">
              <h3 className="text-white max-w-min mb-10 text-center text-3xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                Marketvisit
              </h3>
              <div className="flex  flex-col items-start justify-start lg:flex-row gap-2">
                <a
                  href="#"
                  className="text-white text-[12px] md:text-[16px] hover:underline"
                >
                  T&C • Privacy Policy • Refund Policy
                </a>
                <a
                  href="https://mediaxinfinity.com"
                  className="text-white text-[12px] md:text-[16px] hover:underline"
                >
                  Powered by Media X Infinity
                </a>
                <a
                  href="https://atmnc.in"
                  className="text-white text-[12px] md:text-[16px] hover:underline"
                >
                  Backed by: ATMNC
                </a>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
