import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I need an Unstop account?",
      answer: "Yes. The competition is officially hosted on the Unstop platform. Creating a free Unstop account is mandatory to register, log in, and submit your coding solutions.",
    },
    {
      question: "What is the registration fee?",
      answer: "The registration fee is ₹100. This is a one-time payment to secure your individual slot for the online competition.",
    },
    {
      question: "How many questions are there?",
      answer: "There are exactly 6 coding challenges of varying difficulties: ranging from beginner-friendly (Easy) to advanced algorithmic problems (Hard).",
    },
    {
      question: "What is the contest duration?",
      answer: "The competition runs for 1:30 hours. Once the contest is live on August 2, 2026, you will have exactly 1:30 hours to solve and submit your solutions.",
    },
    {
      question: "Can beginners participate?",
      answer: "Absolutely! The challenges are structured with mixed difficulty levels (Easy, Medium, Hard). Beginners can successfully solve the easier challenges and gain great competition experience.",
    },
    {
      question: "Is the contest online?",
      answer: "Yes, this is a fully online competition. You can participate from the comfort of your home. A computer and stable internet connection are required.",
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes. Official digital certificates will be distributed to all eligible participants who submit active, plagiarism-free solutions in the contest.",
    },
    {
      question: "How are winners selected?",
      answer: "Winners are selected automatically by the platform based on total score. In the event of a tie, the participant who achieved the score in the fastest total completion time will be ranked higher.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto relative">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="mt-4 text-gray-400 font-sans">
          Have questions? Find quick answers to common queries about DenveX CodeSprint.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl glass-panel border border-brand-purple/10 overflow-hidden hover:border-brand-purple/35 transition-all duration-300 shadow-card-glow"
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-white focus:outline-none focus:ring-0 select-none group"
              >
                <div className="flex items-center space-x-3.5 pr-4">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${isOpen ? "text-brand-purple-light" : "text-gray-400 group-hover:text-white"}`} />
                  <span className={`text-base sm:text-lg transition-colors duration-200 ${isOpen ? "text-brand-purple-light" : "text-gray-200 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-1.5 rounded-lg bg-white/5 group-hover:bg-brand-purple/10 transition-colors duration-200 ${isOpen ? "text-brand-purple-light" : "text-gray-400"}`}
                >
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                </motion.div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 pt-1 text-sm sm:text-base text-gray-400 font-sans border-t border-brand-purple/10 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
