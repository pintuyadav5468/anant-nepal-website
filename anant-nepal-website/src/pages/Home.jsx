import React from "react";
import Logo from "../components/Logo";
import ProgramCard from "../components/ProgramCard";

const IMPACT_STATS = [
  { label: "Districts Reached", val: "12+", color: "text-teal-600" },
  { label: "Lives Impacted", val: "50K+", color: "text-blue-600" },
  { label: "Women Participation", val: "100%", color: "text-purple-600" },
  { label: "Projects Delivered", val: "24+", color: "text-orange-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans">
      {/* HEADER */}
      <header className="bg-teal-600 text-white text-center py-4">
        <Logo />
        <h1 className="text-3xl font-bold mt-4">Welcome to Anant Nepal</h1>
        <p className="mt-2">Empowering Communities for a Resilient Future</p>
      </header>

      {/* IMPACT SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-3xl font-black ${stat.color}`}>
                {stat.val}
              </p>
              <p className="text-sm font-bold text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Program Cards */}
          <ProgramCard
            title="Governance Advocacy"
            location="Dhanusha, Province 2"
            status="Ongoing"
            leader="Rohan Pablab"
            role="Executive Director"
            img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
          />
          <ProgramCard
            title="Sustainable Livelihoods"
            location="Karnali & Sudurpaschim"
            status="Ongoing"
            leader="Sita Sharma"
            role="Chairperson"
            img="https://images.unsplash.com/photo-1589182397057-b1617b71096b?w=400"
          />
          {/* Add more ProgramCard components as needed */}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-8 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="mb-6">Support our mission and help us empower communities.</p>
        <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-bold">
          Donate Now
        </button>
      </section>
    </div>
  );
}