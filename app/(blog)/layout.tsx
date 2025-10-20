import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity";
import AlertBanner from "./alert-banner";
import Header from "@/components/custom/header/header";
import Footer from "@/components/custom/footer/footer";
import Dock from "@/components/custom/dock/dock";
import HideOnScroll from "@/components/features/scroll-top-bottom-hide";
import { getSiteSettings } from "@/sanity/lib/queries";

// Dynamic Google Fonts via <link>
const fontLinks: Record<string, string> = {
  inter:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
  poppins:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
  roboto:
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
  lato: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  montserrat:
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
  nunito:
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap",
  notoserif:
    "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap",
};

// Map Sanity font names to CSS font-family
const fontFamilyMap: Record<string, string> = {
  inter: "'Inter', sans-serif",
  poppins: "'Poppins', sans-serif",
  roboto: "'Roboto', sans-serif",
  lato: "'Lato', sans-serif",
  montserrat: "'Montserrat', sans-serif",
  nunito: "'Nunito', sans-serif",
  notoserif: "'Noto Serif', serif",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const font = settings?.fontStyle || "inter";

  return (
    <html lang="en">
      <head>
        {/* Load font dynamically */}
        <link rel="stylesheet" href={fontLinks[font]} />
      </head>
      <body
        style={{
          fontFamily: fontFamilyMap[font],
        }}
      >
        <Header />

        <section>
          <main>{children}</main>
          <AlertBanner />
        </section>

        <VisualEditing />
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
