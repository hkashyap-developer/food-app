"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export default function TestSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] z-[9999]">
        <SheetHeader>
          <SheetTitle>Sheet Opened!</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <p>This is a working sheet.</p>
        </div>
        <SheetClose asChild>
          <Button variant="outline" className="mt-4">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
