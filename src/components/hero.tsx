"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FadeIn,
  TextReveal,
  RotatingWords,
  MagneticButton,
  TiltCard,
} from "./animations";

/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-24">
          {/* Left - Main content */}
          <div className="lg:col-span-7">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-white/60">Live on Mainnet</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                AI Agents That
                <br />
                <span className="gradient-text">
                  <RotatingWords words={["Pay", "Trade", "Execute"]} />
                </span>
                <br />
                Autonomously
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed">
                The payment infrastructure for autonomous AI. Your agents can
                pay for APIs, services, and resources on Solana and
                Ethereum—without human intervention.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    href={session ? "/dashboard" : "/auth/signin"}
                    className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors inline-block"
                  >
                    {session ? "Go to Dashboard →" : "Start Building →"}
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors">
                    View Docs
                  </button>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Trust indicators */}
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6 mt-12 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">$2.4M+</span>
                  <span>processed</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">10K+</span>
                  <span>agents</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">99.99%</span>
                  <span>uptime</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Stats cards */}
          <div className="lg:col-span-5">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
