"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ============================================================
   SIDEBAR COMPONENT
   ============================================================ */
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: "◐" },
  { id: "api-keys", label: "API Keys", icon: "⚿" },
  { id: "usage", label: "Usage", icon: "◧" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64 min-h-screen bg-[#080808] border-r border-white/[0.06] p-5 flex flex-col"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-10 group">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/15 transition-colors"
        />
        <span className="font-semibold text-white">X402</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 relative ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/[0.08] rounded-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative text-base opacity-70">
                  {item.icon}
                </span>
                <span className="relative">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="pt-5 border-t border-white/[0.06]">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xs font-medium">
            D
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Developer</div>
            <div className="text-xs text-white/40 truncate">
              dev@example.com
            </div>
          </div>
          <button className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-white/40 text-sm">⚙</span>
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

/* ============================================================
   HEADER COMPONENT
   ============================================================ */
interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-16 border-b border-white/[0.06] flex items-center justify-between px-8"
    >
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm text-white/50 hover:text-white transition-colors">
          Documentation
        </button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Upgrade Plan
        </motion.button>
      </div>
    </motion.header>
  );
}
