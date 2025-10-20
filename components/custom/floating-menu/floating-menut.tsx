"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { ChevronDown } from "lucide-react";

/**
 * Props:
 *  - items: { id: string; title: string; subtitle?: string; onSelect?: ()=>void }[]
 *  - label: button label
 */
type MenuItem = {
  id: string;
  title: string;
  subtitle?: string;
  onSelect?: () => void;
};

export default function FloatingMenu({
  items = [],
  label = "Open Menu",
}: {
  items?: MenuItem[];
  label?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          {label} <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" side="bottom" className="w-[260px] p-0">
        <Command>
          <CommandInput placeholder="Search menu..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>

            {items.map((it) => (
              <CommandItem
                key={it.id}
                onSelect={() => {
                  // Close is automatic for popover on click; call provided action
                  it.onSelect?.();
                }}
                className="flex flex-col items-start gap-1 py-2 px-3 hover:bg-muted/60"
              >
                <span className="text-sm font-medium">{it.title}</span>
                {it.subtitle && (
                  <span className="text-xs text-muted-foreground">
                    {it.subtitle}
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
