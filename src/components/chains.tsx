"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TiltCard } from "./animations";

/* ============================================================
   CHAINS SECTION - BETTER STRUCTURED
   ============================================================ */
export function ChainsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Visual (hidden on mobile) */}
          <div className="relative order-2 lg:order-1 hidden md:block">
            <FadeIn direction="right">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Orbit rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full" />
                <div className="absolute inset-[15%] border border-white/5 rounded-full" />
                <div className="absolute inset-[30%] border border-white/10 rounded-full" />

                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold">X402</div>
                    <div className="text-xs text-white/40">Protocol</div>
                  </div>
                </div>

                {/* Orbiting chains */}
                <motion.div className="absolute inset-0" style={{ rotate }}>
                  {/* Solana */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      style={{ rotate: useTransform(rotate, (r) => -r) }}
                    >
                      <TiltCard>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold">SOL</span>
                        </div>
                      </TiltCard>
                    </motion.div>
                  </div>

                  {/* Ethereum */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div
                      style={{ rotate: useTransform(rotate, (r) => -r) }}
                    >
                      <TiltCard>
                        <div className="w-16 h-16 rounded-full bg-[#627EEA]/20 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold">ETH</span>
                        </div>
                      </TiltCard>
                    </motion.div>
                  </div>

                  {/* Coming soon */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      style={{ rotate: useTransform(rotate, (r) => -r) }}
                    >
                      <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center opacity-50">
                        <span className="text-xs">Base</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      style={{ rotate: useTransform(rotate, (r) => -r) }}
                    >
                      <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center opacity-50">
                        <span className="text-xs">Arb</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <div className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10">
                Chain-Agnostic Execution
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                One protocol,
                <br />
                <span className="gradient-text">any blockchain</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg text-white/50 mb-6 sm:mb-8 leading-relaxed">
                Unified transaction execution across Solana and Ethereum. Your agents
                operate with deterministic behavior regardless of chain—same SDK,
                same safety guarantees, same X402 billing.
              </p>
            </FadeIn>

            {/* Chain status */}
            <div className="space-y-3">
              <FadeIn delay={0.25}>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30 border border-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold">S</span>
                    </div>
                    <div>
                      <div className="font-medium">Solana</div>
                      <div className="text-xs text-white/40">
                        ~400ms finality
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#627EEA]/20 border border-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold">E</span>
                    </div>
                    <div>
                      <div className="font-medium">Ethereum</div>
                      <div className="text-xs text-white/40">~12s finality</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                      <span className="text-xs">+3</span>
                    </div>
                    <div>
                      <div className="font-medium">Base, Arbitrum, Polygon</div>
                      <div className="text-xs text-white/40">
                        L2 support coming Q2 2026
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-white/40">Soon</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
