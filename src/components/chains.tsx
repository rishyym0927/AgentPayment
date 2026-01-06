"use client";

import { FadeIn } from "./animations";
import { OrbitingCircles } from "./ui/orbiting-circles";

/* ============================================================
   BLOCKCHAIN ICONS - COLORFUL & VIBRANT
   ============================================================ */
const Icons = {
  solana: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      <path d="M25.4 96.3C26.1 95.6 27.1 95.2 28.1 95.2H120.3C121.9 95.2 122.7 97.2 121.6 98.3L102.6 117.7C101.9 118.4 100.9 118.8 99.9 118.8H7.7C6.1 118.8 5.3 116.8 6.4 115.7L25.4 96.3Z" fill="url(#solanaGradient)"/>
      <path d="M25.4 10.3C26.2 9.6 27.2 9.2 28.1 9.2H120.3C121.9 9.2 122.7 11.2 121.6 12.3L102.6 31.7C101.9 32.4 100.9 32.8 99.9 32.8H7.7C6.1 32.8 5.3 30.8 6.4 29.7L25.4 10.3Z" fill="url(#solanaGradient)"/>
      <path d="M102.6 53.1C101.9 52.4 100.9 52 99.9 52H7.7C6.1 52 5.3 54 6.4 55.1L25.4 74.5C26.1 75.2 27.1 75.6 28.1 75.6H120.3C121.9 75.6 122.7 73.6 121.6 72.5L102.6 53.1Z" fill="url(#solanaGradient)"/>
    </svg>
  ),
  ethereum: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 0L63.2 2.7V87.5L64 88.3L105.6 64.4L64 0Z" fill="#627EEA"/>
      <path d="M64 0L22.4 64.4L64 88.3V47.3V0Z" fill="#C0CBF6"/>
      <path d="M64 95.8L63.6 96.3V128L64 129L105.6 71.9L64 95.8Z" fill="#627EEA"/>
      <path d="M64 129V95.8L22.4 71.9L64 129Z" fill="#C0CBF6"/>
      <path d="M64 88.3L105.6 64.4L64 47.3V88.3Z" fill="#8198EE"/>
      <path d="M22.4 64.4L64 88.3V47.3L22.4 64.4Z" fill="#C0CBF6"/>
    </svg>
  ),
  base: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#0052FF"/>
      <path d="M64 108C88.3 108 108 88.3 108 64C108 39.7 88.3 20 64 20C41.5 20 23.1 36.4 20.4 57.5H85V70.5H20.4C23.1 91.6 41.5 108 64 108Z" fill="white"/>
    </svg>
  ),
  arbitrum: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C99.3 128 128 99.3 128 64C128 28.7 99.3 0 64 0Z" fill="#213147"/>
      <path d="M73.8 66.8L85.8 87.6L98.1 80.5L82.3 53.4L73.8 66.8Z" fill="#12AAFF"/>
      <path d="M98.1 80.5L85.8 87.6L91.5 97.5L104 91.2L98.1 80.5Z" fill="white"/>
      <path d="M64 30L29.9 91.2L42.4 97.5L64 60.8L85.6 97.5L98.1 91.2L64 30Z" fill="white"/>
      <path d="M42.4 97.5L29.9 91.2L24 102.4L36.5 108.7L42.4 97.5Z" fill="#9DCCED"/>
      <path d="M91.5 97.5L98.1 91.2L104 102.4L91.5 108.7L91.5 97.5Z" fill="#9DCCED"/>
    </svg>
  ),
  polygon: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.5 40.3C89.4 39.1 86.7 39.1 84.3 40.3L68.7 49.4L58.1 55.5L42.5 64.6C40.4 65.8 37.7 65.8 35.3 64.6L23.1 57.6C21 56.4 19.5 54.1 19.5 51.5V38C19.5 35.4 20.8 33.1 23.1 31.9L35.1 25.1C37.2 23.9 39.9 23.9 42.3 25.1L54.3 31.9C56.4 33.1 57.9 35.4 57.9 38V47.1L68.5 40.8V31.5C68.5 28.9 67.2 26.6 64.9 25.4L42.5 12.2C40.4 11 37.7 11 35.3 12.2L12.5 25.4C10.2 26.6 8.9 28.9 8.9 31.5V57.9C8.9 60.5 10.2 62.8 12.5 64L35.1 77.2C37.2 78.4 39.9 78.4 42.3 77.2L57.9 68.3L68.5 62L84.1 53.1C86.2 51.9 88.9 51.9 91.3 53.1L103.3 59.9C105.4 61.1 106.9 63.4 106.9 66V79.5C106.9 82.1 105.6 84.4 103.3 85.6L91.5 92.6C89.4 93.8 86.7 93.8 84.3 92.6L72.3 85.8C70.2 84.6 68.7 82.3 68.7 79.7V70.8L58.1 77V86.1C58.1 88.7 59.4 91 61.7 92.2L84.3 105.4C86.4 106.6 89.1 106.6 91.5 105.4L114.1 92.2C116.2 91 117.7 88.7 117.7 86.1V59.5C117.7 56.9 116.4 54.6 114.1 53.4L91.5 40.3Z" fill="#8247E5"/>
    </svg>
  ),
  avalanche: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#E84142"/>
      <path d="M89.6 85.3H77.1c-2.2 0-4.2-1.2-5.3-3.1L64 68.8l-7.8 13.4c-1.1 1.9-3.1 3.1-5.3 3.1H38.4c-3.7 0-6-4-4.2-7.2l25.6-44c1.1-1.9 3.1-3.1 5.3-3.1h0c2.2 0 4.2 1.2 5.3 3.1l25.6 44c1.8 3.2-.5 7.2-4.4 7.2z" fill="white"/>
    </svg>
  ),
  bnb: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#F3BA2F"/>
      <path d="M64 36L76 48L64 60L52 48L64 36Z" fill="white"/>
      <path d="M40 52L52 64L40 76L28 64L40 52Z" fill="white"/>
      <path d="M88 52L100 64L88 76L76 64L88 52Z" fill="white"/>
      <path d="M64 68L76 80L64 92L52 80L64 68Z" fill="white"/>
    </svg>
  ),
  optimism: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#FF0420"/>
      <path d="M45.5 80c-10.8 0-17.5-7.3-17.5-18s6.7-18 17.5-18c10.8 0 17.5 7.3 17.5 18s-6.7 18-17.5 18zm0-10c4.4 0 7-3.6 7-8s-2.6-8-7-8-7 3.6-7 8 2.6 8 7 8z" fill="white"/>
      <path d="M68 79V45h14c8.8 0 14 5 14 12.5S90.8 70 82 70h-4v9H68zm14-19c2.8 0 4.5-1.8 4.5-4.5S84.8 51 82 51h-4v9h4z" fill="white"/>
    </svg>
  ),
  bitcoin: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#F7931A"/>
      <path d="M89.5 55.2c1.2-8.2-5-12.6-13.6-15.5l2.8-11.1-6.8-1.7-2.7 10.8c-1.8-.4-3.6-.9-5.4-1.3l2.7-10.9-6.8-1.7-2.8 11.1c-1.5-.3-2.9-.7-4.3-1l0 0-9.4-2.3-1.8 7.2s5 1.2 4.9 1.2c2.7.7 3.2 2.5 3.1 3.9l-3.1 12.6c.2 0 .4.1.7.2-.2-.1-.5-.1-.7-.2l-4.4 17.5c-.3.8-1.1 2-3 1.5.1.1-4.9-1.2-4.9-1.2l-3.4 7.8 8.9 2.2c1.6.4 3.3.8 4.9 1.2l-2.8 11.3 6.8 1.7 2.8-11.1c1.9.5 3.7 1 5.5 1.4l-2.8 11 6.8 1.7 2.8-11.3c11.6 2.2 20.3 1.3 24-9.2 3-8.4-.1-13.3-6.2-16.5 4.4-1 7.7-3.9 8.6-9.9zm-15.4 21.6c-2.1 8.4-16.3 3.9-20.9 2.7l3.7-14.9c4.6 1.1 19.4 3.4 17.2 12.2zm2.1-21.7c-1.9 7.6-13.7 3.7-17.5 2.8l3.4-13.5c3.8 1 16.1 2.8 14.1 10.7z" fill="white"/>
    </svg>
  ),
  sui: () => (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#4DA2FF"/>
      <path d="M84.5 48c-8.8-8.8-23-8.8-31.8 0L44 56.7c-1.2 1.2-1.2 3.1 0 4.2l4.2 4.2c1.2 1.2 3.1 1.2 4.2 0l8.7-8.7c4.7-4.7 12.4-4.7 17.1 0 4.7 4.7 4.7 12.4 0 17.1l-8.7 8.7c-1.2 1.2-1.2 3.1 0 4.2l4.2 4.2c1.2 1.2 3.1 1.2 4.2 0l8.7-8.7c8.7-8.8 8.7-23-.1-31.9z" fill="white"/>
      <path d="M75.6 65l-4.2-4.2c-1.2-1.2-3.1-1.2-4.2 0l-8.7 8.7c-4.7 4.7-12.4 4.7-17.1 0-4.7-4.7-4.7-12.4 0-17.1l8.7-8.7c1.2-1.2 1.2-3.1 0-4.2l-4.2-4.2c-1.2-1.2-3.1-1.2-4.2 0L33 44c-8.8 8.8-8.8 23 0 31.8 8.8 8.8 23 8.8 31.8 0L75.6 65c1.1-1.1 1.1-3 0-4.1l-.1.1z" fill="white" fillOpacity="0.6"/>
    </svg>
  ),
};

/* ============================================================
   CHAINS SECTION - BETTER STRUCTURED
   ============================================================ */
export function ChainsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Visual (hidden on mobile) */}
          <div className="relative order-2 lg:order-1 hidden md:block">
            <FadeIn direction="right">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                {/* Center hub */}
                <div className="z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">X402</div>
                    <div className="text-xs text-white/50">Protocol</div>
                  </div>
                </div>

                {/* Outer orbit - Live chains (larger, slower) */}
                <OrbitingCircles iconSize={56} radius={220} duration={40} speed={1} path={true}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-gradient-to-br from-[#9945FF]/40 to-[#14F195]/40 shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                    <Icons.solana />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-[#627EEA]/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                    <Icons.ethereum />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-400/30 bg-[#F7931A]/30 shadow-lg shadow-orange-500/20 backdrop-blur-sm">
                    <Icons.bitcoin />
                  </div>
                </OrbitingCircles>

                {/* Middle orbit - More chains */}
                <OrbitingCircles iconSize={48} radius={140} duration={30} reverse speed={1.2} path={true}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-[#0052FF]/30 shadow-lg shadow-blue-600/20 backdrop-blur-sm">
                    <Icons.base />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/30 bg-[#12AAFF]/20 shadow-lg shadow-sky-500/20 backdrop-blur-sm">
                    <Icons.arbitrum />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-[#8247E5]/30 shadow-lg shadow-purple-600/20 backdrop-blur-sm">
                    <Icons.polygon />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-400/30 bg-[#FF0420]/30 shadow-lg shadow-red-500/20 backdrop-blur-sm">
                    <Icons.optimism />
                  </div>
                </OrbitingCircles>

                {/* Inner orbit - Coming soon chains */}
                <OrbitingCircles iconSize={40} radius={85} duration={25} speed={0.8} path={true}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-400/30 bg-[#E84142]/30 shadow-lg shadow-red-500/20 backdrop-blur-sm">
                    <Icons.avalanche />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/30 bg-[#F3BA2F]/30 shadow-lg shadow-yellow-500/20 backdrop-blur-sm">
                    <Icons.bnb />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#4DA2FF]/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
                    <Icons.sui />
                  </div>
                </OrbitingCircles>
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
