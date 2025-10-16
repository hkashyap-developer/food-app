import Content from "./content";
import { client } from "@/sanity/lib/client";
import { heroSectionQuery } from "@/sanity/lib/queries";
import { catBannerQuery } from "@/sanity/lib/queries";
import Ctabanner from "@/components/custom/cta-banner/cta-banner";
import Herobanner from "@/components/custom/hero-banner/hero-banner";

export default async function SheetDemo() {
  const herobanner = await client.fetch(heroSectionQuery);
  const banner = await client.fetch(catBannerQuery);
  console.log("test22", herobanner.heading);
  return (
    <>
      <Herobanner
        title={herobanner.heading}
        description={herobanner.description}
        buttonOne={herobanner.buttonOne}
        buttonTwo={herobanner.buttonTwo}
        coverImage={herobanner.coverImage} // ✅ pass only the URL
      />
      <Content />
      <Ctabanner
        title={banner.title}
        description={banner.description}
        buttonOne={banner.button}
        buttonTwo={banner.button}
      />
    </>
  );
}
