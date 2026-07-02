import React from "react";
import { motion } from "framer-motion";
import { Award, DollarSign, Clock, Code, ChevronDown, ArrowRight } from "lucide-react";
import { CONFIG } from "../config";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection: React.FC = () => {
  const infoCards = [
    {
      icon: <Award className="w-6 h-6 text-brand-purple-light" />,
      label: "Total Prize Pool",
      value: "₹2,400",
      description: "Cash prizes for top 3",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-blue-light" />,
      label: "Registration Fee",
      value: "₹100",
      description: "Secure individual slot",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-purple-light" />,
      label: "Contest Duration",
      value: "1:30 Hours",
      description: "Algorithmic speed run",
    },
    {
      icon: <Code className="w-6 h-6 text-brand-blue-light" />,
      label: "Coding Challenges",
      value: "6 Problems",
      description: "Easy to Hard difficulties",
    },
  ];

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#about");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden select-none">
      {/* Background Glowing Blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-purple-light animate-ping" />
          <span className="text-xs font-semibold text-brand-purple-light tracking-widest uppercase">
            {CONFIG.tagline}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white max-w-4xl"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {CONFIG.contestName}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-400 max-w-2xl font-sans"
        >
          {CONFIG.subtitle}
        </motion.p>

        {/* Countdown Timer Hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full max-w-xl"
        >
          <CountdownTimer />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={CONFIG.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full sm:w-56 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg hover:from-brand-purple-light hover:to-brand-blue-light transition-all duration-300 shadow-neon-purple hover:shadow-neon-glow hover:scale-[1.02]"
          >
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <button
            onClick={handleLearnMore}
            className="flex items-center justify-center space-x-2 w-full sm:w-44 px-8 py-4 rounded-xl glass-card border border-brand-purple/20 text-white font-bold hover:bg-white/5 transition-all duration-200"
          >
            <span>Learn More</span>
          </button>
        </motion.div>

        {/* Hero Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-4"
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-2xl glass-panel relative overflow-hidden group border border-brand-purple/15 hover:border-brand-purple/35 transition-all duration-300 shadow-card-glow"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-purple to-brand-blue opacity-50" />
              <div className="p-3 rounded-xl bg-white/5 mb-3 group-hover:bg-brand-purple/10 transition-colors duration-300">
                {card.icon}
              </div>
              <span className="text-2xl font-black text-white font-mono mb-1">
                {card.value}
              </span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest text-center mb-1">
                {card.label}
              </span>
              <span className="text-[10px] text-gray-500 text-center font-sans">
                {card.description}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={handleLearnMore}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 hidden lg:flex flex-col items-center text-gray-500 hover:text-white transition-colors duration-200"
        >
          <span className="text-xs font-bold uppercase tracking-widest mb-1">
            Scroll to Explore
          </span>
          <ChevronDown className="w-5 h-5 text-brand-purple-light" />
        </motion.button>
      </div>
    </section>
  );
};
