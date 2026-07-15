import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

export default function VolvoPartnerConnect() {
  const [activeTab, setActiveTab] = useState("volvo");

  return (
    <MainLayout>
      <div className="min-h-screen grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
        {/* Back Button */}

        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-[#91bbff] transition tracking-wide">
            ← Back to Projects
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-2 font-sans  font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("volvo")}
            className={`px-6 py-3 rounded-full ${
              activeTab === "volvo"
                ? "bg-[#91bbff]  text-black"
                : "bg-zinc-800 text-white"
            }`}>
            Volvo Partner Connect
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("fire")}
            className={`px-6 py-3 rounded-full ${
              activeTab === "fire"
                ? "bg-[#91bbff]  text-black"
                : "bg-zinc-800 text-zinc-300"
            }`}>
            Fire Detection
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("welding")}
            className={`px-6 py-3 rounded-full ${
              activeTab === "welding"
                ? "bg-[#8bb4f6]  text-black"
                : "bg-zinc-800 text-zinc-300"
            }`}>
            Welding Dashboard
          </button>
        </div>

        {/* volvo project */}
        {activeTab === "volvo" && (
          <>
            {/* ================= Project Overview ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10 ">
              <div className="max-w-4xl">
                <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                  Project Overview
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8 tracking-wide  ">
                  Redesigning an Enterprise Dealer Management Platform
                </h2>

                <p className="text-zinc-400 leading-8 text-lg font-mono">
                  Volvo Partner Connect 2.0 is an enterprise web platform
                  designed to streamline dealership operations, monitor business
                  performance, and provide centralized access to operational
                  data across multiple business modules. The platform enables
                  dealer partners to efficiently manage investments, scorecards,
                  infrastructure, financial health, and business planning
                  through an integrated digital experience.
                </p>
              </div>
            </section>

            {/* ================= My Role ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold mb-10 text-[#0146b5]  dark:text-[#91bbff]">
                  My Role
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "UX Researchs",
                    "UX/UI Design",
                    "Dashboard Design",
                    "Information Architecture",
                    "User Flow",
                    "Wireframing",
                    "Design System",
                    "Responsive Designs",
                    "Developer Handoff"
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#d0cece] rounded-2xl p-5 border border-zinc-400 font-sans font-medium">
                      <p className="text-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Problem ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                    Problem
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">Challenges</h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>• Complex dealer workflows</li>

                    <li>• Multiple disconnected modules</li>

                    <li>• Heavy data tables reduced readability</li>

                    <li>• Inconsistent dashboard layouts</li>

                    <li>• Difficult KPI tracking</li>

                    <li>• Lack of reusable UI components</li>
                  </ul>
                </div>

                <div>
                  <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                    Goals
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">Objectives</h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>• Improve usability</li>

                    <li>• Simplify navigation</li>

                    <li>• Enhance dashboard readability</li>

                    <li>• Standardize UI components</li>

                    <li>• Improve analytics visibility</li>

                    <li>• Build scalable design system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ================= Modules ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                  Modules Designed
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-12">
                  Enterprise Modules
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                  {[
                    "Dealer Investment",
                    "Monthly Business Plan",
                    "Equipment Type",
                    "Allocation",
                    "Scorecard",
                    "Scorecard Trend",
                    "Infrastructure",
                    "Dealer Financial Health Monitor",
                    "Marketing (MarCom)",
                    "Contact Management",
                    "Organization Structure",
                    "Chatter"
                  ].map((module) => (
                    <div
                      key={module}
                      className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-400 p-6">
                      <h3 className="font-semibold text-lg">{module}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Outcome ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                Outcome
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">Results</h2>

              <p className="text-zinc-600 text-lg leading-8 max-w-4xl font-mono">
                The redesigned platform improved navigation, simplified
                enterprise workflows, standardized UI components, and enhanced
                dashboard readability. The new experience helped organize
                complex business information into scalable and user-friendly
                interfaces, making daily operational tasks more efficient for
                dealer partners and internal teams.
              </p>
            </section>

            {/* ================= Learnings ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-12">
                <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                  Learnings
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8">Key Takeaways</h2>

                <p className="text-zinc-400 text-lg leading-8 max-w-4xl font-mono">
                  Working on Volvo Partner Connect strengthened my understanding
                  of enterprise product design, dashboard usability, complex
                  workflows, and scalable design systems. Collaborating closely
                  with developers and stakeholders helped me balance business
                  requirements with intuitive user experiences while maintaining
                  consistency across multiple product modules.
                </p>
              </div>
            </section>
          </>
        )}

        {/* fire detection */}
        {activeTab === "fire" && (
          <>
            {/* ================= Project Overview ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <div className="max-w-4xl">
                <span className=" dark:text-[#91bbff]  uppercase tracking-[4px] text-sm">
                  Project Overview
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8 tracking-wide">
                  AI-Powered Fire Detection Dashboard
                </h2>

                <p className="text-zinc-400 leading-8 text-lg font-mono">
                  The Fire Detection Dashboard is an industrial monitoring
                  platform designed to detect fire incidents in real time using
                  AI-powered cameras and sensors. The dashboard provides live
                  monitoring, incident alerts, camera feeds, and historical
                  analytics to help operators respond quickly and minimize
                  safety risks across industrial facilities.
                </p>
              </div>
            </section>

            {/* ================= My Role ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold mb-10">My Role</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "UX Research",
                    "Dashboard UX",
                    "UI Design",
                    "Real-time Monitoring",
                    "Data Visualization",
                    "Alert Experience",
                    "Responsive Design",
                    "Component Design",
                    "Developer Collaboration"
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#d0cece] rounded-2xl p-5 border border-zinc-400 font-sans font-medium">
                      <p className="text-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Challenges ================= */}

            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <span className="text-[#0146b5] dark:text-[#91bbff] uppercase tracking-[4px] text-sm">
                    Challenges
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">
                    Problem Statement
                  </h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>• Critical alerts needed immediate visibility.</li>

                    <li>
                      • Operators monitored multiple camera feeds
                      simultaneously.
                    </li>

                    <li>
                      • Large amounts of live data created cognitive overload.
                    </li>

                    <li>
                      • Incident tracking lacked a clear visual hierarchy.
                    </li>

                    <li>
                      • Users needed fast access to emergency information.
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                    Goals
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">Objectives</h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>• Improve emergency response time.</li>

                    <li>• Highlight critical alerts instantly.</li>

                    <li>• Simplify monitoring workflows.</li>

                    <li>• Improve situational awareness.</li>

                    <li>• Design scalable dashboard components.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ================= Features ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                  Features
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-12">
                  Dashboard Modules
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Live Camera Monitoring",
                    "Real-time Fire Alerts",
                    "Incident History",
                    "Alert Timeline",
                    "Location Monitoring",
                    "AI Detection Status",
                    "Camera Health",
                    "Notification Center",
                    "Analytics Dashboard"
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-400 p-6">
                      <h3 className="font-semibold font-sans text-lg">
                        {feature}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Outcome ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                Outcome
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">Results</h2>

              <p className="text-zinc-400 text-lg leading-8 max-w-4xl font-mono">
                The redesigned dashboard improved visibility of critical
                incidents, simplified real-time monitoring, and organized
                operational data into a clear and actionable interface. The
                design enables operators to identify fire events faster, monitor
                system health efficiently, and make informed decisions during
                emergency situations.
              </p>
            </section>

            {/* ================= Learnings ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                  Learnings
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8">Key Takeaways</h2>

                <p className="text-zinc-400 text-lg leading-8 max-w-4xl font-mono">
                  Designing a real-time monitoring dashboard reinforced the
                  importance of visual hierarchy, prioritizing critical
                  information, and reducing cognitive load. Every interface
                  decision focused on helping operators recognize alerts quickly
                  and respond efficiently in time-sensitive scenarios.
                </p>
              </div>
            </section>
          </>
        )}

        {/* welding dashboard */}
        {activeTab === "welding" && (
          <>
            {/* ================= Project Overview ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <div className="max-w-4xl">
                <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                  Project Overview
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8 tracking-wide">
                  Mother India Welding Dashboard
                </h2>

                <p className="text-zinc-400 leading-8 text-lg">
                  The Mother India Welding Dashboard is an industrial analytics
                  platform developed to monitor welding operations, machine
                  performance, production efficiency, and quality metrics in
                  real time. The dashboard provides manufacturing teams with
                  centralized visibility into operational performance, enabling
                  faster decision-making and continuous process improvement
                  across production lines.
                </p>
              </div>
            </section>

            {/* ================= My Role ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold mb-10">My Role</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "UX Research",
                    "Dashboard UX",
                    "Industrial UI Design",
                    "Data Visualization",
                    "Analytics Dashboard",
                    "Component Design",
                    "Responsive Design",
                    "Design System",
                    "Developer Collaboration"
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-400 p-6">
                      <p className="text-zinc-800 font-semibold font-sans">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Challenges ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                    Challenges
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">
                    Problem Statement
                  </h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>
                      • Production data was distributed across multiple systems.
                    </li>

                    <li>
                      • Supervisors lacked a centralized monitoring dashboard.
                    </li>

                    <li>
                      • Machine performance trends were difficult to analyze.
                    </li>

                    <li>• Quality metrics required faster visibility.</li>

                    <li>
                      • Manufacturing teams needed quick access to operational
                      KPIs.
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                    Goals
                  </span>

                  <h2 className="text-4xl font-bold mt-6 mb-6">Objectives</h2>

                  <ul className="space-y-5 text-zinc-500 font-sans font-medium">
                    <li>• Centralize production monitoring.</li>

                    <li>• Improve machine performance visibility.</li>

                    <li>• Simplify quality tracking.</li>

                    <li>• Enable real-time production insights.</li>

                    <li>• Build reusable dashboard components.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ================= Features ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                  Features
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-12">
                  Dashboard Modules
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Production Overview",
                    "Machine Health",
                    "Weld Quality Analysis",
                    "Shift Performance",
                    "Production Trends",
                    "Downtime Monitoring",
                    "KPI Dashboard",
                    "Maintenance Tracking",
                    "Reports & Analytics"
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="bg-[#d0cece] text-zinc-700 rounded-2xl border border-zinc-400 p-6">
                      <h3 className="font-semibold text-lg font-sans">
                        {feature}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= Outcome ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">
              <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                Outcome
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">Results</h2>

              <p className="text-zinc-400 text-lg leading-8 max-w-4xl font-mono">
                The redesigned dashboard provided manufacturing teams with a
                centralized view of production performance, machine health, and
                quality metrics. By organizing complex operational data into
                clear visual dashboards, the platform supported faster
                decision-making, improved production monitoring, and enhanced
                overall operational efficiency.
              </p>
            </section>

            {/* ================= Learnings ================= */}

            <section className="">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <span className="text-[#0146b5] uppercase tracking-[4px] text-sm">
                  Learnings
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8">Key Takeaways</h2>

                <p className="text-zinc-400 text-lg leading-8 max-w-4xl font-mono">
                  Designing dashboards for manufacturing environments
                  strengthened my understanding of industrial workflows,
                  operational analytics, and real-time data visualization. The
                  project emphasized creating interfaces that balance large
                  volumes of production data with clarity, usability, and
                  efficient decision-making.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </MainLayout>
  );
}
