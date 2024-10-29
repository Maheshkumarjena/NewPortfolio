import "./globals.css";
import { SmoothScrollHero } from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/infinityCards";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/social";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default async function Home () {
  
  return (
    <main className="w-full mx-auto hide-scrollbar bg-transparent  ">
      <Navbar />
      <AuroraBackground>
        <SmoothScrollHero />
        <SocialLinks />
        <InfiniteMovingCardsDemo />
      </AuroraBackground>
    </main>
  );
}
