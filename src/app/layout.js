import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "The best animated portfolio page",
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
