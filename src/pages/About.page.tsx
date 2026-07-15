import { motion } from "framer-motion";
import { useState } from "react";
import { MainLayout } from "../layouts";

export default function About() {
  const [hover, setHover] = useState(true);

  return (
    <MainLayout>
      <section className="w-full px-6 py-20 grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white  grid-bg">
        <h1 className="text-5xl md:text-7xl font-black mb-10">ABOUT ME</h1>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 ">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-8 font-['Inter']">
              I take ownership of the complete design process—from understanding
              user needs and business goals to creating wireframes, design
              systems, prototypes, and developer-ready interfaces.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-8 font-['Inter']">
              Over the past year, I've designed enterprise dashboards,
              AI-powered products, SaaS platforms, landing pages, and mobile
              applications. My focus is on simplifying complex workflows into
              clean, scalable, and user-friendly experiences.
            </p>

            {/* EXPERIENCE */}
            <div className="pt-6 space-y-3 font-sans">
              <p className="font-semibold">Experience</p>
              <div className="border-l-2 border-blue-800 dark:border-[#91bbff] pl-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">
                      UX/UI & Product Designer
                    </h4>
                    <p className="text-blue-800 dark:text-[#91bbff]">
                      Advitiix Technovate Pvt. Ltd.
                    </p>
                  </div>

                  <span className="text-sm text-neutral-500">
                    Oct 2025 — Present
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-7 font-serif">
                  <li>
                    • Designed AI-powered enterprise dashboards and web
                    applications.
                  </li>
                  <li>
                    • Created scalable design systems and reusable UI
                    components.
                  </li>
                  <li>
                    • Collaborated with stakeholders and developers from concept
                    to implementation.
                  </li>
                  <li>
                    • Simplified complex workflows into intuitive user
                    experiences.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">
                      UX/UI & Graphic Designer
                    </h4>
                    <p className="text-blue-800 dark:text-[#91bbff]">
                      Central Data Storage (Remote)
                    </p>
                  </div>

                  <span className="text-sm text-neutral-500">
                    Apr 2025 — Sep 2025
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-7 font-serif">
                  <li>• Designed responsive websites and landing pages.</li>
                  <li>• Built visual identities and marketing assets.</li>
                  <li>• Improved user journeys and visual consistency.</li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold font-prose">
                      Full Stack Developer Intern
                    </h4>
                    <p className="text-blue-800 dark:text-[#91bbff]">
                      Touch Cloud Computing Technologies
                    </p>
                  </div>

                  <span className="text-sm text-neutral-500">
                    Sep 2024 — Mar 2025
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-7 font-serif">
                  <li>
                    • Developed full-stack applications using React, Next.js and
                    TypeScript.
                  </li>
                  <li>• Worked with MongoDB, APIs and AWS S3.</li>
                  <li>
                    • Gained a strong understanding of development workflows
                    that now informs my design process.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* right side  */}
          <div
            className="relative flex flex-col items-center px-12 py-2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {/* IMAGE */}
            <div className="relative">
              <img
                src="/about.jpeg"
                alt="profile"
                className="w-full max-w-[560px] grayscale"
              />

              {/* Border */}
              <div className="absolute -inset-5 border-2 border-dashed border-black dark:border-white/40" />

              {/* Corners */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-black dark:bg-white " />
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-black dark:bg-white" />
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-black dark:bg-white" />
              <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-black dark:bg-white" />
            </div>
            {[
              {
                text: "UI/UX Designer",
                className: "top-0 left-10 dark:text-black"
              },
              { text: "Developer", className: "top-1 right-0 dark:text-black" },
              {
                text: "Vibe Coder",
                className: "top-14 right-6 dark:text-black"
              },
              {
                text: "Product designer",
                className: "left-0 top-1/2 -translate-y-1/9 dark:text-black"
              },
              {
                text: "Graphic Deisgner",
                className: "top-48 right-1 dark:text-black"
              },
              {
                text: "Figma Designer",
                className: "top-12 -left-10 dark:text-black"
              },
              {
                text: "Visual Designer",
                className: "top-32 left-20 dark:text-black"
              }
            ].map((tag, i) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  hover
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.2, y: 20 }
                }
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`absolute ${tag.className} bg-white px-4 py-2 font-sans font-medium rounded-full shadow-md text-sm`}>
                {tag.text}
              </motion.div>
            ))}
            {/* Caption */}
            <div className="mt-12 text-center max-w-xl">
              <h2 className="text-3xl md:text-4xl leading-tight font-light font-['Space_Grotesk']">
                I'm a{" "}
                <span className="font-bold italic">
                  UX/UI & Product Designer
                </span>{" "}
                working as a solo designer, transforming ideas into intuitive
                digital experiences.
              </h2>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mt-28 ">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-black">SKILLS</h2>

            <p className="text-neutral-500 uppercase tracking-[0.3em] text-sm">
              What I Work With
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
            {/* Product Design */}
            <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 p-8 hover:border-[#0146b5] transition-all">
              <h3 className="text-2xl font-semibold mb-6 font-sans">
                Product Design
              </h3>

              <div className="flex flex-wrap gap-3 font-['Space_Grotesk']">
                {[
                  "UX Design",
                  "UI Design",
                  "Product Design",
                  "Wireframing",
                  "Prototyping",
                  "Research",
                  "Design Systems",
                  "Usability"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black text-white dark:bg-white/30 dark:text-white text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 p-8 hover:border-[#0146b5] transition-all">
              <h3 className="text-2xl font-semibold mb-6 font-sans">
                Visual Design
              </h3>

              <div className="flex flex-wrap gap-3 font-['Space_Grotesk']">
                {[
                  "Brand Identity",
                  "Typography",
                  "Graphic Design",
                  "Marketing",
                  "Catalog Design",
                  "Visual Design"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black text-white dark:bg-white/30 dark:text-white text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 p-8 hover:border-[#0146b5] transition-all">
              <h3 className="text-2xl font-semibold mb-6 font-sans">
                Development
              </h3>

              <div className="flex flex-wrap gap-3 font-['Space_Grotesk']">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "MongoDB",
                  "AWS"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black text-white dark:bg-white/30 dark:text-white text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 p-8 hover:border-[#0146b5] transition-all">
              <h3 className="text-2xl font-semibold mb-6 font-sans">Tools</h3>

              <div className="flex flex-wrap gap-3 font-['Space_Grotesk']">
                {[
                  "Figma",
                  "FigJam",
                  "Canva",
                  "Framer Motion",
                  "Cursor",
                  "ChatGPT"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black text-white dark:bg-white/30 dark:text-white text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}
