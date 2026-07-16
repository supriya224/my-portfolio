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
      "a, button, input, textarea, select, img, [data-cursor]"
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

  let cursorImage = "";

  if (dark && isHovering) {
    cursorImage = "/dark_hover.png";
  } else if (dark && !isHovering) {
    cursorImage = "/dark-main.png";
  } else if (!dark && isHovering) {
    cursorImage = "/blue-hover.png";
  } else {
    cursorImage = "/blue-main.png";
  }
  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none">
      <motion.img src={cursorImage} alt="Cursor" className="w-10 h-10" />
    </motion.div>
  );
}
