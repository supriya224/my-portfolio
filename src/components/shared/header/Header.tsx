import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import { MainLayout } from "../../../layouts";

export default function Header({ isOpen, setIsOpen }: any) {
  return (
    <MainLayout>
      <section className="w-auto dark:bg-[#1A1A1A] text-black">
        {/* 🔥 TOP RIGHT MENU BUTTON */}

        <div className="fixed flex gap-4 top-6 right-6 z-[1000]">
          <button
            type="button"
            onClick={() => {
              window.location.href =
                "mailto:supriyam224@gmail.com?subject=Let's%20Work%20Together";
            }}
            className="px-4 bg-white  border border-gray-400 rounded-md font-bold shadow hover:scale-105 transition">
            Book A Call
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-white flex gap-3 text-black px-4 py-2 border border-gray-400 rounded-md font-bold shadow hover:scale-105 transition">
            MENU <Menu />
          </button>
        </div>
        <div className="relative">
          {/* 🔥 FULL SCREEN MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.4 }}
                className="fixed w-fit top-0 right-0 h-fit bg-[#f5f2ed] dark:bg-[#1A1A1A] dark:text-white/70 z-[99] flex flex-col justify-between p-10 shadow-2xl">
                {/* CLOSE */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 left-6 text-xl">
                  ✕
                </button>

                {/* MENU LINKS */}
                <div className="flex flex-col items-end gap-6 mt-20">
                  {[
                    { name: "HOME", path: "/" },
                    { name: "ABOUT", path: "/about" },
                    { name: "WORK", path: "/project" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-6xl font-black hover:opacity-50 transition">
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* SOCIAL LINKS */}
                <div className="border-t pt-6 flex gap-6 text-sm">
                  <a
                    href="https://www.linkedin.com/in/supriya-maurya-34a85b1a7/"
                    className="hover:opacity-60">
                    LINKEDIN ↗
                  </a>
                  <a
                    href="https://www.behance.net/supriyamaurya5"
                    // target="_blank"
                    className="hover:opacity-60">
                    BEHANCE ↗
                  </a>
                  <a
                    href="https://www.instagram.com/supri_241d/"
                    // target="_blank"
                    // ref={hhh}
                    className="hover:opacity-60">
                    INSTAGRAM ↗
                  </a>
                  <a href="/" target="_blank" className="hover:opacity-60">
                    DRIBBBLE ↗
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MainLayout>
  );
}
