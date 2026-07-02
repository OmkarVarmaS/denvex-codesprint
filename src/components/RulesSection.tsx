import React from "react";
import { ShieldCheck, Wifi, UserCheck, CheckSquare, Hammer, Smile } from "lucide-react";

export const RulesSection: React.FC = () => {
  const rules = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-purple-light" />,
      title: "Individual Participation Only",
      desc: "Collaboration, group efforts, or sharing solutions is strictly prohibited. You must compete solo.",
    },
    {
      icon: <Wifi className="w-6 h-6 text-brand-blue-light" />,
      title: "Internet Connection Required",
      desc: "Ensure stable connectivity. Platform issues caused by participant-side internet will not be compensated.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      title: "Zero Tolerance Plagiarism",
      desc: "All submissions are run through robust plagiarism checks. Copying code from any source leads to disqualification.",
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-brand-purple-light" />,
      title: "Single Registration",
      desc: "Each contestant is restricted to one Unstop registration. Multiple accounts lead to immediate bans.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-brand-blue-light" />,
      title: "Organizers' Decision is Final",
      desc: "In case of score ties or ranking disputes, DenveX administrators reserve final judgement authority.",
    },
    {
      icon: <Smile className="w-6 h-6 text-green-400" />,
      title: "Fair Play Mandate",
      desc: "Act ethically. Cheating, system exploits, or malicious activities will result in lifetime league bans.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-darker/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            League{" "}
            <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
              Rules
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans max-w-xl mx-auto">
            Please read and respect the guidelines below to maintain a competitive and fair environment.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-brand-purple/10 flex flex-col justify-between hover:border-brand-purple/35 hover:-translate-y-1 transition-all duration-300 shadow-card-glow group"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:bg-brand-purple/10 transition-colors duration-300">
                  {rule.icon}
                </div>
                <h4 className="text-lg font-black text-white group-hover:text-brand-purple-light transition-colors duration-200">
                  {rule.title}
                </h4>
                <p className="text-sm text-gray-400 font-sans mt-2.5 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
