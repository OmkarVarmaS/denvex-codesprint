import React from "react";
import {
  DollarSign,
  Award,
  Code,
  Clock,
  Globe,
  Rocket,
  FileBadge,
  Scale,
  CheckCircle2,
  Wifi,
  Laptop,
  Users,
  Compass,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      title: "Registration Fee",
      desc: "₹100 Only",
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      title: "Prize Pool",
      desc: "₹2,400 Total Cash",
    },
    {
      icon: <Code className="w-5 h-5 text-brand-blue-light" />,
      title: "Total Questions",
      desc: "6 Coding Challenges",
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-400" />,
      title: "Contest Duration",
      desc: "1:30 Hours Action-Packed",
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "Online Event",
      desc: "Compete from anywhere",
    },
    {
      icon: <Rocket className="w-5 h-5 text-orange-400" />,
      title: "Hosted on Unstop",
      desc: "Official competition platform",
    },
    {
      icon: <FileBadge className="w-5 h-5 text-pink-400" />,
      title: "E-Certificates",
      desc: "For all eligible participants",
    },
    {
      icon: <Scale className="w-5 h-5 text-rose-400" />,
      title: "Fair Play Evaluation",
      desc: "Score and speed-based ranking",
    },
  ];

  const eligibility = [
    { icon: <Compass className="w-5 h-5 text-brand-purple-light" />, text: "Open to everyone" },
    { icon: <Users className="w-5 h-5 text-brand-blue-light" />, text: "Students and professionals can participate" },
    { icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, text: "Individual participation only" },
    { icon: <Wifi className="w-5 h-5 text-cyan-400" />, text: "Internet connection required" },
    { icon: <Laptop className="w-5 h-5 text-brand-purple-light" />, text: "Laptop/Desktop recommended" },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[250px] h-[250px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      {/* About Main Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
            DenveX CodeSprint 2026
          </span>
        </h2>
        <p className="text-gray-300 leading-relaxed font-sans text-base sm:text-lg">
          DenveX CodeSprint 2026 is an online competitive programming contest
          designed for students, aspiring developers, and coding enthusiasts
          who enjoy solving algorithmic and problem-solving challenges.
        </p>
        <p className="text-gray-400 leading-relaxed font-sans text-sm sm:text-base mt-4">
          The competition is open to everyone and focuses on logical thinking,
          programming skills, and efficient problem-solving. Participants compete
          individually in a fair and transparent environment while challenging
          themselves against developers from different backgrounds.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="mb-24">
        <h3 className="text-xl font-extrabold uppercase tracking-widest text-center text-gray-300 mb-8">
          Contest Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 p-4 rounded-xl glass-card border border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-white/5">{h.icon}</div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {h.title}
                </h4>
                <p className="text-sm font-semibold text-white mt-0.5">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prize Pool Subsection */}
      <div className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold uppercase tracking-widest text-gray-300 mb-2">
            🏆 Contest Rewards
          </h3>
          <span className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent text-glow">
            ₹2,400
          </span>
          <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">
            Total Prize Pool
          </p>
        </div>

        {/* Podium Layout */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 max-w-4xl mx-auto px-4 mt-16">
          {/* 2nd Prize */}
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <div className="rounded-2xl glass-panel border border-slate-400/20 p-6 text-center shadow-card-glow relative overflow-hidden group hover:border-slate-400/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-400/50" />
              <span className="inline-block text-4xl mb-3">🥈</span>
              <h4 className="text-lg font-bold text-gray-300">2nd Prize</h4>
              <p className="text-3xl font-extrabold text-white font-mono mt-2">
                ₹800
              </p>
              <p className="text-xs text-gray-500 mt-1 font-sans">
                Runner Up Certificate & Cash
              </p>
            </div>
          </div>

          {/* 1st Prize */}
          <div className="w-full md:w-1/3 order-1 md:order-2 self-stretch flex flex-col justify-end">
            <div className="rounded-2xl glass-panel border border-yellow-500/30 p-8 text-center shadow-neon-purple relative overflow-hidden group hover:border-yellow-500/50 transition-all duration-300 md:scale-[1.08] bg-brand-purple/10">
              {/* Highlight background particle flare */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-400 to-amber-500" />
              <span className="inline-block text-5xl mb-4 animate-bounce">🥇</span>
              <h4 className="text-xl font-black text-yellow-400 tracking-wide uppercase">
                1st Prize
              </h4>
              <p className="text-4xl font-black text-white font-mono mt-2 text-glow">
                ₹1,000
              </p>
              <p className="text-xs text-yellow-200/80 mt-1 font-sans font-semibold">
                Winner Certificate & Cash
              </p>
            </div>
          </div>

          {/* 3rd Prize */}
          <div className="w-full md:w-1/3 order-3">
            <div className="rounded-2xl glass-panel border border-amber-700/20 p-6 text-center shadow-card-glow relative overflow-hidden group hover:border-amber-700/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-700/50" />
              <span className="inline-block text-4xl mb-3">🥉</span>
              <h4 className="text-lg font-bold text-gray-300">3rd Prize</h4>
              <p className="text-3xl font-extrabold text-white font-mono mt-2">
                ₹600
              </p>
              <p className="text-xs text-gray-500 mt-1 font-sans">
                Second Runner Up Certificate & Cash
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-sm sm:text-base font-semibold text-brand-purple-light tracking-wide italic">
          Exciting cash prizes and rewards for the top performers!
        </p>
      </div>

      {/* Eligibility Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-widest text-center text-gray-300 mb-8">
          Contest Eligibility
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {eligibility.map((el, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl glass-card border border-brand-purple/10 flex items-start space-x-3 hover:border-brand-purple/20 transition-all duration-200 ${
                i === eligibility.length - 1 && eligibility.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="mt-0.5">{el.icon}</div>
              <span className="text-sm font-medium text-gray-300 leading-snug">
                {el.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
