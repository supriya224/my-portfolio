import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface CursorProps {
  dark: boolean;
}

export default function Cursor({ dark }: CursorProps) {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 25
  });

  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 25
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    const elements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none">
      {/* Default Cursor */}
      {!isHovering && (
        <motion.img
          src={dark ? "/dark-main.png" : "/blue-main.png"}
          alt="Cursor"
          className="w-10 h-10"
          animate={{
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
      )}

      {/* Hover Cursor */}
      {isHovering && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="relative w-20 h-20 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              // key={i}
              className="absolute w-5 h-5 rounded-full"
              style={{
                backgroundColor: dark ? "#6079FF" : "#0146B5",
                transform: `
            rotate(${i * 60}deg)
            translateY(-28px)
          `,
                transformOrigin: "center center"
              }}
            />
          ))}

          <img
            src={dark ? "/dark_hover.png" : "/blue-hover.png"}
            alt="Hover Cursor"
            className="relative z-10 w-10 h-10"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
