import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteMetadata } from "@/lib/metadata";
import { getDentalClinicJsonLd } from "@/lib/structured-data";
import { serializeJsonLd } from "@/lib/utils";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = getDentalClinicJsonLd();

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col pb-[calc(5.75rem+env(safe-area-inset-bottom))] xl:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <BottomNavigation />
        {/* Serialized with escaping so clinic text cannot close the script element. */}
        {jsonLd ? <JsonLd data={jsonLd} /> : null}
      </body>
    </html>
  );
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
