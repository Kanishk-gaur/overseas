import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.name} | Overseas Manpower Supply for Employers — ${site.headlineCountries}`;
const description = `${site.name} is a licensed manpower supply agency helping employers source verified skilled and semi-skilled workforce for ${formatCountryList()}. End-to-end support with sourcing, visa sponsorship, compliance, and pre-deployment training.`;

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "manpower supply agency",
    "overseas workforce sourcing",
    "hire workers for Russia",
    "hire workers for Japan",
    "hire workers for Germany",
    "hire workers for UAE",
    "hire workers for Saudi Arabia",
    "work visa sponsorship for employers",
    "bulk workforce recruitment",
    "b2b manpower recruitment agency",
  ],
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: site.name,
  url: site.url,
  description,
  email: site.email,
  telephone: site.phone,
  areaServed: formatCountryList(),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
