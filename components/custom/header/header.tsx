import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import MobileMenu from "@/components/custom/header/mobile-menu";
import * as demo from "@/sanity/lib/demo";

// Step 1: Below
// Step 2: Pass the props
// Step 3: Pas the const variables in the fuction
// Step 4: add import # as demo from ... header file

type SettingsQueryResult = {
  title: string | null;
  description: any;
  favicon: string | null;
};

const header = (props: {
  title: string | null | undefined;
  description: any;
}) => {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <div>
      <div className="z-50 min-h-20 fixed top-0 w-full border-b py-auto flex flex-row justify-between align-center px-4 bg-white">
        <div className="flex">
          <Link href="/" className="my-auto flex flex-row gap-2">
            <Image
              src="/favicon.png" // fallback string
              alt="Favicon"
              width={32}
              height={32}
              className=""
            />

            <div className="my-auto">{title || demo.title}</div>
          </Link>
        </div>
        <div className="my-auto">
          <MobileMenu />
        </div>
      </div>
      <div className="min-h-20"></div>
    </div>
  );
};

export default header;
