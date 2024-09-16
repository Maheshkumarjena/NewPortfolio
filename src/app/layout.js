import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export const metadata = {
  title: "Mahesh's Portfolio ",
  description: "The best Frontend developer for your company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-hidden'>
      <body className={inter.className} >
      <AuroraBackground>

        <TransitionProvider>{children}</TransitionProvider>
      </AuroraBackground>
      </body>
    </html>
  );
}
