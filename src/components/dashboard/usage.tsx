"use client";

import { motion } from "framer-motion";

/* ============================================================
   USAGE PROGRESS BAR
   ============================================================ */
interface UsageProgressProps {
  label: string;
  current: number;
  limit: number;
  unit: string;
  index: number;
}

function UsageProgress({
  label,
  current,
  limit,
  unit,
  index,
}: UsageProgressProps) {
  const percentage = (current / limit) * 100;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-white/70">{label}</span>
        <span className="text-sm">
          <span className="font-medium">{current.toLocaleString()}</span>
          <span className="text-white/40">
            {" "}
            / {limit.toLocaleString()} {unit}
          </span>
        </span>
      </div>
      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(percentage, 100)}%` }}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`h-full rounded-full ${
            percentage > 80
              ? "bg-yellow-500"
              : percentage > 95
              ? "bg-red-500"
              : "bg-white/40"
          }`}
        />
      </div>
      <div className="mt-2 text-xs text-white/30">
        {(100 - percentage).toFixed(1)}% remaining
      </div>
    </motion.div>
  );
}

/* ============================================================
   USAGE TAB
   ============================================================ */
export function UsageTab() {
  const usageData = [
    { label: "API Calls", current: 28471, limit: 100000, unit: "calls" },
    { label: "Transactions", current: 127, limit: 1000, unit: "txns" },
    { label: "Data Transfer", current: 2.4, limit: 10, unit: "GB" },
  ];

  return (
    <div className="space-y-8">
      {/* Current Plan */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.06]"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-white/40 mb-1">Current Plan</div>
            <div className="text-xl font-semibold">Developer</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:border-white/20 hover:bg-white/[0.02] transition-colors"
          >
            Upgrade Plan
          </motion.button>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-white/50">
            Billing cycle resets{" "}
            <span className="text-white">February 1, 2025</span>
          </div>
          <div className="text-white/50">
            <span className="text-green-500">$0</span> / month
          </div>
        </div>
      </motion.div>

      {/* Usage Metrics */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-white/70">This Month</h3>
        {usageData.map((item, i) => (
          <UsageProgress key={item.label} {...item} index={i} />
        ))}
      </div>

      {/* Usage Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-sm font-medium text-white/70 mb-4">
          Usage Over Time
        </h3>
        <div className="p-8 rounded-xl bg-[#0a0a0a] border border-white/[0.06]">
          {/* Simple bar chart */}
          <div className="flex items-end justify-between h-32 gap-2">
            {[35, 52, 48, 67, 42, 78, 89, 65, 72, 58, 84, 91].map(
              (value, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                  className="flex-1 bg-white/20 rounded-t hover:bg-white/30 transition-colors cursor-pointer relative group"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/0 group-hover:text-white/60 transition-colors">
                    {value}%
                  </div>
                </motion.div>
              )
            )}
          </div>
          <div className="flex justify-between mt-4 text-xs text-white/30">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
