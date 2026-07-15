import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sandro Ricardo Fernandes | Sociedade de Advocacia",
  description: "Assessoria jurídica com rigor técnico e experiência consolidada liderada pelo Dr. Sandro Ricardo Fernandes. Especialista em Licitações, Contratos Administrativos e Tribunais de Contas. OAB/SC 16.175.",
  keywords: [
    "licitações",
    "editais",
    "direito administrativo",
    "recursos administrativos",
    "Sandro Ricardo Fernandes",
    "advocacia licitações",
    "assessoria jurídica editais",
    "TCE/SC",
    "direito público",
    "Florianópolis"
  ],
  authors: [{ name: "Sandro Ricardo Fernandes" }],
  metadataBase: new URL("https://advsandrorfernandes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sandro Ricardo Fernandes | Sociedade de Advocacia",
    description: "Assessoria jurídica com rigor técnico e experiência consolidada liderada pelo Dr. Sandro Ricardo Fernandes. OAB/SC 16.175.",
    url: "https://advsandrorfernandes.com",
    siteName: "Sandro Ricardo Fernandes Advocacia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandro Ricardo Fernandes | Sociedade de Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandro Ricardo Fernandes | Sociedade de Advocacia",
    description: "Assessoria jurídica com rigor técnico e experiência consolidada liderada pelo Dr. Sandro Ricardo Fernandes. OAB/SC 16.175.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${cinzel.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-navy text-white selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}

