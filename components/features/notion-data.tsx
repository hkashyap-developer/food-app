import { Client } from "@notionhq/client";

// Server-side only: no hooks
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function fetchNotionBlocks(blockId: string) {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId, // 32-character page block ID, no dashes
    });
    return response.results;
  } catch (err: any) {
    console.error("Notion API error:", err.message);
    return [];
  }
}
