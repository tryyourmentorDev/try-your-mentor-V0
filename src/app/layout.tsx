import type { Metadata } from "next";
import { Poppins, Playfair, Montserrat } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Try Your Mentor",
  description: "Try Your Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Provider store={store}>
      <html lang="en">
        <body className={`${playfair.variable} ${poppins.variable} ${montserrat.variable} flex flex-col min-h-screen bg-background`}>
          <Header />
          <main className="flex-grow w-full mt-[60px] px-3">
            {children}
          </main>
          <Footer />
        </body>
      </html>
  //  </Provider>
  );
}
