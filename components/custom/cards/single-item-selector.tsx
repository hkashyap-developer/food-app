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
            <DrawerTitle className="text-lg font-semibold text-center">
              {added ? "Item Added" : "Item Removed"}
            </DrawerTitle>
          </DrawerHeader>

          <DrawerFooter className="flex justify-end">
            <DrawerClose asChild>
              <Button variant="secondary" className="max-w-min mx-auto">
                Done
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
