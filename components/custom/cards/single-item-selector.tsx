"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Minus, Plus } from "lucide-react";

export default function AddWithQuantityDrawer() {
  const [open, setOpen] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleAddClick = () => {
    setAdded((prev) => !prev); // toggle between true/false
    setOpen(true); // always open drawer
  };

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <Button
        onClick={handleAddClick}
        className={`w-32 font-medium transition-all ${
          added ? "bg-white text-black" : "bg-primary text-white"
        }`}
      >
        {added ? "Added" : "+ Add"}
      </Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">
              Adjust Quantity
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex justify-center items-center gap-4 py-6">
            <Button
              variant="outline"
              size="icon"
              onClick={decrease}
              className="rounded-full"
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="min-w-[2rem] text-center text-base font-semibold">
              {quantity}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={increase}
              className="rounded-full"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <DrawerFooter className="flex justify-end">
            <DrawerClose asChild>
              <Button variant="secondary">Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
