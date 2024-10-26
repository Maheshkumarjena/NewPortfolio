import "./globals.css";
import { SmoothScrollHero } from "@/components/HeroSection";


export default async function Home () {
  
  return (
    <main className="w-full mx-auto hide-scrollbar bg-transparent ">
      <SmoothScrollHero />
    </main>
  );
}
