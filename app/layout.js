import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/header/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flipkart 💝   ",
  description: "a flipkart clone by geniusahyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
    </html>
  );
}
