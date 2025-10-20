import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroBanner",
  title: "Hero Banner",
  type: "document",
  groups: [
    { name: "groupOne", title: "Group One" },
    { name: "groupTwo", title: "Group Two" },
  ],
  fields: [
    // 🟩 Group One Fields
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      group: "groupOne",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "groupOne",
    }),
    defineField({
      name: "innerGroup",
      title: "Inner Group",
      type: "object",
      group: "groupOne",
      fields: [
        { name: "textOne", title: "Text Input 1", type: "string" },
        { name: "textTwo", title: "Text Input 2", type: "string" },
        { name: "imageOne", title: "Image Input 1", type: "image" },
        { name: "imageTwo", title: "Image Input 2", type: "image" },
        { name: "isActive", title: "Checkbox", type: "boolean" },
        {
          name: "rangeValue",
          title: "Range Slider",
          type: "number",
          description: "Select a value between 0 and 100",
          validation: (Rule) => Rule.min(0).max(100),
        },
      ],
    }),

    // 🟦 Group Two Fields
    defineField({
      name: "secondaryTextOne",
      title: "Secondary Text 1",
      type: "string",
      group: "groupTwo",
    }),
    defineField({
      name: "secondaryTextTwo",
      title: "Secondary Text 2",
      type: "string",
      group: "groupTwo",
    }),
  ],
});
