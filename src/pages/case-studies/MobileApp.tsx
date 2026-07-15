// import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

const apps = [
  {
    id: 1,
    title: "AI Text to Speech",
    image: "/text.png",
    role: "UX/UI Designers",
    duration: "2 Weeks",
    platform: "Mobile App",
    figma:
      "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-345&t=N3z4uixgYTIuSshB-0",
    overview:
      "An AI-powered text-to-speech application that converts written text into natural voice output with multiple language and voice options.",

    problem:
      "Users needed an easy way to convert long text into speech while maintaining natural voice quality and accessibility.",

    features: [
      "AI Voice Generation",
      "Multiple Languages",
      "Voice Speed Control",
      "Download Audio",
      "History",
      "Dark Mode"
    ]
  },

  {
    id: 2,
    title: "Jewelry App",
    image: "/Lumera.png",
    role: "UX/UI Designer",
    duration: "2 Days",
    platform: "E-commerce",
    figma:
      "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-8932&t=N3z4uixgYTIuSshB-0",
    overview:
      "Luxury jewelry shopping experience with elegant UI, wishlist, secure checkout, and personalized recommendations.",

    problem:
      "Customers struggled to browse premium collections and compare products on mobile devices.",

    features: [
      "Luxury Catalog",
      "Wishlist",
      "Secure Checkout",
      "Product Filters",
      "Reviews",
      "Order Tracking"
    ]
  },

  {
    id: 3,
    title: "Finura – AI Finance Management App",
    image: "/finura.png",
    role: "UX/UI Designer",
    duration: "2 Weeks",
    platform: "FinTech",
    figma:
      "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=28-5245&t=N3z4uixgYTIuSshB-0",

    overview:
      "Finura is a modern AI-powered personal finance management app that helps users track expenses, manage savings, monitor transactions, and achieve financial goals through a simple and intuitive mobile experience.",

    problem:
      "Managing personal finances across multiple accounts, cards, and transactions can be overwhelming. Users often struggle to track spending, save consistently, and gain clear insights into their financial habits.",

    features: [
      "AI-Powered Expense Tracking",
      "Savings Goal Management",
      "Secure Authentication",
      "Digital Wallet Dashboard",
      "Transaction History",
      "Cards & Account Management"
    ]
  }
];

export default function MobileApp() {
  // const [activeTab] = useState(apps[0]);

  return (
    <MainLayout>
      <section className="min-h-screen grid-bg bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white px-8 py-20">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link to="/project" className="text-[#0146b5] hover:text-purple-300">
            ← Back to Projects
          </Link>
        </div>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">Mobile Apps</p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Application Collection
          </h1>
        </div>

        {/* Tabs */}

        <div className="max-w-7xl mx-auto space-y-10">
          {apps.map((app) => (
            <motion.div
              key={app.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-[32px] border border-neutral-300 dark:border-neutral-700 overflow-hidden">
              <div className="grid lg:grid-cols-2 items-center">
                {/* Image */}

                <div className=" dark:group-hover:opacity-100 bg-gradient-to-b from-white/20 via-[#91bbff] dark:bg-[#111] p-10">
                  <img src={app.image} alt={app.title} className="w-full" />
                </div>

                {/* Content */}

                <div className="p-10">
                  {/* <span className="text-[#0146b5] uppercase tracking-[0.25em] text-sm">
            {app.category}
          </span> */}

                  <h2 className="text-5xl font-bold mt-4">{app.title}</h2>

                  <div className="grid grid-cols-3 gap-8 mt-10">
                    <div>
                      <p className="text-sm text-neutral-500">Role</p>
                      <h4>{app.role}</h4>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500">Duration</p>
                      <h4>{app.duration}</h4>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500">Platform</p>
                      <h4>{app.platform}</h4>
                    </div>
                  </div>

                  <div className="flex gap-5 mt-12 font-mono font-semibold">
                    <a
                      href={app.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#0146b5] text-white">
                      View Figma ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
