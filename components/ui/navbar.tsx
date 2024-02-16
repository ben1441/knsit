import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ translateY: -250, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ width: 400 }}
        className="fixed top-[3%] w-80 h-16 rounded-full bg-cyan-400/40 backdrop-blur"
      >
        <div className="flex flex-row items-center justify-center gap-8 hover:gap-12 w-full h-full transition-all duration-500">
          <motion.a className=" text-cyan-500 font-bold" href="/">
            Home
          </motion.a>
          <motion.a className=" text-cyan-500 font-bold" href="/location">
            Location
          </motion.a>
          <motion.a className=" text-cyan-500 font-bold" href="/card">
            Card
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
