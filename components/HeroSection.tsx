"use client";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef, useEffect } from "react";
// Type definitions for ParallaxImg and product props
type ParallaxImgProps = {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};


const SECTION_HEIGHT = 1500;

export const SmoothScrollHero: React.FC = () => {
  // Use client-side scroll and lenis effects in Next.js

  return (
    <div className="  hide-scrollbar bg-transparent">
      <Hero />
      {/* <Schedule /> */}
    </div>
  );
};


const Hero: React.FC = () => {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full ">
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 dark:bg-gradient-to-b from-zinc-950/0 to-background " />
    </div>
  );
};

const CenterImage: React.FC = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1600], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1600], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky  top-0 m-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url('./d1.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/js.png"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="nextjs.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="fg.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="node.png"
        alt="Orbiting satellite"
        start={-100}
        end={-300}
        className="ml-24 w-5/12"
      />
      <ParallaxImg
        src="mgdb.png"
        alt="Orbiting satellite"
        start={200}
        end={-400}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg: React.FC<ParallaxImgProps> = ({ className, alt, src, start, end }) => {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img src={src} alt={alt} className={className} ref={ref} style={{ transform, opacity }} />
  );
};

// const Schedule: React.FC = () => {
//   return (
//     <section id="launch-schedule" className="mx-auto max-w-5xl px-4 pt-2 md:pt-8 lg:pt-20 ">
//       <motion.h1
//         initial={{ y: 48, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ ease: "easeInOut", duration: 0.75 }}
//         className="mb-20 text-4xl font-black uppercase "
//       >
//         Most loved products
//       </motion.h1>
//     </section>
//   );
// };

