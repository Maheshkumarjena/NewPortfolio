import "./globals.css";
import { SmoothScrollHero } from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/infinityCards";
import SocialLinks from "@/components/social";

export default async function Home () {
  
  return (
    <main className="w-full mx-auto hide-scrollbar bg-transparent ">
      <SmoothScrollHero />
      <SocialLinks/>
      <InfiniteMovingCardsDemo />
    </main>
  );
}
