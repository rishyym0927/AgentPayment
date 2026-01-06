"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sidebar,
  Header,
  OverviewTab,
  ApiKeysTab,
  UsageTab,
  SettingsTab,
} from "@/components/dashboard";

const tabTitles: Record<string, string> = {
  overview: "Dashboard Overview",
  "api-keys": "API Keys",
  usage: "Usage & Billing",
  settings: "Settings",
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header title={tabTitles[activeTab]} />

        <main className="flex-1 p-8 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "api-keys" && <ApiKeysTab />}
              {activeTab === "usage" && <UsageTab />}
              {activeTab === "settings" && <SettingsTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
