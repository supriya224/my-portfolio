"use client";

import { motion } from "framer-motion";

export default function Loader() {
  const blocks = Array.from({ length: 6 });

  return (
    <div className="fixed inset-0 z-50 flex">
      {blocks.map((_, i) => (
        <motion.div
          //   key={i}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            delay: i * 0.15,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="flex-1 bg-black"
          style={{
            clipPath: `polygon(0 , 0% 100%, 100% 100%, 100% 100%)`
          }}
        />
      ))}
    </div>
  );
}
