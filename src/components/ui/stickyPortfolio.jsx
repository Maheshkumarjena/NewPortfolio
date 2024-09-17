"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "./AuroraBackground";
import ShimerBtn from "./ShimerBtn";
import BorderMagicBtn from "./BorderMagicBtn";
export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="h-[86vh] w-full flex ">
      <motion.div
        className=" scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-transparent h-[80vh]  md:h-[50vh]  lg:h-[50vh]  w-fit    overflow-y-scroll flex  justify-center flex-col lg:flex-row top-24 lg:top-44  space-x-10 rounded-md pt-10 m-auto "
        ref={ref}
      >
        <div className=" w-full h-[100] sticky lg:m-auto p-0 z-20 lg:block -top-[56px] lg:top-10 ">
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              " z-10   w-[90%] m-auto mt-4  lg:w-80 h-60  bg-white  overflow-hidden",
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </div>
        </div>

        <div className="   h-[50%]  lg:w-full z-[2] left-[-20px] lg:left-0   relative flex  items-start px-4 ">
          <div className="max-w-2xl m-auto mt-32 lg:mt-2">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 1,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 1,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-5"
                >
                  {item.description}
                </motion.p>
                <div className="flex mt-4 gap-2">
                  <ShimerBtn link={item.websiteLink} text="Live App" />

                  <BorderMagicBtn link={item.sourceCode} text="Source code" />
                </div>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
