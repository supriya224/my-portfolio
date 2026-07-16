import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

const landingPages = [
  {
    title: "Ecommerece Fashion website",
    image: "/fashion.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10682&t=mQMgv9jqaGnfIKRt-0"
  },
  {
    title: "Skincare Brand",
    image: "/bareskin.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10337&t=mQMgv9jqaGnfIKRt-0"
  },
  {
    title: "Jewelry Website",
    image: "/jweel.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-15290&t=mQMgv9jqaGnfIKRt-0"
  },
  {
    title: "AI Business Website",
    image: "/ai_app.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-13565&p=f&t=mQMgv9jqaGnfIKRt-0"
  }
];

export default function LandingPages() {
  return (
    <MainLayout>
      <section className="min-h-screen grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white  px-8 py-20">
        <div className=" mx-auto px-6  ">
          <Link to="/project" className="text-[#0146b5] hover:text-blue-900">
            ← Back to Projects
          </Link>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] dark:text-white  text-center mb-3">
            COLLECTION
          </p>

          <h1 className="text-6xl font-bold mb-16 dark:text-white">
            Landing Pages
          </h1>

          <div className="grid md:grid-cols-2 gap-10 h-fit relative">
            {landingPages.map((item) => {
              const isExternal = item.link.startsWith("http");

              const CardContent = (
                <div className="relative overflow-hidden rounded-3xl group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {item.title}
                    </h2>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-white/80 hover:text-[#0146b5] transition">
                      View Project ↗
                    </a>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#181818] rounded-3xl border border-[#2b2b2b] overflow-hidden">
                  {isExternal ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {CardContent}
                    </a>
                  ) : (
                    <Link to={item.link}>{CardContent}</Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
