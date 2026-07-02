import React from "react";
import { CONFIG } from "../config";
import { ArrowUpRight } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Explore the Details",
      desc: "Visit the DenveX CodeSprint website to check prizes, dates, and syllabus.",
    },
    {
      step: 2,
      title: "Click Register",
      desc: "Hit any 'Register Now' button on this landing page to begin registration.",
    },
    {
      step: 3,
      title: "Unstop Redirect",
      desc: "You will be securely redirected to the official Unstop contest registration page.",
    },
    {
      step: 4,
      title: "Log in or Sign Up",
      desc: "Create a new Unstop account or sign in to your existing one in seconds.",
    },
    {
      step: 5,
      title: "Confirm Enrollment",
      desc: "Pay the ₹100 registration fee and complete your participant profile.",
    },
    {
      step: 6,
      title: "Join the Arena",
      desc: "Log in to Unstop on August 2, 2026, and enter the contest lobby.",
    },
    {
      step: 7,
      title: "Code and Solve",
      desc: "Solve 6 coding problems in 1:30 hours. Compete with developers globally.",
      hasBadges: true,
    },
    {
      step: 8,
      title: "Results & Rewards",
      desc: "Check rankings, claim cash prizes, and download your certificates.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto relative">
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How It{" "}
          <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="mt-4 text-gray-400 font-sans max-w-xl mx-auto">
          Participating in DenveX CodeSprint is simple. Follow these 8 steps to compete.
        </p>
      </div>

      {/* Grid Layout of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((st) => (
          <div
            key={st.step}
            className="rounded-2xl glass-panel border border-brand-purple/10 p-6 flex flex-col justify-between hover:border-brand-purple/35 transition-all duration-300 relative group shadow-card-glow"
          >
            {/* Step Counter Badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-sm font-black text-white shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
              {st.step}
            </div>

            <div className="mt-2">
              <h4 className="text-lg font-black text-white group-hover:text-brand-purple-light transition-colors duration-200">
                {st.title}
              </h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
                {st.desc}
              </p>
            </div>

            {/* Custom Interactive Elements for specific steps */}
            {st.hasBadges && (
              <div className="mt-4 pt-3 border-t border-brand-purple/10 flex items-center gap-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mr-1">
                  Difficulty:
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/25">
                  Easy
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/25">
                  Med
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/25">
                  Hard
                </span>
              </div>
            )}

            {st.step === 3 && (
              <div className="mt-4">
                <a
                  href={CONFIG.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-brand-blue-light hover:text-white transition-colors duration-200"
                >
                  <span>Verify Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
