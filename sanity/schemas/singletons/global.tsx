import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "global",
  title: "Global Settings",
  type: "document",
  icon: CogIcon,
  fieldsets: [
    {
      name: "header",
      title: "Header",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "footer",
      title: "Footer",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // Header Fields
    defineField({
      name: "menu",
      title: "Menu",
      type: "array",
      fieldset: "header",
      of: [
        defineArrayMember({
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),

    // Footer Fields
    defineField({
      name: "footerBrand",
      title: "Footer Brand Name",
      type: "string",
      fieldset: "footer",
    }),
    defineField({
      name: "footerText1",
      title: "Footer Text 1",
      type: "string",
      fieldset: "footer",
    }),
    defineField({
      name: "footerText2",
      title: "Footer Text 2",
      type: "array",
      fieldset: "footer",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerText2Item",
          title: "Footer Text 2 Item",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "subText",
              title: "Sub Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      fieldset: "footer",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Global Settings",
      };
    },
  },
});
