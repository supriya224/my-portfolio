// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

export default function FoodDashboard() {
  return (
    <MainLayout>
      <div className="grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white">
        <div className=" mx-auto px-6 pt-12 ">
          <Link
            to="/project"
            className=" text-[#0146b5] dark:text-[#91bbff] dark:hover:text-white">
            ← Back to Projects
          </Link>
        </div>
        <section className="max-w-7xl mx-auto px-6 font-semibold">
          <h1 className="text-6xl font-bold mt-8">
            Supplier Food Safety Query Management Portal
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-xl mt-6 max-w-4xl leading-9 font-mono font-normal">
            Designing a centralized platform that helps QA and Food Safety teams
            manage supplier compliance, certificates, audits, and food safety
            queries from one unified dashboard.
          </p>

          <div className="grid md:grid-cols-4 gap-3 mt-14">
            <div>
              <p className="text-zinc-500 tracking-wider">Role</p>
              <p>UX/UI Designer</p>
            </div>

            <div>
              <p className="text-zinc-500 tracking-wider">Duration</p>
              <p>5 Days</p>
            </div>

            <div>
              <p className="text-zinc-500 tracking-wider">Type</p>
              <p>Product Design Assessment</p>
            </div>

            <div>
              <p className="text-zinc-500 ">Tools</p>
              <p>Figma • FigJam • Google Sheets</p>
            </div>
          </div>
        </section>

        {/* project overview */}
        <section className=" mx-auto px-6 py-12 ">
          <h2 className="text-4xl font-semibold mb-10 text-[#0146b5] dark:text-[#91bbff]">
            Project Overview
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-9 text-lg font-sans font-medium">
            Food manufacturing companies work with hundreds of suppliers who
            must continuously meet compliance and food safety standards.
            However, compliance management is often handled through
            spreadsheets, emails, and disconnected tools, making supplier
            monitoring difficult.
            <br />
            <br />
            This concept project explores how a centralized supplier compliance
            portal can simplify document verification, query management,
            collaboration, and audit readiness while improving visibility across
            the complete supplier lifecycle.
          </p>
        </section>
        {/* bg */}
        <section className="text-black py-12">
          <div className="max-w mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-10 text-[#0146b5] dark:text-[#91bbff]">
              Background
            </h2>

            <p className="leading-9 text-lg dark:text-white/70 font-sans font-medium">
              QA teams spend a significant amount of time reviewing supplier
              certificates, validating compliance documents, tracking audits,
              and communicating with suppliers through emails. As supplier
              numbers increase, manual processes become slower, harder to
              monitor, and more prone to missing critical compliance deadlines.
            </p>
          </div>
        </section>

        {/* problem statement */}
        <section className="max-w mx-auto px-6 py-12">
          <h2 className="text-4xl font-semibold mb-14 text-[#0146b5] dark:text-[#91bbff]">
            Problem Statement
          </h2>

          <div className="grid md:grid-cols-2 gap-8 font-sans">
            <div className="border border-black dark:border-white/60  rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3 font-sans">
                Information is scattered
              </h3>

              <p className="leading-8 text-lg text-gray-500 font-sans font-medium">
                Supplier data exists across spreadsheets, emails and multiple
                systems.
              </p>
            </div>

            <div className="border border-black dark:border-white/60  rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3">Poor Visibility</h3>

              <p className="leading-8 text-lg text-gray-500 font-sans font-medium">
                QA teams struggle to identify supplier risks and pending issues
                quickly.
              </p>
            </div>

            <div className="border border-black dark:border-white/60  rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3">Manual Follow-ups</h3>

              <p className="leading-8 text-lg text-gray-500 font-sans font-medium">
                Tracking supplier responses requires repeated manual
                communication.
              </p>
            </div>

            <div className="border border-black dark:border-white/60  rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-3">Audit Readiness</h3>

              <p className="leading-8 text-lg text-gray-500 font-sans font-medium">
                Missing certificates and expired documents increase compliance
                risk.
              </p>
            </div>
          </div>
        </section>

        {/* objective */}
        <section className=" text-black dark:text-white py-12">
          <div className=" mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-12 text-[#0146b5] dark:text-[#91bbff]">
              Design Objectives
            </h2>

            <div className="grid md:grid-cols-3 gap-8 font-sans">
              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">
                  Monitor Supplier Compliance
                </h3>
              </div>

              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">
                  Centralize Communication
                </h3>
              </div>

              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">
                  Track Food Safety Queries
                </h3>
              </div>

              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">Manage Certificates</h3>
              </div>

              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">
                  Improve Audit Readiness
                </h3>
              </div>

              <div className="bg-[#d0cece] text-black rounded-2xl p-8">
                <h3 className="font-semibold text-xl">Reduce Manual Work</h3>
              </div>
            </div>
          </div>
        </section>

        {/* understand the user */}
        <section className="mx-auto px-6 pt-12">
          <h2 className="text-4xl text-[#0146b5] dark:text-[#91bbff] font-semibold mb-4">
            Understanding Users
          </h2>

          <p className="leading-8 text-lg mb-8 font-serif dark:text-white/70">
            Since this was a product design assessment, user understanding was
            derived from the provided requirements and common workflows followed
            by QA and Food Safety teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-3xl border-black dark:border-white/60 p-8">
              <h3 className="text-2xl font-semibold mb-4 tracking-wider">
                QA Manager
              </h3>

              <ul className="space-y-3 font-sans font-normal dark:text-white/70">
                <li>Review supplier documents</li>

                <li>Approve certificates</li>

                <li>Monitor compliance</li>

                <li>Track supplier risks</li>
              </ul>
            </div>

            <div className="border border-black dark:border-white/60 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4  tracking-wider">
                Food Safety Officer
              </h3>

              <ul className="space-y-3 font-sans font-normal dark:text-white/70">
                <li>Raise food safety queries</li>

                <li>Review supplier responses</li>

                <li>Validate documents</li>

                <li>Follow-up suppliers</li>
              </ul>
            </div>

            <div className="border border-black dark:border-white/60 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4  tracking-wider">
                Supplier
              </h3>

              <ul className="space-y-3 font-sans font-normal dark:text-white/70">
                <li>Upload certificates</li>

                <li>Respond to queries</li>

                <li>Track approval status</li>

                <li>Resolve compliance issues</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
