import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import MobileMenu from "@/components/custom/header/mobile-menu";
import * as demo from "@/sanity/lib/demo";
import { settingsQuery } from "@/sanity/lib/queries";

// ✅ Type for the settings query result
type SettingsQueryResult = {
  title?: string | null;
  description?: string | null;
  favicon?: string | null;
};

export default async function Header() {
  // ✅ Fetch settings safely
  const settings = (await client.fetch(
    settingsQuery
  )) as SettingsQueryResult | null;

  // ✅ Use fallback values if null/undefined
  const title = settings?.title || demo.title;
  const description =
    settings?.description && settings.description.length > 0
      ? settings.description
      : demo.description;
  const favicon = settings?.favicon || "/favicon.png";

  return (
    <div>
      {/* Fixed header */}
      <div className="z-50 min-h-20 fixed top-0 w-full border-b flex flex-row justify-between items-center px-4 bg-white">
        <div className="flex">
          <Link href="/" className="my-auto flex flex-row gap-2">
            <Image
              src={favicon}
              alt={title || "Favicon"}
              width={32}
              height={32}
              className="object-contain"
            />
            <div className="my-auto font-medium text-base">{title}</div>
          </Link>
        </div>
        <div className="my-auto">
          <MobileMenu />
        </div>
      </div>

      {/* Spacer so content isn't hidden behind header */}
      <div className="min-h-20"></div>
    </div>
  );
}
