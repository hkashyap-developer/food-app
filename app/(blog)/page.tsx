import Content from "./content";
import { client } from "@/sanity/lib/client";
import { heroSectionQuery, catBannerQuery } from "@/sanity/lib/queries";
import Ctabanner from "@/components/custom/cta-banner/cta-banner";
import Herobanner from "@/components/custom/hero-banner/hero-banner";
import Singletestimonial from "@/components/custom/testimonial/testimonial-single";
import Velocityscroll from "@/components/custom/hscrolltext/hscrolltext";
import Servicecardlayout from "@/components/custom/cards/service-card-layout";
import Faqs from "@/components/custom/faqs/faqs";
import Startpattern from "@/components/custom/designs/star";
import Squarerightclip from "@/components/custom/designs/square-right-clip";
export default async function SheetDemo() {
  const herobanner = await client.fetch(heroSectionQuery);
  const banner = await client.fetch(catBannerQuery);

  // ✅ Use numeric IDs to match FeatureItem type
  const faqs = [
    {
      id: 1,
      title: "Ready-to-Use UI Blocks",
      image: "/faq/3.jpg",
      description:
        "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
    },
    {
      id: 2,
      title: "Tailwind CSS & TypeScript",
      image: "/faq/2.jpg",
      description:
        "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
    },
    {
      id: 3,
      title: "Dark Mode & Customization",
      image: "/faq/1.jpg",
      description:
        "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
    },
    {
      id: 4,
      title: "Accessibility First",
      image: "/faq/4.jpg",
      description:
        "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
    },
    {
      id: 5,
      title: "Modern Development Stack",
      image: "/faq/5.jpg",
      description:
        "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
    },
  ];

  return (
    <>
      <Velocityscroll />
      <Herobanner
        title={herobanner.heading}
        description={herobanner.description}
        buttonOne={herobanner.buttonOne}
        buttonTwo={herobanner.buttonTwo}
        coverImage={herobanner.coverImage}
      />
      <div className="hidden max-w-[280px] sm:max-w-xl mx-auto relative">
        <div className="hidden w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] absolute top-0 right-0 z-10">
          <Startpattern />
        </div>
        <div className="pt-4 sm:pt-6">
          <Squarerightclip />
        </div>
      </div>
      <Servicecardlayout />
      <Content />
      <Singletestimonial />
      <Ctabanner
        title={banner.title}
        description={banner.description}
        buttonOne={banner.button}
        buttonTwo={banner.button}
      />
      {/* ✅ Pass features correctly */}
      <Faqs features={faqs} />
    </>
  );
}
