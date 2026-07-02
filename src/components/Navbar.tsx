import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { CONFIG } from "../config";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // Close menu first, then scroll after a brief delay so the DOM settles
    setIsOpen(false);
    setTimeout(() => {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -72; // account for fixed navbar height
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || isOpen
            ? "glass-nav py-3 shadow-card-glow"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#")}
              className="flex items-center space-x-2 group z-50"
            >
              <img
                src="/logo.png"
                alt="DenveX Logo"
                className="w-8 h-8 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              />
              <span className="text-xl font-black font-sans tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-brand-purple-light group-hover:to-brand-blue-light transition-all duration-300">
                Denve<span className="text-brand-purple-light font-bold">X</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-gray-300 hover:text-white hover:text-glow transition-all duration-200 font-medium text-sm tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href={CONFIG.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-sm hover:from-brand-purple-light hover:to-brand-blue-light transition-all duration-300 shadow-neon-purple hover:shadow-neon-glow"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-30 md:hidden flex flex-col"
            style={{
              background:
                "rgba(3, 2, 12, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Spacer for navbar height */}
            <div className="h-16" />

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 + 0.1 }}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center px-4 py-4 rounded-2xl text-2xl font-bold text-gray-200 hover:text-white hover:bg-brand-purple/15 active:bg-brand-purple/25 transition-all duration-200 border border-transparent hover:border-brand-purple/20"
                >
                  <span className="text-brand-purple-light text-sm font-mono mr-4 w-6 text-right opacity-60">
                    0{idx + 1}
                  </span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-12">
              <div className="h-px w-full bg-brand-purple/15 mb-6" />
              <motion.a
                href={CONFIG.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center space-x-3 w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-neon-purple active:scale-[0.98] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
