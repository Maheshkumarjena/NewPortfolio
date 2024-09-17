"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BorderMagicBtn from "@/components/ui/BorderMagicBtn";
import ShimerBtn from "@/components/ui/ShimerBtn";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 md:gap-4 lg:gap-8">
        {/* IMAGE CONTAINER */}
        <div className="h-[30%] sm:h-[35%] md:h-[45%] lg:h-full lg:w-1/2 relative  ">
          <Image src="/me2.0_thumbnail.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-[70%] sm:h-[60%] md:h-[55%] lg:h-full lg:w-1/2 flex flex-col gap-8 items-center  sm:justify-center mt-[6vw] sm:mt-0 justify-start">
          {/* TITLE */}
          <h1 className="text-2xl z-50 md:text-6xl font-bold">
            Building Seamless Digital Experiences, Engineering the Future of the
            Web.{" "}
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full z-50 flex gap-4">
            <BorderMagicBtn text="View my Projects" link="/portfolio" />
            <ShimerBtn text="Contact Me" link="/contact" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
