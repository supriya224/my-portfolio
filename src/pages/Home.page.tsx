import { motion } from "framer-motion";
import { MainLayout } from "../layouts";

const floatingAnimation = {
  y: [0, -8, 0],
  rotate: [0, 2, -2, 0]
};

export default function Hero() {
  const lines = [
    "HEY. I’M SUPRIYA MAURYA, A UX/UI AND PRODUCT DESIGNER BASED IN BANGALORE",
    "I CREATE SIMPLE, HUMAN-CENTERED DIGITAL EXPERIENCES, BLENDING DESIGN, DEVELOPMENT, AND AI."
  ];

  return (
    <MainLayout>
      <section className="h-screen w-auto overflow-hidden grid-bg relative  flex items-center justify-center bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white ">
        {/* LEFT TEXT */}
        {/* <div className="absolute top-6 left-6 text-xs leading-tight">
          <p>PORTFOLIO</p>
          <p>OF</p>
          <p>SUPRIYA</p>
          <p>MAURYA</p>
        </div> */}

        <div className="flex flex-col items-center justify-center leading-[1.0]">
          {/* <div className="text-center items-center font-"> */}
          <div className="absolute left-32  top-[10rem]  text-[80px] md:text-[240px] w-full font-black flex flex-wrap gap-2 ">
            {"UX/UI".split("").map((letter, i) => (
              <motion.span
                // key={i}
                animate={floatingAnimation}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}>
                {letter}
              </motion.span>
            ))}
          </div>

          {/* PRODUCT */}
          <p className=" absolute right-[400px] top-80 text-6xl font-serif font-thin italic">
            Product
          </p>

          {/* DESIGNER */}
          <div className=" absolute top-[25rem] text-[80px] md:text-[240px] font-black flex justify-center">
            {"DESIGNER".split("").map((letter, i) => {
              const shouldAnimate = letter === "S" || i === 7;

              return (
                <motion.span
                  // key={i}
                  animate={shouldAnimate ? floatingAnimation : {}}
                  transition={
                    shouldAnimate
                      ? {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2
                        }
                      : undefined
                  }>
                  {letter}
                </motion.span>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className=" w-full grid-bg font-sans flex flex-col items-center justify-center px-6 py-20 bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
        {/* SMALL HEADING */}
        <p className="text-sm tracking-widest mb-10">ABOUT ME</p>

        {/* BIG TEXT */}
        <div className="max-w-5xl text-sm text-center leading-[0.95]">
          {lines.map((line, i) => (
            <motion.p
              // key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15
              }}
              className="text-[28px] font-bold md:text-[40px] mb-4">
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      {/* selected works */}
    </MainLayout>
  );
}
