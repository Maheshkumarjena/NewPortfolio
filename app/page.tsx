import "./globals.css";
import { SmoothScrollHero } from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/infinityCards";
import Navbar from "@/components/Navbar";
import SocialSection from "@/components/social";

export default async function Home () {
  
  return (
    <main className="w-full mx-auto hide-scrollbar bg-transparent  ">
        <SmoothScrollHero />
        <SocialSection />
        {/* <InfiniteMovingCardsDemo /> */}
    </main>
  );
}
