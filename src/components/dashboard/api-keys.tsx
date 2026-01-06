"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================
   TYPES
   ============================================================ */
interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: "active" | "inactive";
}

/* ============================================================
   API KEY CARD
   ============================================================ */
interface ApiKeyCardProps {
  apiKey: ApiKey;
  onCopy: (key: string, id: string) => void;
  copied: string | null;
  index: number;
}

function ApiKeyCard({ apiKey, onCopy, copied, index }: ApiKeyCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
      className="p-5 rounded-xl bg-[#0a0a0a] border border-white/[0.06] transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium">{apiKey.name}</span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`px-2 py-0.5 text-xs rounded-full ${
                apiKey.status === "active"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-white/5 text-white/40"
              }`}
            >
              {apiKey.status}
            </motion.span>
          </div>
          <div className="text-xs text-white/40">
            Created {apiKey.created} • Last used {apiKey.lastUsed}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1.5 text-xs text-white/50 hover:text-red-400 border border-white/10 hover:border-red-500/30 rounded-lg transition-colors"
        >
          Revoke
        </motion.button>
      </div>

      {/* Key Display */}
      <div className="flex items-center gap-3 p-3 bg-[#050505] rounded-lg border border-white/[0.04]">
        <code className="flex-1 font-mono text-sm text-white/60 tracking-wide">
          {apiKey.key.slice(0, 20)}•••••••••••••
        </code>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCopy(apiKey.key, apiKey.id)}
          className="px-3 py-1.5 text-xs bg-white/[0.05] hover:bg-white/[0.1] rounded-md transition-colors font-medium"
        >
          {copied === apiKey.id ? "✓ Copied" : "Copy"}
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ============================================================
   CREATE KEY MODAL
   ============================================================ */
interface CreateKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CreateKeyModal({ isOpen, onClose }: CreateKeyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold mb-4">Create New API Key</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Key Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Production Key"
                  className="w-full px-4 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Environment
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm">
                  <option value="production">Production</option>
                  <option value="development">Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Daily Limit (SOL)
                </label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full px-4 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm transition-colors"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors text-sm"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors text-sm"
              >
                Create Key
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   API KEYS TAB
   ============================================================ */
export function ApiKeysTab() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const apiKeys: ApiKey[] = [
    {
      id: "1",
      name: "Production Key",
      key: "x402_live_sk_9f8g7h6j5k4l3m2n1o0p",
      created: "Jan 1, 2025",
      lastUsed: "2 hours ago",
      status: "active",
    },
    {
      id: "2",
      name: "Development Key",
      key: "x402_test_sk_1a2b3c4d5e6f7g8h9i0j",
      created: "Dec 15, 2024",
      lastUsed: "5 days ago",
      status: "active",
    },
  ];

  const handleCopy = async (key: string, id: string) => {
    await navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">API Keys</h2>
          <p className="text-sm text-white/50">
            Manage your API keys for agent authentication
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
        >
          <span>+</span> Create New Key
        </motion.button>
      </motion.div>

      {/* Keys List */}
      <div className="space-y-3">
        {apiKeys.map((apiKey, i) => (
          <ApiKeyCard
            key={apiKey.id}
            apiKey={apiKey}
            onCopy={handleCopy}
            copied={copied}
            index={i}
          />
        ))}
      </div>

      {/* Usage Warning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20"
      >
        <div className="flex items-start gap-3">
          <span className="text-yellow-500">⚠</span>
          <div>
            <div className="text-sm font-medium text-yellow-500 mb-1">
              Keep your keys secure
            </div>
            <div className="text-xs text-yellow-500/70">
              Never share your API keys or commit them to version control. Use
              environment variables instead.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Create Modal */}
      <CreateKeyModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}
