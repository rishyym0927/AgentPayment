"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

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
  const { data: session } = useSession();
  const user = session?.user;

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
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xs font-medium">
              {user?.name?.[0] || user?.email?.[0] || "U"}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">
              {user?.name || "User"}
            </div>
            <div className="text-xs text-white/40 truncate">
              {user?.email || ""}
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors group"
            title="Sign out"
          >
            <svg
              className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
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
  const { data: session } = useSession();

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
        {session?.user && (
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <span className="text-sm text-white/60">{session.user.email}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            )}
          </div>
        )}
      </div>
    </motion.header>
  );
}
