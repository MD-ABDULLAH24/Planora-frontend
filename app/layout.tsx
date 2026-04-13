import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Planora | Smart Task & Project Management",
    template: "%s | Planora",
  },
  description:
    "Planora is a smart task and project management app to organize your daily work, boost productivity, and manage teams efficiently.",

  keywords: [
    "Planora",
    "Task Management",
    "Project Management",
    "Productivity App",
    
  ],

  authors: [{ name: "Abdullah" }],

  creator: "Abdullah",
  icons: {
    icon: "/assets/logo.png",        // favicon
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "Planora",
    description:
      "Organize your tasks and projects efficiently with Planora.",
    url: "https://your-domain.com",
    siteName: "Planora",
    images: [
      {
        url: "/assets/logo.png", // 👉 later change
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Planora",
    description:
      "Smart task and project management app for better productivity.",
    images: ["https://your-domain.com/og-image.png"],
  },

  metadataBase: new URL("https://your-domain.com"), // 👉 change later
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}