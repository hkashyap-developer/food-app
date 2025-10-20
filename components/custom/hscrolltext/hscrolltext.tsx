import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { client } from "@/sanity/lib/client";
import { hsScrollText as hsScrollTextQuery } from "@/sanity/lib/queries"; // ✅ Rename to avoid conflict

// ✅ Type definition for fetched data
interface HsScrollTextType {
  themeColor?: { hex?: string };
  marqueebannertext?: string;
}

export default async function ScrollBasedVelocityDemo() {
  // ✅ Use different variable name to prevent self-reference error
  const hsScrollData = (await client.fetch(
    hsScrollTextQuery
  )) as HsScrollTextType | null;

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: hsScrollData?.themeColor?.hex ?? "#000000" }} // ✅ Safely apply theme color
    >
      <ScrollVelocityContainer className="text-base tracking-[-0.02em] md:text-xl md:leading-[5rem] text-white py-6 md:py-0">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          {hsScrollData?.marqueebannertext ?? "Build a free websites • "}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
