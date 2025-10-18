import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity";

import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import Header from "@/components/custom/header/header";
import Footer from "@/components/custom/footer/footer";
import Dock from "@/components/custom/dock/dock";
import HideOnScroll from "@/components/features/scroll-top-bottom-hide";
import { getSiteSettings } from "@/sanity/lib/queries"; // you'll create this

import { Inter, Poppins, Roboto, Lato, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});
export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// map to easily use by name
const fontMap: Record<string, string> = {
  inter: inter.variable,
  poppins: poppins.variable,
  roboto: roboto.variable,
  lato: lato.variable,
  montserrat: montserrat.variable,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  const settings = await getSiteSettings();
  const selectedFont = settings?.fontStyle || "inter";
  const activeFont = fontMap[selectedFont] || fontMap.inter;
  return (
    <html
      lang="en"
      className={`${fontMap[selectedFont] || fontMap.inter} bg-white text-black`}
    >
      <body className="">
        <Header />

        <section className="">
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
        <HideOnScroll>
          <div className="fixed bottom-4 mx-auto w-full">
            <Dock />
          </div>
        </HideOnScroll>
        <Footer />
      </body>
    </html>
  );
}
