"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/ui/magic-card";
import Quantityselector from "./quantity-selector";
import Singleitemselector from "./single-item-selector";
import Image from "next/image";
export default function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <Card className="w-full max-w-sm border-none p-0 shadow-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0 rounded-xl border border-gray-100"
      >
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <form>
            <div className="grid gap-4">
              <Image
                src="/faq/1.jpg"
                height="1000"
                width="1000"
                alt="Product Image"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <div className="flex flex-col gap-4">
            <div className="hidden">
              <Quantityselector />
            </div>
            <Singleitemselector />
          </div>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
