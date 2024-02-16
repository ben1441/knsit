import React from "react";
import Image from "next/image";
import Scroll from "@/components/ui/scroll";
import { motion } from "framer-motion";
import { PinContainer } from "./3d-pin";
import group from "@/assets/group.jpeg";

let content = [
  "Plantation",
  "Heritage Walk",
  "Food Walk",
  "Waste Management",
  "Organic Farming",
];

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center gap-6 bg-cyan-100 w-screen h-screen"
    >
      <div className="flex flex-row items-center justify-center gap-5">
        <div className="flex flex-row items-center justify-center overflow-x-auto snap-x snap-mandatory">
          {content.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 250 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}
                className="h-[40rem] w-full flex items-center justify-center shrink-0 snap-center no-scrollbar"
              >
                <PinContainer
                  title={`📍 ${item}`}
                  href="https://twitter.com/mannupaaji"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {item}
                    </h3>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                  </div>
                </PinContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => Scroll("home")}
        className="sticky rounded-full w-20 h-20 bg-cyan-900/30 flex flex-col items-center justify-center text-5xl hover:scale-105 transition-all duration-500"
      >
        ↑
      </div>
    </div>
  );
};

export default Hero;
