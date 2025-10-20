"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">MENU</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-left">
          <SheetTitle>Marketvisit</SheetTitle>
          <SheetDescription>
            Marketvisit builds websites for Indian hyperlocal businesses
            efficiently and quickly.
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-[200px]"></div>
        <SheetFooter className="flex flex-col gap-4">
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
