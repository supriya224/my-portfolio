import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-h-screen w-full grid-bg  justify-between px-6 py-16 bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center text-center gap-6">
        {/* BIG TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[50px] md:text-[140px] tracking-normal font-black leading-[1]">
          LET’S BUILD <br /> SOMETHING MEANINGFUL
        </motion.h1>

        {/* CONTACT */}
        <p className="text-xs tracking-widest mt-4">
          Available for work • UX/UI Designer • Product Designer • Visual
          Designer
        </p>

        <p className="italic font-sans tracking-tight text-xl md:text-3xl hover:opacity-70 transition cursor-pointer">
          supriyam224@gmail.com
        </p>
      </div>

      {/* BOTTOM LINKS */}
      <div className="flex font-mono bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white gap-12 items-center justify-center text-xs mt-20">
        {/* SOCIAL */}
        <div className="flex gap-10">
          <a
            href="https://www.behance.net/supriyamaurya5"
            className="hover:opacity-60">
            LINKEDIN
          </a>
          <a
            href="https://www.behance.net/supriyamaurya5"
            className="hover:opacity-60">
            BEHANCE
          </a>
          <a
            href="https://www.instagram.com/supri_241d/"
            className="hover:opacity-60">
            INSTAGRAM
          </a>
        </div>

        {/* OPTIONAL RIGHT ELEMENT */}
        <div className="hidden md:block text-right">
          <p className="text-xs opacity-60">AVAILABLE FOR FRRELANCER</p>
        </div>
      </div>
    </footer>
  );
}
