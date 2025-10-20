import React from "react";
import ServiceCardSliding from "./service-card-sliding";
import { client } from "@/sanity/lib/client"; // STEP 1
import { hsScrollText as hsScrollTextQuery } from "@/sanity/lib/queries"; // STEP 1

// ✅ Type definition for fetched data // STEP 2
interface HsScrollTextType {
  themeColor?: { hex?: string };
  marqueebannertext?: string;
}

export default async function ServiceCardlayout() {
  // ✅ Use different variable name to prevent self-reference error STEP 3
  const hsScrollData = (await client.fetch(
    hsScrollTextQuery
  )) as HsScrollTextType | null;

  return <div></div>;
}
