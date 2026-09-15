"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "react-markdown";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RefreshCw,
  Copy,
  Check,
  PhoneCall,
  Sprout,
  HelpCircle,
  TrendingUp,
  Maximize2,
  Minimize2
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "💰 Commercial Farm Setup Cost?",
  "🍄 Button vs Oyster Farming?",
  "🎓 Training Masterclass (₹199)?",
  "🌡️ Ideal Temperature & Humidity?",
  "📦 How to buy F1 Spawn?"
];

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "**Namaste! Welcome to Organic Mushrooms Farm AI Advisor.** 🍄\n\nI can assist you with:\n- 📋 Commercial Farm Setup & Cost Estimates\n- 🌡️ Temperature, Humidity & Climate Controls\n- 🎓 Live Training Enrollment (₹199 / ₹499)\n- 🌾 High-Yield F1 Spawn Supply\n\nHow can I help you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const replyText = data.reply || data.text || "Thank you for reaching out. Please connect directly on WhatsApp: +91 9203544140.";

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "I experienced a slight connection delay. You can also chat directly with our head agronomist on WhatsApp at **+91 9203544140**.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content:
          "Chat reset! What would you like to know about commercial mushroom cultivation, spawn booking, or farm setup?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Launcher Button (Left Side above sticky pills) */}
      <div className="relative z-50 pointer-events-auto">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-tr from-purple-600 via-indigo-600 to-purple-800 text-white shadow-[0_8px_30px_rgba(147,51,234,0.5)] border border-purple-400/40 flex items-center justify-center cursor-pointer group"
          aria-label="Open AI Mushroom Advisor"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-25" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="bot-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative"
              >
                <Bot size={26} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed z-50 left-3 sm:left-6 bottom-36 md:bottom-24 bg-slate-950/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded
                ? "w-[calc(100vw-24px)] sm:w-[600px] h-[80vh] max-h-[700px]"
                : "w-[calc(100vw-24px)] sm:w-[390px] h-[540px]"
            }`}
          >
            {/* Header */}
            <div className="p-4 bg-linear-to-r from-purple-900/60 via-slate-900/80 to-slate-950 border-b border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center">
                  <Bot size={22} className="text-purple-300" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-black text-white">MycoBot Advisor</h4>
                    <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-[9px] font-bold text-purple-300 uppercase tracking-wider">
                      Gemini 3.8
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Online • Jabalpur Farm Agronomist
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset Chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  title={isExpanded ? "Collapse" : "Expand"}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors hidden sm:block"
                >
                  {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-purple-950/20 border-b border-purple-500/10 overflow-x-auto scrollbar-hide flex items-center gap-1.5">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 transition-all active:scale-95 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin text-xs sm:text-sm">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs ${
                        isUser
                          ? "bg-indigo-600 text-white"
                          : "bg-purple-600/30 border border-purple-500/30 text-purple-300"
                      }`}
                    >
                      {isUser ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    <div className={`max-w-[82%] relative group ${isUser ? "text-right" : "text-left"}`}>
                      <div
                        className={`p-3 rounded-2xl leading-relaxed ${
                          isUser
                            ? "bg-indigo-600 text-white rounded-tr-xs"
                            : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-xs"
                        }`}
                      >
                        <div className="markdown-body text-xs sm:text-[13px] text-slate-100 dark:text-slate-100">
                          <Markdown>{msg.content}</Markdown>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-500">
                        <span>{msg.timestamp}</span>
                        {!isUser && (
                          <button
                            onClick={() => copyMessage(msg.id, msg.content)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-300"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-xs flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Fallback Bar */}
            <div className="px-3 py-1.5 bg-emerald-950/30 border-t border-emerald-500/10 flex items-center justify-between text-[11px]">
              <span className="text-emerald-300 font-medium">Need instant human agronomist?</span>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20was%20chatting%20with%20AI%20Advisor%20and%20need%20farm%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold underline flex items-center gap-1"
              >
                <span>WhatsApp (+91 9203544140)</span>
              </a>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about spawn, cost, setup, climate..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
