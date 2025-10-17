import { defineQuery } from "next-sanity";
import { client } from "./client";

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    title,
    description,
    footer,
    "favicon": favicon.asset->url,
    "ogImage": ogImage.asset->url
  }
`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post"  && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);


// 🆕 Add this CTA Banner query
export const catBannerQuery = defineQuery(`
  *[_type == "cat-banner"][0]{
    title,
    description,
    picture{
      asset->{
        url,
        metadata { dimensions }
      },
      alt
    },
    button{
      label,
      url,
      style,
      newTab
    }
  }
`);

export const heroSectionQuery = defineQuery(`
  *[_type == "herosection"][0]{
    heading,
    description,
    "coverImage": coverImage.asset->url, 
    buttonOne{
      label,
      link
    }, 
    buttonTwo{
      label,
      link
    }, 
  }
`);



export async function getSiteSettings() {
  const query = `*[_type == "settings"][0]{fontStyle}`;
  return await client.fetch(query);
}
