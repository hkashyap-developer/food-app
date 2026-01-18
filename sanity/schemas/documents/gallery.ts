import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "galleryImage",
      title: "Gallery Image",
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
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              if (
                (context.document?.galleryImage as any)?.asset?._ref &&
                !alt
              ) {
                return "Required";
              }
              return true;
            }),
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "galleryImage.alt",
      media: "galleryImage",
    },
  },
});
