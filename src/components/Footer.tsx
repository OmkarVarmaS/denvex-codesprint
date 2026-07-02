import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONFIG } from "../config";
import { LegalModal } from "./LegalModal";

// Custom SVG Icons for social links to avoid dependency discrepancies
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const termsContent = (
    <div className="space-y-4 text-sm text-gray-300">
      <p className="font-bold text-white text-base">DenveX CodeSprint 2026 Terms & Conditions</p>
      <p>By registering for the DenveX CodeSprint 2026 competitive programming contest, you agree to comply with the following rules and regulations:</p>
      <h5 className="font-bold text-white mt-3">1. Registration and Eligibility</h5>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>The registration fee is ₹100 (non-refundable).</li>
        <li>Participants must register individually. Team participation is not permitted.</li>
        <li>One registration per participant. Multiple entries from the same individual will result in disqualification.</li>
      </ul>
      <h5 className="font-bold text-white mt-3">2. Contest Rules and Code of Conduct</h5>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>All code submissions will be processed through plagiarism detection software.</li>
        <li>Any form of plagiarism, sharing code, or external assistance during the 1:30-hour contest will lead to immediate disqualification and a ban from future events.</li>
        <li>The organizers reserve the right to review, request code clarifications, and audit submissions.</li>
      </ul>
      <h5 className="font-bold text-white mt-3">3. Winner Selection and Prizes</h5>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Winners will be ranked based on total score. In the event of ties, the participant with the fastest submission time is prioritized.</li>
        <li>Organizers' decision on rankings and rewards is final and binding.</li>
        <li>Prizes will be disbursed after full audit reviews are finalized.</li>
      </ul>
    </div>
  );

  const privacyContent = (
    <div className="space-y-4 text-sm text-gray-300">
      <p className="font-bold text-white text-base">DenveX CodeSprint 2026 Privacy Policy</p>
      <p>We respect your privacy and are committed to protecting your personal data. This privacy statement explains how we handle your data:</p>
      <h5 className="font-bold text-white mt-3">1. Information We Collect</h5>
      <p>When you register or interact with our page, we collect standard registration data such as your Name, Email Address, Contact Number, and Unstop Profile details.</p>
      <h5 className="font-bold text-white mt-3">2. How We Use Your Information</h5>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>To validate and verify contest registrations.</li>
        <li>To communicate contest updates, rankings, and prize distribution.</li>
        <li>To issue e-certificates to eligible participants.</li>
      </ul>
      <h5 className="font-bold text-white mt-3">3. Data Security</h5>
      <p>We implement secure procedures to protect your data. Your contact details are never shared with or sold to third-party marketing companies. Participant details are shared with Unstop solely for operational validation of the leaderboard.</p>
    </div>
  );

  return (
    <footer className="relative bg-brand-darker border-t border-brand-purple/15 pt-16 pb-8 px-4 overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 w-fit group"
            >
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="DenveX Logo"
                  className="w-7 h-7 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-lg font-black tracking-wider text-white">
                  Denve<span className="text-brand-purple-light">X</span>
                </span>
              </div>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed font-sans">
              DenveX CodeSprint 2026 is an online competitive programming arena designed to test coding logic, speed, and efficiency. Showcase your skills, earn certificates, and win prizes!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About League
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Registration Guide
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Organizers
                </a>
              </li>
            </ul>
          </div>

          {/* Registration & Legal Links */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Resources
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={CONFIG.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-brand-blue-light hover:text-white transition-colors duration-200"
                >
                  <span>Register on Unstop</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => setModalType("terms")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-0 p-0 text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("privacy")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-0 p-0 text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="pt-8 border-t border-brand-purple/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 font-sans">
            &copy; {new Date().getFullYear()} DenveX. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href={CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-brand-purple/10 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-brand-purple/10 transition-all duration-200"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-brand-purple/10 transition-all duration-200"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modals */}
      <LegalModal
        isOpen={modalType === "terms"}
        onClose={() => setModalType(null)}
        title="Terms & Conditions"
        content={termsContent}
      />
      <LegalModal
        isOpen={modalType === "privacy"}
        onClose={() => setModalType(null)}
        title="Privacy Policy"
        content={privacyContent}
      />
    </footer>
  );
};
