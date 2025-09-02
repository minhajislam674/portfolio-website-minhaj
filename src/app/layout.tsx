import type { Metadata } from "next";
import './globals.css' 
import StoryblokProvider from "./components/StoryblokProvider";
import { Footer } from "./components/ui/Footer";
import Header from "./components/ui/Header";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
    <html lang="en">
      <body>
        <Header />
     

      <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
    </StoryblokProvider>
  );
}
