"use client";

import { motion } from "framer-motion";

/* ============================================================
   STAT CARD COMPONENT
   ============================================================ */
interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  index?: number;
}

export function StatCard({
  label,
  value,
  change,
  positive = true,
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.1)" }}
      className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06] transition-colors cursor-pointer"
    >
      <div className="text-sm text-white/50 mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.05 + 0.2 }}
          className={`text-xs ${positive ? "text-green-500" : "text-red-400"}`}
        >
          {change}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   QUICK ACTION CARD
   ============================================================ */
interface QuickActionProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
  onClick?: () => void;
}

export function QuickActionCard({
  title,
  description,
  icon,
  index = 0,
  onClick,
}: QuickActionProps) {
  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06] hover:border-white/15 transition-all text-left group"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-lg mb-4 group-hover:bg-white/[0.08] transition-colors"
      >
        {icon}
      </motion.div>
      <div className="text-sm font-medium mb-1">{title}</div>
      <div className="text-xs text-white/40">{description}</div>
    </motion.button>
  );
}

/* ============================================================
   TRANSACTION ROW
   ============================================================ */
interface TransactionRowProps {
  id: string;
  agent: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  time: string;
  index?: number;
}

export function TransactionRow({
  id,
  agent,
  amount,
  status,
  time,
  index = 0,
}: TransactionRowProps) {
  const statusColors = {
    completed: { bg: "bg-green-500", text: "text-green-500" },
    pending: { bg: "bg-yellow-500", text: "text-yellow-500" },
    failed: { bg: "bg-red-500", text: "text-red-500" },
  };

  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
    >
      <td className="p-4 font-mono text-sm text-white/70">{id}</td>
      <td className="p-4 text-sm">{agent}</td>
      <td className="p-4 text-sm font-mono">{amount}</td>
      <td className="p-4">
        <span
          className={`inline-flex items-center gap-1.5 text-xs ${statusColors[status].text}`}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`w-1.5 h-1.5 rounded-full ${statusColors[status].bg}`}
          />
          {status}
        </span>
      </td>
      <td className="p-4 text-right text-sm text-white/40">{time}</td>
    </motion.tr>
  );
}

/* ============================================================
   OVERVIEW TAB
   ============================================================ */
export function OverviewTab() {
  const stats = [
    {
      label: "API Calls Today",
      value: "2,847",
      change: "+12.5%",
      positive: true,
    },
    {
      label: "Total Transactions",
      value: "$1,247.50",
      change: "+8.2%",
      positive: true,
    },
    { label: "Active Agents", value: "12", change: "+2", positive: true },
    {
      label: "Avg Response Time",
      value: "8ms",
      change: "-2ms",
      positive: true,
    },
  ];

  const transactions = [
    {
      id: "tx_3hk2...x9f",
      agent: "DataFetcher-01",
      amount: "0.002 SOL",
      status: "completed" as const,
      time: "2 min ago",
    },
    {
      id: "tx_9jd1...m2k",
      agent: "APIGateway-03",
      amount: "0.005 SOL",
      status: "completed" as const,
      time: "5 min ago",
    },
    {
      id: "tx_1lp8...q4w",
      agent: "Analyzer-02",
      amount: "0.001 SOL",
      status: "pending" as const,
      time: "8 min ago",
    },
    {
      id: "tx_7nm3...p2s",
      agent: "DataFetcher-01",
      amount: "0.003 SOL",
      status: "completed" as const,
      time: "12 min ago",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-white/70 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard
            title="Create New Agent"
            description="Set up a new payment agent"
            icon="+"
            index={0}
          />
          <QuickActionCard
            title="View Transactions"
            description="See recent payment history"
            icon="↗"
            index={1}
          />
          <QuickActionCard
            title="API Documentation"
            description="Integration guides & examples"
            icon="◧"
            index={2}
          />
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-white/70">Recent Activity</h3>
          <button className="text-xs text-white/40 hover:text-white transition-colors">
            View all →
          </button>
        </div>
        <div className="rounded-xl bg-[#0a0a0a] border border-white/[0.06] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left text-xs text-white/40 font-medium p-4">
                  Transaction
                </th>
                <th className="text-left text-xs text-white/40 font-medium p-4">
                  Agent
                </th>
                <th className="text-left text-xs text-white/40 font-medium p-4">
                  Amount
                </th>
                <th className="text-left text-xs text-white/40 font-medium p-4">
                  Status
                </th>
                <th className="text-right text-xs text-white/40 font-medium p-4">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <TransactionRow key={tx.id} {...tx} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
