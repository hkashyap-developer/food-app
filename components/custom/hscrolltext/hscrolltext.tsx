import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
      <ScrollVelocityContainer className="text-base tracking-[-0.02em] md:text-xl md:leading-[5rem] text-white py-4 md:py-0">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          Get a free website •&nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
