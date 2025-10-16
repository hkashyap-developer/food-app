import Content from "./content";
import { client } from "@/sanity/lib/client";
import { heroSectionQuery } from "@/sanity/lib/queries";
import { catBannerQuery } from "@/sanity/lib/queries";
import Ctabanner from "@/components/custom/cta-banner/cta-banner";
import Herobanner from "@/components/custom/hero-banner/hero-banner";

export default async function SheetDemo() {
  const herobanner = await client.fetch(heroSectionQuery);
  const banner = await client.fetch(catBannerQuery);
  console.log("Banner data 1:", herobanner); // ✅ Check this in console
  console.log("Banner data:", banner); // ✅ Check this in console
  return (
    <>
      <Herobanner
        title={herobanner.title}
        description={herobanner.description}
        buttonOne={herobanner.buttonOne}
        buttonTwo={herobanner.buttonTwo}
        image={herobanner.image}
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
