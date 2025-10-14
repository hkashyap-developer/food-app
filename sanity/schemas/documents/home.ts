import { MegaphoneIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroBanner",
  title: "Hero Banner",
  icon: MegaphoneIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.backgroundImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            }),
        },
      ],
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Button",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "url",
          title: "Button URL",
          type: "url",
          validation: (rule) => rule.required(),
        },
        {
          name: "newTab",
          title: "Open in New Tab",
          type: "boolean",
          initialValue: false,
        },
      ],
    }),

    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Button",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "url",
          title: "Button URL",
          type: "url",
          validation: (rule) => rule.required(),
        },
        {
          name: "newTab",
          title: "Open in New Tab",
          type: "boolean",
          initialValue: false,
        },
      ],
    }),
  ],
});
