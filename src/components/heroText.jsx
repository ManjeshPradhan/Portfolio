import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const words = ["Secure", "Modern", "Scaleable"];

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1>Hey I am Manjesh</motion.h1>
        <div>
          <motion.p className="flex flex-col text-5xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to crafting
          </motion.p>
          <div>
            <FlipWords words={words} className="font-black text-8xl " />
          </div>
          <motion.p className="flex flex-col text-4xl font-medium text-neutral-300">
            Web solutiom
          </motion.p>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex-col md:hidden space-y-6">
        <motion.p className="font-medium text-4xl">Hey, I am Manjesh</motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300">
            Building
          </motion.p>
          <div>
            <FlipWords words={words} className="font-black text-7xl " />
          </div>
          <motion.p className="font-black text-4xl text-neutral-300">
            Web Application
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
