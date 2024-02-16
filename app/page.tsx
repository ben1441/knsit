"use client";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Scroll from "@/components/ui/scroll";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home" className="flex flex-col items-center justify-center gap-6 bg-cyan-100 min-w-screen min-h-screen">
        <motion.div
          initial={{ translateY: 250, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-900/40 to-cyan-200 text-6xl md:text-7xl font-bold hover:scale-105 transition-all duration-500 ease-in-out">
            SCR Report
          </h1>
          <button
            className="bg-cyan-900/30 rounded-full p-4 mt-4 hover:scale-105 transition-all duration-500 ease-in-out text-slate-50"
            onClick={() => Scroll("hero")}
          >
            Check Out
          </button>
        </motion.div>
        {/* <BackgroundGradientAnimation></BackgroundGradientAnimation> */}
      </div>
      <Hero />
    </div>
  );
}
