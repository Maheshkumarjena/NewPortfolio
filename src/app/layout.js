import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const inter = Inter({ subsets: ["latin"] });

// You can handle metadata and favicon this way
export const metadata = {
  title: "Mahesh's Portfolio",
  description: "The best Frontend developer for your company",
  icons: {
    icon: "/logo.jpg?v=1", // Add your favicon here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <AuroraBackground>
          <TransitionProvider>{children}</TransitionProvider>
        </AuroraBackground>
      </body>
    </html>
  );
}
