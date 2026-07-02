import React from "react";
import { Calendar, Hourglass, Play, Trophy, FileText } from "lucide-react";

export const TimelineSection: React.FC = () => {
  const events = [
    {
      icon: <Calendar className="w-5 h-5 text-brand-purple-light" />,
      title: "Registration Opens",
      date: "July 5, 2026",
      time: "6:00 AM IST",
      status: "upcoming",
    },
    {
      icon: <Hourglass className="w-5 h-5 text-brand-blue-light" />,
      title: "Registration Closes",
      date: "July 31, 2026",
      time: "6:00 PM IST",
      status: "upcoming",
    },
    {
      icon: <Play className="w-5 h-5 text-emerald-400" />,
      title: "Contest Day",
      date: "August 2, 2026",
      time: "1:30 Hours CodeSprint",
      status: "upcoming",
    },
    {
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
      title: "Results",
      date: "To Be Announced",
      time: "Score Verification",
      status: "tba",
    },
    {
      icon: <FileText className="w-5 h-5 text-pink-400" />,
      title: "Certificates",
      date: "After Results",
      time: "Eligible Participants",
      status: "tba",
    },
  ];

  return (
    <section id="timeline" className="py-24 px-4 bg-brand-darker/30 relative">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contest{" "}
            <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans max-w-xl mx-auto">
            Mark your calendar. Follow the milestones from registration to certificate distribution.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-20 mb-10">
          {/* Main Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-brand-purple/10 -translate-y-1/2 -z-10" />
          
          <div className="grid grid-cols-5 gap-4 relative">
            {events.map((evt, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 group">
                {/* Connector Nodes */}
                <div className="relative mb-6">
                  <div className="p-4 rounded-full bg-[#0a081c] border-2 border-brand-purple/35 group-hover:border-brand-purple-light group-hover:shadow-neon-glow transition-all duration-300 z-10 relative">
                    {evt.icon}
                  </div>
                  {/* Small outer dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-purple/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </div>

                {/* Info Text */}
                <span className="text-xs font-bold text-brand-purple-light uppercase tracking-widest mb-1.5">
                  Step {idx + 1}
                </span>
                <h4 className="text-lg font-black text-white group-hover:text-brand-purple-light transition-colors duration-200">
                  {evt.title}
                </h4>
                <p className="text-sm font-semibold text-gray-300 mt-1 font-mono">
                  {evt.date}
                </p>
                <p className="text-xs text-gray-500 font-sans mt-0.5">
                  {evt.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative max-w-lg mx-auto pl-8 sm:pl-12">
          {/* Vertical Connector Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-[3px] bg-brand-purple/15 -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((evt, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row sm:items-center group">
                {/* Bullet Node */}
                <div className="absolute -left-8 sm:-left-12 top-0 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 p-2.5 rounded-full bg-[#0a081c] border-2 border-brand-purple/35 group-hover:border-brand-purple-light group-hover:shadow-neon-glow transition-all duration-300 z-10">
                  {evt.icon}
                </div>

                {/* Event Description Card */}
                <div className="rounded-2xl glass-panel border border-brand-purple/10 p-5 w-full hover:border-brand-purple/30 transition-all duration-300 shadow-card-glow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-brand-purple-light uppercase tracking-widest">
                      Milestone {idx + 1}
                    </span>
                    {evt.status === "tba" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-gray-400 border border-white/10 uppercase">
                        TBA
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-black text-white group-hover:text-brand-purple-light transition-colors duration-200">
                    {evt.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
                    <p className="text-sm font-bold text-gray-300 font-mono">
                      {evt.date}
                    </p>
                    <p className="text-xs text-gray-500 font-sans">
                      {evt.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
