// components/features/notion-render.tsx
"use client";

import React from "react";

type RichTextObject = { plain_text: string };

type Block = {
  id: string;
  type: string;
  paragraph?: { rich_text: RichTextObject[] };
  heading_1?: { rich_text: RichTextObject[] };
  heading_2?: { rich_text: RichTextObject[] };
  heading_3?: { rich_text: RichTextObject[] };
  bulleted_list_item?: { rich_text: RichTextObject[] };
  numbered_list_item?: { rich_text: RichTextObject[] };
  code?: { rich_text: RichTextObject[] };
  quote?: { rich_text: RichTextObject[] };
  callout?: { rich_text: RichTextObject[]; icon?: { emoji?: string } };
};

const getPlainText = (block: Block, type: keyof Block) => {
  const content = block[type];
  if (
    content &&
    typeof content !== "string" &&
    "rich_text" in content &&
    Array.isArray(content.rich_text)
  ) {
    return content.rich_text.map((t: RichTextObject) => t.plain_text).join("");
  }
  return "";
};

export default function NotionRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return <p key={block.id}>{getPlainText(block, "paragraph")}</p>;

          case "heading_1":
            return (
              <h1 key={block.id} className="text-3xl font-bold">
                {getPlainText(block, "heading_1")}
              </h1>
            );

          case "heading_2":
            return (
              <h2 key={block.id} className="text-2xl font-semibold">
                {getPlainText(block, "heading_2")}
              </h2>
            );

          case "heading_3":
            return (
              <h3 key={block.id} className="text-xl font-semibold">
                {getPlainText(block, "heading_3")}
              </h3>
            );

          case "bulleted_list_item":
            return (
              <li key={block.id}>
                {getPlainText(block, "bulleted_list_item")}
              </li>
            );

          case "numbered_list_item":
            return (
              <li key={block.id}>
                {getPlainText(block, "numbered_list_item")}
              </li>
            );

          case "code":
            return (
              <pre
                key={block.id}
                className="bg-gray-100 p-2 rounded overflow-x-auto"
              >
                {getPlainText(block, "code")}
              </pre>
            );

          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-gray-300 pl-4 italic"
              >
                {getPlainText(block, "quote")}
              </blockquote>
            );

          case "callout":
            return (
              <div
                key={block.id}
                className="flex items-center bg-gray-100 p-4 rounded space-x-2"
              >
                <span>{block.callout?.icon?.emoji || "💡"}</span>
                <span>{getPlainText(block, "callout")}</span>
              </div>
            );

          case "divider":
            return <hr key={block.id} className="my-4 border-gray-300" />;

          default:
            return (
              <div key={block.id} className="text-red-500">
                Unsupported block type: {block.type}
              </div>
            );
        }
      })}
    </div>
  );
}
