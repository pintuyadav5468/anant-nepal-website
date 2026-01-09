import React from "react";

const ProgramCard = ({ program, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(program)}
      className="text-left group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={program.img}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt={program.title}
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-black uppercase text-teal-600 tracking-widest shadow-sm">
          {program.cat}
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
          {program.title}
        </h3>
        <p className="text-[11px] font-semibold text-slate-500 mb-4">
          {program.location} • {program.status}
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg grayscale group-hover:grayscale-0 transition-all duration-300">
            👤
          </div>
          <div>
            <p className="text-sm font-black text-slate-800">
              {program.leader}
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              {program.role}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProgramCard;