import React from "react";
import { logEvent, LOG_LEVELS } from "../utils/logger"; // Assuming you have a logger utility

const Logo = () => {
  const handleClick = () => {
    logEvent(LOG_LEVELS.INFO, "Brand logo clicked", { origin: "navbar" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl"
    >
      <div className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden shadow-sm shadow-teal-100 bg-white">
        <img
          src="/logo.jpg"
          alt="Anant Nepal logo"
          className="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-500 ease-out"
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-200/30 via-transparent to-emerald-200/40" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg sm:text-xl font-black tracking-tight text-slate-800 leading-none">
          ANANT <span className="text-teal-600">Nepal</span>
        </span>
        <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.32em] text-slate-400">
          Building Resilience
        </span>
      </div>
    </button>
  );
};

export default Logo;