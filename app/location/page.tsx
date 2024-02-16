"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import Navbar from "@/components/ui/navbar";
import group from "@/assets/group.jpeg";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cyan-100">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, translateY: 250 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="h-[40rem] w-full flex items-center justify-center "
      >
        <PinContainer
          title="📍 University of Agricultural Sciences"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-100">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <Image
              src={group}
              alt="Group"
              className="w-fulll h-full rounded-xl"
            />
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          </div>
        </PinContainer>
      </motion.div>
    </div>
  );
}
