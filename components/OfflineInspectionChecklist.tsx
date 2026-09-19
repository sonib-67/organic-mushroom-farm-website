"use client";

import React, { useState, useEffect } from "react";
import {
  WifiOff,
  Wifi,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  RotateCcw,
  Phone,
  X,
  ChevronDown,
  ChevronUp,
  Thermometer,
  Droplets,
  Wind,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  text: string;
  category: "climate" | "water" | "crop" | "hygiene" | "custom";
  completed: boolean;
}

const DEFAULT_TASKS: ChecklistItem[] = [
  // Climate & Ventilation
  {
    id: "c1",
    category: "climate",
    text: "Growing Room Temp Checked (Button: 16-18°C | Oyster: 22-26°C | Milky: 28-35°C)",
    completed: false,
  },
  {
    id: "c2",
    category: "climate",
    text: "Relative Humidity (RH) maintained between 85% - 92%",
    completed: false,
  },
  {
    id: "c3",
    category: "climate",
    text: "Fresh air exchange / exhaust ventilation cycle run for 20-30 mins",
    completed: false,
  },
  // Watering & Moisture
  {
    id: "w1",
    category: "water",
    text: "Casing layer / bag moisture tested by gentle squeeze (no dry patches)",
    completed: false,
  },
  {
    id: "w2",
    category: "water",
    text: "Polyhouse floor & jute walls lightly misted to sustain humidity",
    completed: false,
  },
  {
    id: "w3",
    category: "water",
    text: "Sprayer nozzles inspected and filtered clean water refilled",
    completed: false,
  },
  // Crop & Disease Inspection
  {
    id: "cr1",
    category: "crop",
    text: "Bags inspected for uniform pinhead emergence & mycelium spread",
    completed: false,
  },
  {
    id: "cr2",
    category: "crop",
    text: "Scanned for contamination (Green mold / Trichoderma / Yellow drops) & isolated if found",
    completed: false,
  },
  {
    id: "cr3",
    category: "crop",
    text: "Harvested mature flush using clean twist-off method (no stem debris left)",
    completed: false,
  },
  // Hygiene & Bio-Security
  {
    id: "h1",
    category: "hygiene",
    text: "Entrance footwear disinfectant dip (Potassium permanganate/Formalin) refreshed",
    completed: false,
  },
  {
    id: "h2",
    category: "hygiene",
    text: "All harvest waste & spent compost transferred to outdoor pit",
    completed: false,
  },
  {
    id: "h3",
    category: "hygiene",
    text: "Insect entry nets, wire mesh, and double-door seals verified tight",
    completed: false,
  },
];

export function OfflineInspectionChecklist() {
  const [isOffline, setIsOffline] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [shift, setShift] = useState<"morning" | "evening">("morning");
  const [tasks, setTasks] = useState<ChecklistItem[]>(DEFAULT_TASKS);
  const [newTaskText, setNewTaskText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showOnlineToast, setShowOnlineToast] = useState(false);

  // Initialize network status & load saved tasks from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check initial online status
    if (!navigator.onLine) {
      setIsOffline(true);
      setIsOpen(true);
    }

    // Load persisted tasks
    try {
      const saved = localStorage.getItem("omf_farm_checklist_tasks_v1");
      if (saved) {
        setTasks(JSON.parse(saved));
      }
    } catch {
      // ignore
    }

    const handleOffline = () => {
      setIsOffline(true);
      setIsOpen(true);
      setIsMinimized(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineToast(true);
      const timer = setTimeout(() => {
        setShowOnlineToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Save tasks to localStorage whenever modified
  const saveTasks = (updated: ChecklistItem[]) => {
    setTasks(updated);
    try {
      localStorage.setItem(
        "omf_farm_checklist_tasks_v1",
        JSON.stringify(updated)
      );
    } catch {
      // ignore
    }
  };

  const toggleTask = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(updated);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: ChecklistItem = {
      id: "cust_" + Date.now(),
      text: newTaskText.trim(),
      category: "custom",
      completed: false,
    };
    saveTasks([newTask, ...tasks]);
    setNewTaskText("");
  };

  const deleteTask = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
  };

  const resetAllTasks = () => {
    if (
      window.confirm(
        "Reset all checklist items for the next inspection shift?"
      )
    ) {
      const reset = DEFAULT_TASKS.map((t) => ({ ...t, completed: false }));
      saveTasks(reset);
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredTasks =
    selectedFilter === "all"
      ? tasks
      : tasks.filter((t) => t.category === selectedFilter);

  return (
    <>
      {/* Toast Notification when Reconnecting Online */}
      {showOnlineToast && (
        <div className="fixed top-18 right-4 z-[99999] bg-emerald-600 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <Wifi className="w-4 h-4 text-emerald-200 animate-pulse" />
          <span>Back Online! Your farm checklist progress is saved.</span>
          <button
            onClick={() => setShowOnlineToast(false)}
            className="ml-2 hover:opacity-80 p-0.5"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Trigger Dock Button (Always accessible when offline or clicked) */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className={`fixed bottom-20 left-4 z-40 flex items-center gap-2 px-3.5 py-2 rounded-2xl backdrop-blur-xl border transition-all duration-200 shadow-lg active:scale-95 group ${
            isOffline
              ? "bg-amber-500/90 text-white border-amber-400 shadow-amber-500/25 animate-bounce"
              : "bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border-purple-500/30 hover:border-purple-500/50 shadow-purple-500/10"
          }`}
          title="Daily Farm Inspection Checklist (Works Offline)"
        >
          {isOffline ? (
            <WifiOff className="w-4 h-4 text-white" />
          ) : (
            <ClipboardList className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
          )}
          <span className="text-xs font-bold whitespace-nowrap">
            {isOffline ? "Offline Farm Checklist" : "Daily Farm Checklist"}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold">
            {completedCount}/{totalCount}
          </span>
        </button>
      )}

      {/* Main Checklist Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm transition-all duration-200">
          <div
            className={`w-full max-w-2xl bg-white dark:bg-slate-950 rounded-t-3xl sm:rounded-3xl border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              isMinimized ? "max-h-20" : "max-h-[92vh] sm:max-h-[85vh]"
            }`}
          >
            {/* Header: 3D Liquid Glass with Purple, Blue & Green Neon Accent */}
            <div className="relative p-4 sm:p-5 border-b border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-purple-500/10 via-sky-400/10 to-emerald-400/10 shrink-0">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                    alt="Organic Mushroom Farm Logo"
                    className="w-9 h-9 shrink-0 object-contain"
                    width="36"
                    height="36"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate">
                        Daily Farm Inspection Checklist
                      </h2>
                      {isOffline ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          <WifiOff className="w-3 h-3" /> Offline Mode Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <Wifi className="w-3 h-3" /> Online & Auto-Sync
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      Bina internet ke bhi kaam karega • Sabhi progress phone
                      mein safe rahegi
                    </p>
                  </div>
                </div>

                {/* Window Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    title={isMinimized ? "Expand Checklist" : "Minimize"}
                    aria-label="Toggle Minimize"
                  >
                    {isMinimized ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    title="Close"
                    aria-label="Close Checklist"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Shift Switcher & Progress Bar (When not minimized) */}
              {!isMinimized && (
                <div className="mt-3.5 pt-3 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Shift Selection */}
                  <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold">
                    <button
                      onClick={() => setShift("morning")}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        shift === "morning"
                          ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-300 shadow-sm"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      🌅 Morning Shift
                    </button>
                    <button
                      onClick={() => setShift("evening")}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        shift === "evening"
                          ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-300 shadow-sm"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      🌇 Evening Shift
                    </button>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3 w-full sm:w-auto sm:min-w-[200px]">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 transition-all duration-300 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                      {completedCount}/{totalCount} ({progressPercent}%)
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Body Content (Checklist, Tasks, Add form) */}
            {!isMinimized && (
              <>
                {/* Category Filters */}
                <div className="px-4 sm:px-5 py-2.5 border-b border-slate-200/70 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 flex items-center gap-1.5 overflow-x-auto text-[11px] font-semibold scrollbar-none">
                  <button
                    onClick={() => setSelectedFilter("all")}
                    className={`px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
                      selectedFilter === "all"
                        ? "bg-purple-600 text-white font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    All Tasks ({totalCount})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("climate")}
                    className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1 transition-colors ${
                      selectedFilter === "climate"
                        ? "bg-sky-600 text-white font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Thermometer className="w-3 h-3 text-sky-400" /> Climate (3)
                  </button>
                  <button
                    onClick={() => setSelectedFilter("water")}
                    className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1 transition-colors ${
                      selectedFilter === "water"
                        ? "bg-cyan-600 text-white font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Droplets className="w-3 h-3 text-cyan-400" /> Moisture (3)
                  </button>
                  <button
                    onClick={() => setSelectedFilter("crop")}
                    className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1 transition-colors ${
                      selectedFilter === "crop"
                        ? "bg-emerald-600 text-white font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Wind className="w-3 h-3 text-emerald-400" /> Crop &
                    Disease (3)
                  </button>
                  <button
                    onClick={() => setSelectedFilter("hygiene")}
                    className={`px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1 transition-colors ${
                      selectedFilter === "hygiene"
                        ? "bg-purple-700 text-white font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    <ShieldCheck className="w-3 h-3 text-purple-400" /> Hygiene
                    (3)
                  </button>
                </div>

                {/* Tasks List */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5">
                  {filteredTasks.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 text-xs">
                      No tasks in this category.
                    </div>
                  ) : (
                    filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer select-none ${
                          task.completed
                            ? "bg-emerald-500/[0.06] border-emerald-500/25 dark:bg-emerald-500/10 dark:border-emerald-500/30"
                            : "bg-slate-50/80 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:border-purple-400/40"
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0"
                          aria-label={
                            task.completed
                              ? "Mark uncompleted"
                              : "Mark completed"
                          }
                        >
                          {task.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>

                        <div className="flex-1 min-w-0">
                          <span
                            className={`text-xs sm:text-sm font-medium leading-relaxed block ${
                              task.completed
                                ? "line-through text-slate-400 dark:text-slate-500"
                                : "text-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {task.text}
                          </span>
                        </div>

                        {task.category === "custom" && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteTask(task.id);
                            }}
                            className="text-slate-400 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Delete custom task"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Add Custom Task Input */}
                <form
                  onSubmit={addTask}
                  className="p-3 sm:px-5 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/30 flex items-center gap-2 shrink-0"
                >
                  <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Apna koi naya task add karein (e.g. AC filter safai)..."
                    className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    disabled={!newTaskText.trim()}
                    className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Task</span>
                  </button>
                </form>

                {/* Footer Controls & Emergency Offline Phone Helpline */}
                <div className="p-3 sm:p-4 border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-950 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={resetAllTasks}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Checklist for Next Day</span>
                    </button>
                  </div>

                  {/* Direct Phone Call Button (Works without internet via cellular dialer) */}
                  <a
                    href="tel:+919179126868"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95 ml-auto"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Emergency Call: +91 91791 26868</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default OfflineInspectionChecklist;
