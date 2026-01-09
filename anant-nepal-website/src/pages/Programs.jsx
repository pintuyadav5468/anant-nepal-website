import React, { useState } from "react";
import ProgramCard from "../components/ProgramCard";

const PROGRAMS = [
  {
    id: 1,
    cat: "governance",
    title: "Governance Advocacy",
    leader: "Rohan Pablab",
    role: "Executive Director",
    location: "Dhanusha, Province 2",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 2,
    cat: "livelihood",
    title: "Sustainable Livelihoods",
    leader: "Sita Sharma",
    role: "Chairperson",
    location: "Karnali & Sudurpaschim",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1589182397057-b1617b71096b?w=400",
  },
  {
    id: 3,
    cat: "climate",
    title: "Climate Resilience",
    leader: "Ram Thapa",
    role: "Treasurer",
    location: "Terai Flood-Prone Districts",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400",
  },
  {
    id: 4,
    cat: "governance",
    title: "Human Rights",
    leader: "Rohan Pablab",
    role: "Executive Director",
    location: "National",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400",
  },
];

export default function Programs() {
  const [filter, setFilter] = useState("all");

  const filteredPrograms =
    filter === "all" ? PROGRAMS : PROGRAMS.filter((p) => p.cat === filter);

  return (
    <div className="px-4 sm:px-8 max-w-7xl mx-auto py-20">
      <h2 className="text-4xl font-black text-slate-900 mb-8">Programs</h2>
      <div className="flex gap-4 mb-6">
        {["all", "governance", "livelihood", "climate"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${
              filter === category
                ? "bg-teal-600 text-white"
                : "bg-slate-200 text-slate-600 hover:bg-teal-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}