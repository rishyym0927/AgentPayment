"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FadeIn,
  TextReveal,
  MagneticButton,
  TiltCard,
} from "./animations";

/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
const particlePositions = [
  { left: 5, top: 12, duration: 9, delay: 0.5 },
  { left: 15, top: 45, duration: 10, delay: 1.2 },
  { left: 25, top: 78, duration: 8, delay: 2.8 },
  { left: 35, top: 23, duration: 11, delay: 0.3 },
  { left: 45, top: 67, duration: 9.5, delay: 3.5 },
  { left: 55, top: 34, duration: 10.5, delay: 1.8 },
  { left: 65, top: 89, duration: 8.5, delay: 4.2 },
  { left: 75, top: 56, duration: 9, delay: 2.1 },
  { left: 85, top: 15, duration: 11.5, delay: 0.8 },
  { left: 92, top: 42, duration: 10, delay: 3.0 },
  { left: 8, top: 71, duration: 8, delay: 4.5 },
  { left: 48, top: 8, duration: 9.5, delay: 1.5 },
  { left: 72, top: 38, duration: 10, delay: 2.5 },
  { left: 28, top: 92, duration: 8.5, delay: 3.8 },
  { left: 88, top: 75, duration: 11, delay: 0.1 },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlePositions.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */
export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Particles />

      {/* Interactive spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.03), transparent 40%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-24">
          {/* Left - Main content */}
          <div className="lg:col-span-7">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-white/60">Live on Mainnet</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                AI Agents That
                <br />
                <span className="gradient-text">Pay & Execute</span>
                <br />
                Without Human Approval
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg text-white/50 max-w-lg mb-8 sm:mb-10 leading-relaxed">
                Enable your AI agents to sign and execute blockchain transactions autonomously.
                Policy-enforced security, session-based authority, and pay-per-request billing
                via X402—no wallet popups, no human-in-the-loop.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <MagneticButton>
                  <Link
                    href={session ? "/dashboard" : "/auth/signin"}
                    className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors inline-block text-center"
                  >
                    {session ? "Go to Dashboard →" : "Start Building →"}
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <button className="px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto">
                    View Docs
                  </button>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Trust indicators */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-8 sm:mt-12 text-xs sm:text-sm text-white/40">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white font-medium">Zero</span>
                  <span>wallet signatures</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white font-medium">Policy</span>
                  <span>enforced</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white font-medium">99.99%</span>
                  <span>uptime</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Stats cards */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="space-y-4">
              <FadeIn delay={0.2} direction="left">
                <TiltCard>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white/40">
                        Response Time
                      </span>
                      <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                        99th percentile
                      </span>
                    </div>
                    <div className="text-4xl font-bold">8ms</div>
                  </div>
                </TiltCard>
              </FadeIn>

              <div className="grid grid-cols-2 gap-4">
                <FadeIn delay={0.3} direction="left">
                  <TiltCard>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="text-sm text-white/40 mb-2">Cost</div>
                      <div className="text-2xl font-bold">$0.001</div>
                      <div className="text-xs text-white/30 mt-1">
                        per transaction
                      </div>
                    </div>
                  </TiltCard>
                </FadeIn>
                <FadeIn delay={0.35} direction="left">
                  <TiltCard>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="text-sm text-white/40 mb-2">Networks</div>
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-xs text-white/30 mt-1">
                        +3 coming soon
                      </div>
                    </div>
                  </TiltCard>
                </FadeIn>
              </div>

              {/* Live activity */}
              <FadeIn delay={0.4} direction="left">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs text-white/40 mb-3">
                    Recent transactions
                  </div>
                  {[
                    { agent: "AutoGPT-7x2k", amount: "0.002", time: "2s" },
                    { agent: "DataBot-3f8m", amount: "0.015", time: "8s" },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-t border-white/[0.04] first:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-xs text-white/60">
                          {tx.agent}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-green-500">
                          {tx.amount} SOL
                        </span>
                        <span className="text-xs text-white/30">
                          {tx.time} ago
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs text-white/30">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </motion.section>
  );
}
