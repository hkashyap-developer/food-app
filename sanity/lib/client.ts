import { createClient } from "next-sanity";

export const client = createClient({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_API_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    process.env.SANITY_API_DATASET ||
    "production",
  apiVersion: "2025-10-24",
  token:
    process.env.SANITY_API_READ_TOKEN ||
    process.env.SANITY_API_WRITE_TOKEN, // token for build-time / SSR
  useCdn: false, // must be false when using token
  perspective: "published",
  stega: {
    studioUrl: "/studio",
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === "title") {
        return true;
      }
      return props.filterDefault(props);
    },
  },
});
