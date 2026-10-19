import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sejal Agarwal",
  description: "Sejal Agarwal's Personal Website",
  openGraph: {
    title: "Sejal Agarwal",
    description: "Software developer & HCI researcher",
    url: "https://sejalagarwal.ca",
    siteName: "Sejal Agarwal",
    images: [
      {
        url: "https://sejalagarwal.ca/womanProgrammer.png",
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
    images: ["https://sejalagarwal.ca/womanProgrammer.png"],
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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2072'%3E%3Ctext%20y='54'%20font-size='56'%3E%F0%9F%91%A9%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%3C/text%3E%3C/svg%3E"
        />
      </head>
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
