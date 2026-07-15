import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

export default function Eduhire() {
  return (
    <MainLayout>
      <div className="grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
        {/* Back */}
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link
            to="/project"
            className="text-[#0146b5] dark:text-[#91bbff] dark:hover:text-white">
            ← Back to Projects
          </Link>
        </div>

        {/* Hero */}

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold mt-8 text-[#0146b5] dark:text-[#91bbff]">
            Eduhire
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-8xl font-mono">
            An AI-powered e-learning platform designed to help students learn
            smarter through personalized recommendations, AI assistance, and an
            intuitive learning experience.
          </p>

          <div className="grid md:grid-cols-5 gap-12 mt-14">
            <div>
              <p className="text-zinc-500 tracking-wider ">Role</p>
              <p>UX/UI Designer</p>
            </div>

            <div>
              <p className="text-zinc-500 tracking-wider">Timeline</p>
              <p>6 Weeks</p>
            </div>

            <div>
              <p className="text-zinc-500 tracking-wider">Platform</p>
              <p>Mobile App</p>
            </div>

            <div>
              <p className="text-zinc-500 tracking-wider">Tools</p>
              <p>Figma</p>
            </div>
            <div>
              <p className="tracking-wider text-blue-700">Link</p>

              <a
                href="https://www.figma.com/design/gD7WTRylKSftCvHBxLXdO5/Edu-app?node-id=0-1&p=f&t=2ynrB58njLul6RJP-0"
                target="_blank"
                rel="noopener noreferrer">
                View in Figma
              </a>
            </div>
          </div>
        </section>

        {/* Banner */}

        <section className="max-w-7xl mx-auto px-6">
          <img src="/Edu.jpg" alt="Eduhire" className="rounded-3xl w-full" />
        </section>

        {/* Overview */}

        <section className=" mx-auto px-6 py-12">
          <h2 className="text-4xl font-semibold mb-2 text-[#0146b5] dark:text-[#91bbff]">
            Project Overview
          </h2>

          <p className=" leading-8 text-black/40 dark:text-white/40 font-sans font-semibold">
            Eduhire is an AI-powered education platform that enables students to
            access personalized learning paths, AI chatbot support, quizzes, and
            progress tracking in one place.
          </p>
        </section>

        {/* Problem */}

        <section className="py-12">
          <div className=" mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-2 text-[#0146b5] dark:text-[#91bbff]">
              Problem Statement
            </h2>

            <p className="text-black/40 dark:text-white/50 leading-8 font-sans font-semibold">
              Students often struggle to find structured learning resources and
              personalized guidance. Existing platforms overwhelm users with too
              much content and poor navigation.
            </p>
          </div>
        </section>

        {/* Solution */}

        <section className=" mx-auto px-6 py-12">
          <h2 className="text-4xl font-semibold mb-2 text-[#0146b5] dark:text-[#91bbff]">
            Solution
          </h2>

          <ul className="text-black/40 dark:text-white/50  flex gap-12 font-sans font-semibold">
            <li>• Personalized Dashboard</li>

            <li>• AI Learning Assistant</li>

            <li>• Course Recommendations</li>

            <li>• Progress Tracking</li>

            <li>• Interactive Quiz System</li>
          </ul>
        </section>

        {/* Final UI */}

        <section className="bg-white-20 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-[#0146b5] dark:text-[#91bbff] text-center mb-12">
              Final UI
            </h2>

            <img
              src="/Actual.png"
              alt="Eduhire UI"
              className="rounded-3xl w-full"
            />
          </div>
        </section>

        {/* Result */}

        <section className=" mx-auto px-6 py-24">
          <h2 className="text-4xl font-semibold mb-8">Outcome</h2>

          <p className="text-[#0146b5] dark:text-[#91bbff] leading-8 font-sans font-medium">
            The redesigned experience simplifies course discovery, improves
            engagement, and provides a scalable foundation for AI-assisted
            education.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
