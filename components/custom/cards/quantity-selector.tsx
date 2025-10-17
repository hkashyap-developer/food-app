"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={decrease}
        className="rounded-full"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span className="min-w-[2rem] text-center text-base font-medium">
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
  );
}
