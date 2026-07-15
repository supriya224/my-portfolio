import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

export default function RideCaseStudy() {
  return (
    <MainLayout>
      <div className="grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link
            to="/project"
            className="text-[#0146b5] dark:text-[#91bbff] font-medium hover:text-blue-900">
            ← Back
          </Link>
        </div>
        {/* HERO */}
        {/* ================= PROJECT OVERVIEW ================= */}

        <section className="px-10 py-10 grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
          <div className="max-w-6xl mx-auto">
            <span className="uppercase tracking-[4px] text-[#0146b5] dark:text-[#91bbff] text-sm">
              Project Overview
            </span>

            <h2 className="text-5xl font-bold mt-6 mb-8">
              Making Daily Commutes
              <br />
              More Affordable & Convenient
            </h2>

            <p className="text-zinc-400 leading-9 text-lg max-w-4xl font-mono">
              Ride sharing has become an essential part of urban transportation,
              but existing solutions often focus on either individual ride
              booking or carpooling—not both. This project explores a unified
              experience that allows users to instantly book rides while also
              encouraging shared travel for cost savings and sustainability.
            </p>

            <p className="text-zinc-400 leading-9 text-lg mt-8 max-w-4xl font-mono">
              The goal was to create a seamless booking experience that
              minimizes user effort, improves trust between riders and drivers,
              and provides flexible transportation options based on users' daily
              needs.
            </p>
          </div>
        </section>

        {/* ================= PROJECT DETAILS ================= */}
        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto">
            <span className="uppercase tracking-[2px] text-[#0146b5] dark:text-[#91bbff] text-sm">
              Project Details
            </span>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-200  p-8">
                <p className="text-zinc-500 text-sm mb-3">My Role</p>

                <h3 className="text-xl font-semibold font-sans">
                  Product Designer
                </h3>
              </div>
              {/* className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-400 p-6"> */}
              <div className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-200  p-8">
                <p className="text-zinc-500 text-sm mb-3">Timeline</p>

                <h3 className="text-xl font-semibold font-sans">4–6 Weeks</h3>
              </div>

              <div className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-200  p-8">
                <p className="text-zinc-500 text-sm mb-3">Platform</p>

                <h3 className="text-xl font-semibold font-sans">
                  Android & iOS
                </h3>
              </div>

              <div className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-200  p-8">
                <p className="text-zinc-500 text-sm mb-3">Tools</p>

                <h3 className="text-xl font-semibold font-sans">Figma</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM STATEMENT ================= */}

        <section className="px-10 py-10 grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
          <div className="max-w-6xl mx-auto">
            <span className="uppercase tracking-[2px] text-[#0146b5] dark:text-[#91bbff] text-sm">
              Problem Statement
            </span>

            <h2 className="text-5xl font-bold mt-6 mb-10">
              Existing Ride Apps Don't Solve Every Commuter's Need
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className=" p-8 bg-[#d0cece] text-zinc-700 rounded-3xl border border-zinc-200 ">
                <h3 className="text-2xl font-semibold mb-5">User Challenges</h3>

                <ul className="space-y-4 text-zinc-600 leading-7 font-sans font-semibold">
                  <li>• High ride costs during peak hours.</li>

                  <li>• Limited availability of affordable transportation.</li>

                  <li>• Difficulty finding trusted carpool partners.</li>

                  <li>• Complicated booking and payment flows.</li>

                  <li>• No flexibility between solo rides and shared rides.</li>
                </ul>
              </div>

              <div className=" p-8 bg-[#d0cece] text-zinc-700 rounded-3xl border border-zinc-200 ">
                <h3 className="text-2xl font-semibold mb-5">
                  Business Challenges
                </h3>

                <ul className="space-y-4 text-zinc-700 leading-7 font-sans font-semibold">
                  <li>• Increase ride bookings.</li>

                  <li>• Improve carpool adoption.</li>

                  <li>• Reduce booking abandonment.</li>

                  <li>• Build user trust.</li>

                  <li>• Encourage long-term engagement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DESIGN GOALS ================= */}

        <section className="px-10 py-10">
          <div className="max-w-6xl mx-auto">
            <span className="uppercase tracking-[4px] text-[#0146b5] dark:text-[#91bbff] text-sm">
              Design Goals
            </span>

            <h2 className="text-5xl font-bold mt-6 mb-12">
              Creating a Better Booking Experience
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Reduce booking time",
                "Improve navigation",
                "Simplify ride discovery",
                "Increase trust & safety",
                "Support instant & scheduled rides",
                "Improve booking conversion"
              ].map((goal) => (
                <div
                  key={goal}
                  className=" p-8 bg-[#d0cece] text-zinc-700 rounded-3xl border border-zinc-200 ">
                  <h3 className="font-semibold font-sans text-lg">{goal}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RESEARCH PROCESS ================= */}

        <section className="px-10 py-10 ">
          <div className="max-w-6xl mx-auto">
            <span className="uppercase tracking-[4px] text-[#0146b5] dark:text-[#91bbff] text-sm">
              Research Process
            </span>

            <h2 className="text-5xl font-bold mt-6 mb-12">
              Understanding Users
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                "Competitive Analysis",
                "User Interviews",
                "Online Survey",
                "Journey Mapping",
                "Usability Review"
              ].map((step) => (
                <div
                  key={step}
                  className=" p-4 text-center bg-[#d0cece] text-zinc-700 rounded-3xl border border-zinc-200 ">
                  <h3 className="font-semibold font-sans">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
