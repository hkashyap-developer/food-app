import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import * as demo from "@/sanity/lib/demo";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fieldsets: [
    {
      name: "businessDetails",
      title: "Business Details",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: {
        hotspot: false, // Allows cropping in Sanity Studio
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: "title",
      description: "This field is the title of your blog.",
      title: "Title",
      type: "string",
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "marqueebannertext",
      description: "Marquee banner text",
      title: "Marquee Banner Text",
      type: "string",
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "Used both for the <meta> description tag for SEO, and the blog subheader.",
      title: "Description",
      type: "array",
      initialValue: demo.description,
      of: [
        defineArrayMember({
          type: "block",
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: "object",
                name: "link",
                fields: [
                  {
                    type: "string",
                    name: "href",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "themeColor",
      title: "Theme Color",
      type: "color",
      options: { disableAlpha: false },
    }),
    defineField({
      name: "fontStyle",
      title: "Font Style",
      type: "string",
      options: {
        list: [
          { title: "Inter", value: "inter" },
          { title: "Poppins", value: "poppins" },
          { title: "Roboto", value: "roboto" },
          { title: "Lato", value: "lato" },
          { title: "Montserrat", value: "montserrat" },
          { title: "Nunito", value: "nunito" },
          { title: "Noto Serif", value: "notoserif" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footer",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      title: "Footer Info",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "Url",
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        defineField({
          name: "alt",
          description: "Important for accessibility and SEO.",
          title: "Alternative text",
          type: "string",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        }),
        defineField({
          name: "metadataBase",
          type: "url",
          description: (
            <a
              href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
              rel="noreferrer noopener"
            >
              More information
            </a>
          ),
        }),
      ],
    }),

    // ✅ New Business Details Group
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "gstNo",
      title: "GST No / Reg No",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "email",
      title: "Email ID",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      fieldset: "businessDetails",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      fieldset: "businessDetails",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
