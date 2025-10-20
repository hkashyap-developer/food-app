import React from "react";
import ServiceCardSliding from "./service-card-sliding";
import { client } from "@/sanity/lib/client";
import { allPosts } from "@/sanity/lib/queries";

interface PostQueryType {
  themeColor?: { hex?: string };
  marqueebannertext?: string;
}

// Server Component
export default async function ServiceCardlayout() {
  const hsScrollData = (await client.fetch(allPosts)) as PostQueryType | null;

  return (
    <div>
      {/* Pass data as props to the client component */}
      <ServiceCardSliding hsScrollData={hsScrollData} />
    </div>
  );
}
