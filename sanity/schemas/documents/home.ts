import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "herosection",
  title: "Herosection",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required().min(5).max(80),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(10).max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonOne",
      title: "Primary Button",
      type: "object",
      fields: [
        { name: "label", title: "Button Label", type: "string", validation: (r) => r.required() },
        { name: "link", title: "Button Link", type: "url", validation: (r) => r.required() },
      ],
    }),
    defineField({
      name: "buttonTwo",
      title: "Secondary Button",
      type: "object",
      fields: [
        { name: "label", title: "Button Label", type: "string", validation: (r) => r.required() },
        { name: "link", title: "Button Link", type: "url", validation: (r) => r.required() },
      ],
    }),





defineField({
  name: "headings",
  title: "Headings",
  type: "array",
  of: [
    {
      type: "object",
      name: "headingItem",
      fields: [
        defineField({
          name: "title",
          title: "Heading Title",
          type: "string",
          validation: (r) => r.required().min(3).max(80),
        }),
        defineField({
          name: "subheading",
          title: "Subheading",
          type: "string",
        }),
      ],
    },
  ],
}),






  ],
});
