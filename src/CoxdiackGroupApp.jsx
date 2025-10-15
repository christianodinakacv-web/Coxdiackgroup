/* main app code omitted for brevity - use full CoxdiackGroupApp.jsx in production */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const LogoSVG = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#F6C344" />
        <stop offset="100%" stopColor="#0A1931" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#071225" floodOpacity="0.25" />
      </filter>
    </defs>

    <g filter="url(#shadow)">
      <path d="M28 60 C28 36 46 20 72 20 H92 C116 20 134 36 134 60 V78 C134 86 126 92 118 92 H112 C104 92 98 86 98 78 V72 C98 64 104 58 112 58 H118 C126 58 134 64 134 72" fill="url(#g1)" />
      <path d="M166 60 C166 84 148 100 122 100 H102 C78 100 60 84 60 60 V42 C60 34 68 28 76 28 H82 C90 28 96 34 96 42 V48 C96 56 90 62 82 62 H76 C68 62 60 56 60 48" fill="url(#g1)" />
    </g>
  </svg>
);

function Sidebar({ active, setActive }) {
  return (
    <aside className="w-72 bg-[#071226] text-white min-h-screen p-6 flex flex-col gap-6 fixed left-0 top-0">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0A1931] to-[#F6C344]">
          <LogoSVG size={44} />
        </div>
        <div>
          <div className="text-lg font-bold">COXDIACK</div>
          <div className="text-xs text-[#F6C344]">GROUP</div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => setActive(n.id)}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-white/5 transition-colors ${active === n.id ? "bg-white/6 ring-1 ring-[#F6C344]/30" : ""}`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-sm text-gray-300">
        <div className="mb-2">Based: Philippines — Remote-friendly</div>
        <div className="mb-1">
          <a href="mailto:christianodinaka.cv@gmail.com" className="underline">christianodinaka.cv@gmail.com</a>
        </div>
        <div>
          <a href="https://wa.me/639166975338" rel="noreferrer" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#0A1931] hover:bg-[#14243a]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block">
              <path d="M20.52 3.48C18.18 1.14 15.02 0 11.71 0 5.07 0 .01 5.06 .01 11.71c0 2.07.54 4.08 1.56 5.87L0 24l6.55-1.52c1.71.92 3.65 1.4 5.52 1.4 6.64 0 11.7-5.06 11.7-11.71 0-3.31-1.14-6.47-3.25-8.56z" fill="#25D366" />
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="mt-4 text-xs text-gray-400">© 2025 Coxdiack Group</div>
      </div>
    </aside>
  );
}

function PageFrame({ children }) {
  return <div className="ml-72 p-8 min-h-screen bg-gradient-to-b from-[#071226] to-[#071827] text-white">{children}</div>;
}

function Home() {
  return (
    <PageFrame>
      <div className="max-w-4xl">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0A1931] to-[#F6C344] rounded-xl flex items-center justify-center shadow-lg">
            <LogoSVG size={56} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold">Connecting Creativity Across Media, Events, and Digital Space.</h1>
            <p className="mt-4 text-gray-300">Where ideas become experiences — we craft narrative-first content, reliable digital services, and event storytelling that matters.</p>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function About() {
  return (
    <PageFrame>
      <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold">About Coxdiack Group</h2>
        <p className="mt-4 text-gray-300 max-w-3xl">We are a family of media projects (Oxdiack Media & Event-MediRant) focused on storytelling, creative production, and digital support. Whether you’re planning an event or scaling online presence — we bring narrative-first thinking and practical remote services to the table.</p>
      </motion.article>
    </PageFrame>
  );
}

function Services() {
  const cards = [
    { title: "Content & Storytelling", desc: "Event highlights, social clips, editorial calendars." },
    { title: "Virtual Assistance", desc: "Inbox triage, scheduling, CRM updates." },
    { title: "Data & Operations", desc: "Excel workflows, templates, reporting." },
  ];

  return (
    <PageFrame>
      <div data-page="services">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 bg-white/5 rounded-2xl">
              <h4 className="font-semibold">{c.title}</h4>
              <p className="mt-2 text-gray-300 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

function Portfolio() {
  const images = [
    "public/images/A_vector-based_digital_graphic_design_showcases_Co.png",
    "public/images/A_logo_design_for_Coxdiack_Group_is_displayed_on_a.png",
    "public/images/A_logo_design_for_Coxdiack_Group_is_displayed_on_a.png",
  ];

  return (
    <PageFrame>
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div whileHover={{ scale: 1.03 }} key={i} className="rounded-lg overflow-hidden bg-white/3">
            <img src={src} alt={`project-${i}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h5 className="font-semibold">Project Title {i + 1}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </PageFrame>
  );
}

function Contact() {
  return (
    <PageFrame>
      <div id="contact" className="max-w-3xl">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded-lg">
            <div className="mt-4 space-y-3">
              <div><strong>Email:</strong> <a href="mailto:christianodinaka.cv@gmail.com" className="underline">christianodinaka.cv@gmail.com</a></div>
              <div><strong>WhatsApp:</strong> <a href="https://wa.me/639166975338" target="_blank" rel="noreferrer" className="underline">+63 916 697 5338</a></div>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

export default function CoxdiackGroupApp() {
  const [active, setActive] = useState("home");
  const pageVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };
  return (
    <div className="min-h-screen bg-[#071226] text-white font-sans">
      <Sidebar active={active} setActive={setActive} />
      <main className="ml-72">
        <AnimatePresence exitBeforeEnter custom={active}>
          {active === "home" && (<motion.div key="home" initial="enter" animate="center" exit="exit" variants={pageVariants} custom={1} transition={{ duration: 0.45 }}><Home /></motion.div>)}
          {active === "about" && (<motion.div key="about" initial="enter" animate="center" exit="exit" variants={pageVariants} custom={1} transition={{ duration: 0.45 }}><About /></motion.div>)}
          {active === "services" && (<motion.div key="services" initial="enter" animate="center" exit="exit" variants={pageVariants} custom={1} transition={{ duration: 0.45 }}><Services /></motion.div>)}
          {active === "portfolio" && (<motion.div key="portfolio" initial="enter" animate="center" exit="exit" variants={pageVariants} custom={1} transition={{ duration: 0.45 }}><Portfolio /></motion.div>)}
          {active === "contact" && (<motion.div key="contact" initial="enter" animate="center" exit="exit" variants={pageVariants} custom={1} transition={{ duration: 0.45 }}><Contact /></motion.div>)}
        </AnimatePresence>
      </main>
    </div>
  );
}
