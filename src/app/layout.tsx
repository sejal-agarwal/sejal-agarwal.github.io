import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata = {
  title: "Sejal Agarwal",
  description: "Sejal Agarwal's Personal Website",
  openGraph: {
    title: "Sejal Agarwal",
    description: "Software developer & HCI researcher",
    url: "https://your-domain.com",
    siteName: "Sejal Agarwal",
    images: [
      {
        url: "https://your-domain.com/womanProgrammer.png",
        width: 1200,
        height: 630,
        alt: "Woman programmer illustration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejal Agarwal",
    description: "Software developer & HCI researcher",
    images: ["https://your-domain.com/womanProgrammer.png"],
  },
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          antialiased
        `}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
