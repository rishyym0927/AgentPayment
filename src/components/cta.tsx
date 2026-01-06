"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, MagneticButton } from "./animations";

/* ============================================================
   CTA SECTION
   ============================================================ */
export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          {/* Gradient border container */}
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-white/20 via-white/5 to-white/20 overflow-hidden">
            <div className="bg-[#050505] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2
                  className="text-3xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Ready to build the future?
                </h2>
                <p className="text-lg text-white/50 mb-10 max-w-lg mx-auto">
                  Join 10,000+ developers building autonomous AI economies.
                  Start with our free tier—no credit card required.
                </p>

                {/* Email form */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <MagneticButton>
                    <Link
                      href="/dashboard"
                      className="px-6 py-3.5 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-colors inline-block whitespace-nowrap"
                    >
                      Get Started
                    </Link>
                  </MagneticButton>
                </div>

                <p className="text-xs text-white/30">
                  Free tier: 1,000 transactions/month • Upgrade anytime
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Developers: ["Documentation", "API Reference", "SDKs", "Examples"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer className="py-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10" />
              <span className="font-bold text-lg">X402</span>
            </div>
            <p className="text-sm text-white/40 max-w-xs">
              Payment infrastructure for autonomous AI agents.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-medium text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06]">
          <div className="text-sm text-white/30">
            © 2025 X402 Protocol. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["GitHub", "Discord", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
