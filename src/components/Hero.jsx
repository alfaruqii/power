import React from "react";
import { motion } from "framer-motion";

const Hero = ({ locate }) => {
  const [...data] = locate.map((header) => header[Object.keys(header)])
  return (
    <>
      <motion.section
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 10, type: "spring", stiffness: 85 }}
        className="p-4 sm:px-[25%]">
        <h1 className="font-bold text-2xl mb-5 lg:text-3xl">
          {data[0]}
        </h1>
        <h2 className="font-bold mb-1 text-lg lg:text-2xl">{data[1]}</h2>
        <p className="lg:text-lg">
          {data[2]}
        </p>
      </motion.section>

    </>
  )
}

export default Hero;
