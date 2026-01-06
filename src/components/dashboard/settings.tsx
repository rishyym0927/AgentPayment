"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ============================================================
   TOGGLE SWITCH
   ============================================================ */
interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

function ToggleSwitch({ enabled, onToggle }: ToggleSwitchProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={`w-10 h-6 rounded-full transition-colors ${
        enabled ? "bg-white/30" : "bg-white/10"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white"
        animate={{ x: enabled ? 20 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}

/* ============================================================
   SETTINGS INPUT
   ============================================================ */
interface SettingsInputProps {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

function SettingsInput({
  label,
  type = "text",
  defaultValue,
  placeholder,
}: SettingsInputProps) {
  return (
    <div className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06]">
      <label className="block text-sm text-white/60 mb-2">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors"
      />
    </div>
  );
}

/* ============================================================
   SETTINGS TAB
   ============================================================ */
export function SettingsTab() {
  const [notifications, setNotifications] = useState({
    transactions: true,
    usage: true,
    weekly: false,
    marketing: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Account Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-sm font-medium text-white/70 mb-4">Account</h3>
        <div className="space-y-4">
          <SettingsInput
            label="Email"
            type="email"
            defaultValue="dev@example.com"
          />
          <SettingsInput label="Organization" defaultValue="Acme Corp" />
          <SettingsInput
            label="Webhook URL"
            placeholder="https://your-app.com/webhook"
          />
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-sm font-medium text-white/70 mb-4">
          Notifications
        </h3>
        <div className="space-y-3">
          {[
            {
              key: "transactions" as const,
              label: "Transaction alerts",
              description: "Get notified on each transaction",
            },
            {
              key: "usage" as const,
              label: "Usage alerts",
              description: "Alert when usage exceeds 80% threshold",
            },
            {
              key: "weekly" as const,
              label: "Weekly reports",
              description: "Receive weekly usage summary via email",
            },
            {
              key: "marketing" as const,
              label: "Product updates",
              description: "New features and announcements",
            },
          ].map((setting, i) => (
            <motion.div
              key={setting.key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.06] flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-medium mb-0.5">
                  {setting.label}
                </div>
                <div className="text-xs text-white/40">
                  {setting.description}
                </div>
              </div>
              <ToggleSwitch
                enabled={notifications[setting.key]}
                onToggle={() => toggleNotification(setting.key)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-white/70 mb-4">Security</h3>
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-sm font-medium mb-0.5">
                Two-Factor Authentication
              </div>
              <div className="text-xs text-white/40">
                Add an extra layer of security to your account
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:border-white/20 transition-colors"
            >
              Enable
            </motion.button>
          </div>
          <div className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-sm font-medium mb-0.5">Session History</div>
              <div className="text-xs text-white/40">
                View and manage active sessions
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:border-white/20 transition-colors"
            >
              View
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-sm font-medium text-red-400/70 mb-4">
          Danger Zone
        </h3>
        <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-red-400 mb-1">
                Delete Account
              </div>
              <div className="text-xs text-red-400/60">
                Permanently delete your account, all agents, and transaction
                history
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 border border-red-500/30 text-red-400 rounded-lg text-sm hover:bg-red-500/10 transition-colors"
            >
              Delete
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="pt-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  );
}
