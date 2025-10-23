import Content from "./content";
import { client } from "@/sanity/lib/client";
import {
  settingsQuery,
  heroSectionQuery,
  catBannerQuery,
} from "@/sanity/lib/queries";
import Ctabanner from "@/components/custom/cta-banner/cta-banner";
import Herobanner from "@/components/custom/hero-banner/hero-banner";
import Singletestimonial from "@/components/custom/testimonial/testimonial-single";
import Velocityscroll from "@/components/custom/hscrolltext/hscrolltext";
import Servicecardlayout from "@/components/custom/cards/service-card-layout";
import Faqs from "@/components/custom/faqs/faqs";
import Startpattern from "@/components/custom/designs/star";
import Squarerightclip from "@/components/custom/designs/square-right-clip";
import Singleproduct from "@/components/custom/product-listing/single-product";
import Blufade from "@/components/custom/blur-fade/blur-fade";
import fetchNotionBlocks from "@/components/features/notion-data";
import NotionRenderer from "@/components/features/notion-render";

// ✅ Type definitions
interface ButtonType {
  label: string;
  url?: string;
}

interface HeroBannerType {
  heading?: string;
  description?: string;
  buttonOne?: ButtonType | string;
  buttonTwo?: ButtonType | string;
  backgroundImage?: string;
  coverImage?: string;
}

interface BannerType {
  title?: string;
  description?: string;
  button?: string | ButtonType;
}

interface SettingsType {
  themeColor?: { hex?: string };
}

export default async function SheetDemo() {
  const settings = (await client.fetch(settingsQuery)) as SettingsType | null;
  const herobanner = (await client.fetch(
    heroSectionQuery
  )) as HeroBannerType | null;
  const banner = (await client.fetch(catBannerQuery)) as BannerType | null;

  const faqs = [
    {
      id: 1,
      title: "Ready-to-Use UI Blocks",
      image: "/faq/3.jpg",
      description:
        "Browse through our collection of pre-built UI blocks designed with shadcn/ui. Each block is responsive, accessible, and customizable.",
    },
    {
      id: 2,
      title: "Tailwind CSS & TypeScript",
      image: "/faq/2.jpg",
      description:
        "Built with Tailwind CSS and TypeScript. Clean, type-safe code that integrates seamlessly with Next.js projects.",
    },
    {
      id: 3,
      title: "Dark Mode & Customization",
      image: "/faq/1.jpg",
      description:
        "All blocks support dark mode and can be customized to match your brand with Tailwind's configuration.",
    },
    {
      id: 4,
      title: "Accessibility First",
      image: "/faq/4.jpg",
      description:
        "Built following WCAG guidelines with proper ARIA labels, keyboard navigation, and semantic HTML.",
    },
    {
      id: 5,
      title: "Modern Development Stack",
      image: "/faq/5.jpg",
      description:
        "Powered by React 18, Next.js 14, and shadcn/ui. Uses RSCs, TypeScript strict mode, and high performance.",
    },
  ];

  const notionBlockId = "292f5474f0c180229dcfcf962b3e6d15";
  const notionBlocks = await fetchNotionBlocks(notionBlockId);

  // ✅ Safe normalization for buttons (string or object)
  const normalizeButton = (btn?: string | ButtonType): ButtonType =>
    typeof btn === "string"
      ? { label: btn, url: "#" }
      : btn || { label: "", url: "#" };

  return (
    <>
      <div
        style={{ backgroundColor: settings?.themeColor?.hex ?? "#000000" }}
        className="min-h-[4px]"
      ></div>
      testxx
      <Velocityscroll />
      {herobanner ? (
        <Herobanner
          title={herobanner.heading ?? ""}
          description={herobanner.description ?? ""}
          buttonOne={normalizeButton(herobanner.buttonOne)}
          buttonTwo={normalizeButton(herobanner.buttonTwo)}
          backgroundImage={herobanner.backgroundImage ?? ""}
          coverImage={herobanner.coverImage ?? ""}
        />
      ) : (
        <div className="text-center py-10 text-gray-500">
          No hero banner data found.
        </div>
      )}
      {/* <NotionRenderer blocks={notionBlocks} /> */}
      <div className="hidden max-w-[280px] sm:max-w-xl mx-auto relative">
        <div className="hidden w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] absolute top-0 right-0 z-10">
          <Startpattern />
        </div>
        <div className="pt-4 sm:pt-6">
          <Squarerightclip />
        </div>
      </div>
      <Servicecardlayout />
      <div className="mb-8">
        <Singleproduct
          title="Newly added"
          description="High-quality components designed for modern web apps using Next.js, Tailwind, and Shadcn UI."
          buttonUrl="#"
          buttonText="Read More"
        />
      </div>
      <Content />
      <Singletestimonial />
      {banner && (
        <Ctabanner
          title={banner.title ?? ""}
          description={banner.description ?? ""}
          buttonOne={normalizeButton(banner.button)}
          buttonTwo={normalizeButton(banner.button)}
        />
      )}
      <Faqs features={faqs} />
      <Blufade />
      <Velocityscroll />
    </>
  );
}
