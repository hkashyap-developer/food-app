import Content from "./content";
import { client } from "@/sanity/lib/client";
import { catBannerQuery } from "@/sanity/lib/queries";
import Ctabanner from "@/components/custom/cta-banner/cta-banner";
import Herobanner from "@/components/custom/hero-banner/hero-banner";

export default async function SheetDemo() {
  const banner = await client.fetch(catBannerQuery);

  console.log("Banner data:", banner); // ✅ Check this in console
  return (
    <>
      <Herobanner />
      <Content />
      <Ctabanner
        title={banner.title}
        description={banner.description}
        button={banner.button}
      />
    </>
  );
}
