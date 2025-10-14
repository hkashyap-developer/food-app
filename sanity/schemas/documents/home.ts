import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "cat-banner",
  title: "CTA Banner",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            }),
        },
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      validation: (rule) => rule.required(),
    }),

    // 🔽 Button field added here
    defineField({
      name: "button",
      title: "CTA Button",
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
          name: "style",
          title: "Button Style",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Outline", value: "outline" },
            ],
            layout: "radio",
          },
          initialValue: "primary",
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
