import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { CONFIG } from "../config";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Visual lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Get In{" "}
          <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mt-4 text-gray-400 font-sans max-w-xl mx-auto">
          Need support? Reach out to the contest organizers for registration queries or event support.
        </p>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Telephone Support Card */}
        <div className="rounded-2xl glass-panel border border-brand-purple/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-purple/35 transition-all duration-300 shadow-card-glow group">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-purple/10 transition-colors duration-300 text-brand-purple-light">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">Call Support</h4>
              <p className="text-xs text-gray-500 font-sans mt-0.5">Available for registration issues</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {CONFIG.contact.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center space-x-2 text-base font-semibold text-gray-300 hover:text-white hover:text-glow transition-all duration-200"
              >
                <span className="font-mono">{phone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Email Support Card */}
        <div className="rounded-2xl glass-panel border border-brand-purple/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-purple/35 transition-all duration-300 shadow-card-glow group">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-purple/10 transition-colors duration-300 text-brand-blue-light">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">Email Support</h4>
              <p className="text-xs text-gray-500 font-sans mt-0.5">Reach out for sponsor/general queries</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {CONFIG.contact.emails.map((email, idx) => (
              <a
                key={idx}
                href={`mailto:${email}`}
                className="flex items-center space-x-2 text-base font-semibold text-gray-300 hover:text-white hover:text-glow transition-all duration-200 break-all"
              >
                <span className="font-sans">{email}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Callout box */}
      <div className="mt-12 p-6 rounded-2xl glass-card border border-brand-purple/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-sm">
        <div className="flex items-center space-x-3 text-left">
          <MessageSquare className="w-5 h-5 text-brand-purple-light flex-shrink-0" />
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Ensure to state your registered email address and name when contacting the organizers to speed up your support ticket.
          </p>
        </div>
      </div>
    </section>
  );
};
