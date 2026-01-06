"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "./animations";

/* ============================================================
   FEATURES SECTION - BENTO GRID
   ============================================================ */
export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10">
              Why X402
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Infrastructure built for
              <br />
              <span className="gradient-text">autonomous agents</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/50">
              Enterprise-grade security meets developer-friendly APIs.
              Everything your AI needs to transact safely at scale.
            </p>
          </FadeIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large feature card */}
          <FadeIn delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-6">
                    🔐
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Hardware Security Modules
                  </h3>
                  <p className="text-white/50 max-w-md leading-relaxed mb-6">
                    Private keys never leave HSMs. Military-grade encryption
                    protects every transaction. Your agents operate with the
                    same security as major financial institutions.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-500">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      SOC 2 Type II
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <span className="w-2 h-2 rounded-full bg-white/40" />
                      FIPS 140-2 Level 3
                    </div>
                  </div>
                </div>
                {/* Background decoration */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
              </div>
            </TiltCard>
          </FadeIn>

          {/* Small feature cards */}
          {[
            {
              icon: "⚡",
              title: "Sub-10ms Latency",
              description:
                "Optimized transaction routing ensures your agents never wait",
            },
            {
              icon: "📊",
              title: "Real-time Analytics",
              description:
                "Monitor spending, success rates, and agent performance live",
            },
            {
              icon: "🛡️",
              title: "Built-in Rate Limits",
              description:
                "Set spending caps per agent, per day, or per transaction",
            },
            {
              icon: "📋",
              title: "Complete Audit Trail",
              description: "Every transaction logged with cryptographic proofs",
            },
          ].map((feature, i) => (
            <FadeIn key={feature.title} delay={0.15 + i * 0.05}>
              <TiltCard className="h-full">
                <div className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CODE SECTION
   ============================================================ */
export function CodeSection() {
  const [typedCode, setTypedCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const code = `import { Agent } from '@x402/sdk';

const agent = new Agent({
  network: 'solana',
  limits: { daily: 10, perTx: 0.1 }
});

await agent.pay({
  to: 'api-provider.sol',
  amount: 0.002,
  memo: 'GPT-4 API call'
});`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < code.length) {
        setTypedCode(code.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10">
                Developer Experience
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Ship in minutes,
                <br />
                <span className="gradient-text">not months</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Our SDK handles the complexity of wallet creation, transaction
                signing, and multi-chain management. You write the logic; we
                handle the payments.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1}>
              {[
                "Full TypeScript support with autocomplete",
                "Built-in retry logic and error handling",
                "Webhook notifications for every event",
                "Testnet mode for safe development",
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-3 mb-3 text-white/70">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60">
                      ✓
                    </span>
                    {feature}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Code */}
          <motion.div style={{ y }}>
            <FadeIn direction="left">
              <div className="bg-[#08080a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="ml-4 text-xs text-white/30 font-mono">
                    agent.ts
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <pre className="text-white/80">
                    {typedCode.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-white/20 select-none w-6 text-right mr-4">
                          {i + 1}
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlightCode(line),
                          }}
                        />
                      </div>
                    ))}
                  </pre>
                  {!showOutput && (
                    <span className="inline-block w-2 h-4 bg-white/60 animate-pulse ml-6" />
                  )}
                </div>

                {/* Terminal output */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={showOutput ? { height: "auto", opacity: 1 } : {}}
                  className="border-t border-white/10 bg-black/50 overflow-hidden"
                >
                  <div className="p-4 font-mono text-xs">
                    <div className="text-green-500">✓ Payment successful</div>
                    <div className="text-white/40 mt-1">
                      tx: 5KjH...3xKm • 0.002 SOL • 12ms
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function highlightCode(line: string): string {
  return line
    .replace(
      /(import|from|const|await|new)/g,
      '<span class="text-indigo-400">$1</span>'
    )
    .replace(/('.*?')/g, '<span class="text-emerald-400">$1</span>')
    .replace(/(Agent|agent|pay)/g, '<span class="text-blue-400">$1</span>')
    .replace(/(\{|\}|\(|\))/g, '<span class="text-white/50">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-white/30">$1</span>');
}
