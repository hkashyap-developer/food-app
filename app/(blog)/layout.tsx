import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import Header from "@/components/custom/header/header";
import Footer from "@/components/custom/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <Header title="MarketVisit" description="Welcome to my page" />

        <section className="">
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
