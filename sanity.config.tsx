"use client";

import { defineConfig, PluginOptions } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";
import { colorInput } from "@sanity/color-input";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import { resolveHref } from "@/sanity/lib/utils";

// Schemas
import author from "@/sanity/schemas/documents/author";
import post from "@/sanity/schemas/documents/post";
import home from "@/sanity/schemas/documents/home";
import settings from "@/sanity/schemas/singletons/settings";
import global from "@/sanity/schemas/singletons/global";
import herobanner from "@/sanity/schemas/singletons/herobanner";
import gallery from "@/sanity/schemas/documents/gallery";

const homeLocation = {
  title: "Food App",
  href: "/",
} satisfies DocumentLocation;

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,

  schema: {
    types: [settings, global, herobanner, post, author, home, gallery],
  },

  plugins: [
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/posts/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: "This document is used on all pages",
            tone: "caution",
          }),
          post: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("post", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: {
        origin: "http://localhost:3000",
        previewMode: { enable: "/api/draft-mode/enable" },
      },
    }),

    structureTool({ structure: pageStructure([settings]) }),
    singletonPlugin([settings.name]),
    unsplashImageAsset(),
    assistWithPresets(),
    colorInput(),

    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
