"use client";

import { useState, useEffect, useRef } from "react";
import {
  getActiveQuestions,
  saveQuestions,
  resetToDefault,
  hasOverride,
  bundledQuestions,
  type Question,
} from "@/app/lib/questionsStore";
import {
  getActiveConfig,
  saveConfig,
  resetConfig,
  defaultExamConfig,
  type ExamConfig,
} from "@/app/lib/examConfig";

const ADMIN_PASSWORD = "omsc2025";

// ─── helpers ────────────────────────────────────────────────────────────────

function newQuestion(): Question {
  return {
    id: Date.now(),
    question: "",
    choices: [
      { label: "a", text: "" },
      { label: "b", text: "" },
      { label: "c", text: "" },
      { label: "d", text: "" },
    ],
    answer: "a",
  };
}

function deepClone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

// ─── Password gate ──────────────────────────────────────────────────────────

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setPw("");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
        <div className="bg-indigo-700 px-6 py-5 text-center">
          <div className="text-3xl mb-1">🔐</div>
          <h1 className="text-white font-bold text-lg">Admin Access</h1>
          <p className="text-indigo-200 text-xs mt-1">
            Data Warehousing &amp; Management — Exam Editor
          </p>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={pw}
              autoFocus
              onChange={(e) => {
                setPw(e.target.value);
                setError(false);
              }}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                error
                  ? "border-red-400 bg-red-50 text-red-700"
                  : "border-gray-300 bg-gray-50 text-gray-800"
              }`}
              placeholder="Enter admin password"
            />
            {error && (
              <p className="text-red-500 text-xs mt-1">Incorrect password.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2.5 rounded-lg text-sm transition shadow"
          >
            Unlock
          </button>
          <a
            href="/"
            className="block text-center text-xs text-gray-400 hover:text-indigo-600 transition"
          >
            ← Back to exam
          </a>
        </form>
      </div>
    </div>
  );
}

// ─── Question Editor Modal ───────────────────────────────────────────────────

interface EditorProps {
  question: Question;
  index: number;
  onSave: (q: Question) => void;
  onCancel: () => void;
}

function QuestionEditor({ question, index, onSave, onCancel }: EditorProps) {
  const [draft, setDraft] = useState<Question>(deepClone(question));
  const [errors, setErrors] = useState<Record<string, string>>({});

  function setQuestionText(text: string) {
    setDraft((d) => ({ ...d, question: text }));
  }

  function setChoiceText(label: string, text: string) {
    setDraft((d) => ({
      ...d,
      choices: d.choices.map((c) =>
        c.label === label ? { ...c, text } : c
      ),
    }));
  }

  function addChoice() {
    if (draft.choices.length >= 6) return;
    const labels = ["a", "b", "c", "d", "e", "f"];
    const nextLabel = labels[draft.choices.length];
    setDraft((d) => ({
      ...d,
      choices: [...d.choices, { label: nextLabel, text: "" }],
    }));
  }

  function removeChoice(label: string) {
    if (draft.choices.length <= 2) return;
    setDraft((d) => {
      const updated = d.choices.filter((c) => c.label !== label);
      return {
        ...d,
        choices: updated,
        answer: updated.some((c) => c.label === d.answer)
          ? d.answer
          : updated[0].label,
      };
    });
  }

  function setAnswer(label: string) {
    setDraft((d) => ({ ...d, answer: label }));
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!draft.question.trim()) errs.question = "Question text is required.";
    draft.choices.forEach((c) => {
      if (!c.text.trim()) errs[`choice_${c.label}`] = "Choice text is required.";
    });
    if (!draft.choices.some((c) => c.label === draft.answer)) {
      errs.answer = "Correct answer must match one of the choices.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSave() {
    if (validate()) onSave(draft);
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8">
        {/* Header */}
        <div className="bg-indigo-700 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-white font-bold text-base">
            {index === -1 ? "Add New Question" : `Edit Question ${index + 1}`}
          </h2>
          <button
            onClick={onCancel}
            className="text-indigo-200 hover:text-white text-xl font-bold transition"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Question text */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Question Text
            </label>
            <textarea
              value={draft.question}
              onChange={(e) => setQuestionText(e.target.value)}
              rows={3}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none ${
                errors.question ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
              }`}
              placeholder="Enter the question..."
            />
            {errors.question && (
              <p className="text-red-500 text-xs mt-1">{errors.question}</p>
            )}
          </div>

          {/* Choices */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Choices &amp; Correct Answer
              </label>
              {draft.choices.length < 6 && (
                <button
                  type="button"
                  onClick={addChoice}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition"
                >
                  + Add choice
                </button>
              )}
            </div>

            <div className="space-y-2">
              {draft.choices.map((choice) => {
                const isCorrect = draft.answer === choice.label;
                return (
                  <div key={choice.label} className="flex items-start gap-2">
                    {/* Radio — marks as correct answer */}
                    <button
                      type="button"
                      onClick={() => setAnswer(choice.label)}
                      title="Mark as correct answer"
                      className={`mt-2.5 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-gray-300 bg-white hover:border-emerald-400"
                      }`}
                    >
                      {isCorrect && (
                        <span className="w-2 h-2 bg-white rounded-full block" />
                      )}
                    </button>

                    {/* Label badge */}
                    <span
                      className={`mt-2 shrink-0 text-xs font-bold uppercase w-5 text-center ${
                        isCorrect ? "text-emerald-600" : "text-gray-400"
                      }`}
                    >
                      {choice.label}.
                    </span>

                    {/* Choice text input */}
                    <div className="flex-1">
                      <input
                        type="text"
                        value={choice.text}
                        onChange={(e) => setChoiceText(choice.label, e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                          errors[`choice_${choice.label}`]
                            ? "border-red-400 bg-red-50"
                            : isCorrect
                            ? "border-emerald-300 bg-emerald-50"
                            : "border-gray-300 bg-gray-50"
                        }`}
                        placeholder={`Choice ${choice.label.toUpperCase()}…`}
                      />
                      {errors[`choice_${choice.label}`] && (
                        <p className="text-red-500 text-xs mt-0.5">
                          {errors[`choice_${choice.label}`]}
                        </p>
                      )}
                    </div>

                    {/* Remove button */}
                    {draft.choices.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeChoice(choice.label)}
                        className="mt-2 text-gray-300 hover:text-red-500 transition text-lg font-bold shrink-0"
                        title="Remove choice"
                      >
                        ×
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {errors.answer && (
              <p className="text-red-500 text-xs mt-2">{errors.answer}</p>
            )}

            <p className="text-xs text-gray-400 mt-2">
              Click the circle on the left to mark a choice as the correct answer.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <button
              onClick={onCancel}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm py-2.5 rounded-lg transition shadow"
            >
              Save Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Page ─────────────────────────────────────────────────────────

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [overrideActive, setOverrideActive] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const importRef = useRef<HTMLInputElement>(null);

  // Exam config state
  const [config, setConfig] = useState<ExamConfig>(defaultExamConfig);
  const [configDirty, setConfigDirty] = useState(false);

  // Load questions + config after unlock
  useEffect(() => {
    if (!unlocked) return;
    setQuestions(deepClone(getActiveQuestions()));
    setOverrideActive(hasOverride());
    setConfig(getActiveConfig());
  }, [unlocked]);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  // ── Config handlers ───────────────────────────────────────────────────────

  function handleConfigChange(field: keyof ExamConfig, value: string) {
    setConfig((prev) => ({ ...prev, [field]: value }));
    setConfigDirty(true);
  }

  function handleSaveConfig() {
    saveConfig(config);
    setConfigDirty(false);
    showToast("Exam settings saved.");
  }

  function handleResetConfig() {
    resetConfig();
    setConfig(defaultExamConfig);
    setConfigDirty(false);
    showToast("Exam settings reset to default.");
  }

  // ── Persist ──────────────────────────────────────────────────────────────

  function handleSave(q: Question) {
    let updated: Question[];
    if (isNew) {
      updated = [...questions, q];
    } else {
      updated = questions.map((existing, i) =>
        i === editingIndex ? q : existing
      );
    }
    setQuestions(updated);
    saveQuestions(updated);
    setOverrideActive(true);
    setEditingIndex(null);
    setIsNew(false);
    showToast(isNew ? "Question added." : "Question saved.");
  }

  function handleDelete(index: number) {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
    saveQuestions(updated);
    setDeleteConfirm(null);
    showToast("Question deleted.");
  }

  function handleMoveUp(index: number) {
    if (index === 0) return;
    const updated = [...questions];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setQuestions(updated);
    saveQuestions(updated);
  }

  function handleMoveDown(index: number) {
    if (index === questions.length - 1) return;
    const updated = [...questions];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setQuestions(updated);
    saveQuestions(updated);
  }

  function handleReset() {
    resetToDefault();
    resetConfig();
    setQuestions(deepClone(bundledQuestions));
    setConfig(defaultExamConfig);
    setOverrideActive(false);
    setConfigDirty(false);
    showToast("Reset to original questions and settings.");
  }

  // ── Export as questions.ts (ready to push) ───────────────────────────────

  function handleExport() {
    const tsContent = `export interface Question {
  id: number;
  question: string;
  choices: { label: string; text: string }[];
  answer: string;
}

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;
    const blob = new Blob([tsContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "questions.ts";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded questions.ts — replace app/lib/questions.ts and push to GitHub.");
  }

  // ── Export config as examConfig.ts (ready to push) ────────────────────────

  function handleExportConfig() {
    const tsContent = `export interface ExamConfig {
  school: string;
  department: string;
  examType: string;
  subject: string;
  instruction: string;
}

export const defaultExamConfig: ExamConfig = ${JSON.stringify(config, null, 2)};

export const CONFIG_STORAGE_KEY = "adminExamConfig";

export function getActiveConfig(): ExamConfig {
  if (typeof window === "undefined") return defaultExamConfig;
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!raw) return defaultExamConfig;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return { ...defaultExamConfig, ...parsed };
    }
  } catch { /* ignore */ }
  return defaultExamConfig;
}

export function saveConfig(config: ExamConfig): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
}

export function resetConfig(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONFIG_STORAGE_KEY);
}
`;
    const blob = new Blob([tsContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "examConfig.ts";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded examConfig.ts — replace app/lib/examConfig.ts and push.");
  }

  // ── Export as JSON (for re-importing) ────────────────────────────────────

  function handleExportJson() {
    const json = JSON.stringify(questions, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "questions-backup.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported questions-backup.json");
  }

  // ── Import ────────────────────────────────────────────────────────────────

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed: Question[] = JSON.parse(ev.target?.result as string);
        if (!Array.isArray(parsed) || parsed.length === 0) throw new Error();
        setQuestions(parsed);
        saveQuestions(parsed);
        setOverrideActive(true);
        showToast(`Imported ${parsed.length} questions.`);
      } catch {
        showToast("❌ Invalid JSON file.");
      }
    };
    reader.readAsText(file);
    // reset input so same file can be re-imported
    e.target.value = "";
  }

  // ── Filter ────────────────────────────────────────────────────────────────

  const filtered = search.trim()
    ? questions.filter(
        (q, i) =>
          q.question.toLowerCase().includes(search.toLowerCase()) ||
          String(i + 1).includes(search)
      )
    : questions;

  // ── Render ────────────────────────────────────────────────────────────────

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  const editingQuestion =
    editingIndex !== null && !isNew ? questions[editingIndex] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-indigo-700 sticky top-0 z-30 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-white font-bold text-base truncate">
              Admin — Exam Editor
            </h1>
            <p className="text-indigo-200 text-xs truncate">
              {questions.length} questions
              {overrideActive && (
                <span className="ml-2 bg-amber-400 text-amber-900 text-xs font-semibold px-1.5 py-0.5 rounded">
                  EDITED
                </span>
              )}
            </p>
          </div>
          <a
            href="/"
            className="shrink-0 text-indigo-200 hover:text-white text-xs font-medium transition"
          >
            ← Exam
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {/* Action bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Add */}
            <button
              onClick={() => { setIsNew(true); setEditingIndex(null); }}
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition shadow"
            >
              + Add Question
            </button>

            {/* Export as questions.ts */}
            <button
              onClick={handleExport}
              className="border border-indigo-300 text-indigo-700 hover:bg-indigo-50 font-semibold text-xs px-4 py-2 rounded-lg transition"
            >
              ↓ Export questions.ts
            </button>

            {/* Export as JSON backup */}
            <button
              onClick={handleExportJson}
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-xs px-4 py-2 rounded-lg transition"
            >
              ↓ Backup JSON
            </button>

            {/* Import */}
            <button
              onClick={() => importRef.current?.click()}
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-xs px-4 py-2 rounded-lg transition"
            >
              ↑ Import JSON
            </button>
            <input
              ref={importRef}
              type="file"
              accept=".json,application/json"
              onChange={handleImport}
              className="hidden"
            />

            {/* Reset */}
            {overrideActive && (
              <button
                onClick={handleReset}
                className="border border-red-300 text-red-600 hover:bg-red-50 font-semibold text-xs px-4 py-2 rounded-lg transition ml-auto"
              >
                ↺ Reset to Original
              </button>
            )}
          </div>

          {overrideActive && (
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 text-xs text-amber-800 space-y-1">
              <p className="font-bold">⚠️ Your edits are saved in this browser only.</p>
              <p>To make them permanent for all students on Vercel:</p>
              <ol className="list-decimal list-inside space-y-0.5 ml-1">
                <li>Click <strong>↓ Export questions.ts</strong> above</li>
                <li>Replace <code className="bg-amber-100 px-1 rounded">mock-exam/app/lib/questions.ts</code> with the downloaded file</li>
                <li>Push to GitHub — Vercel redeploys automatically in ~1 min</li>
              </ol>
            </div>
          )}
        </div>

        {/* Exam Settings panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-700">⚙️ Exam Settings</h2>
            <div className="flex gap-2">
              {configDirty && (
                <button
                  onClick={handleSaveConfig}
                  className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition shadow"
                >
                  Save Settings
                </button>
              )}
              <button
                onClick={handleExportConfig}
                className="border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold text-xs px-3 py-1.5 rounded-lg transition"
              >
                ↓ Export
              </button>
              <button
                onClick={handleResetConfig}
                className="border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-xs px-3 py-1.5 rounded-lg transition"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Subject / Exam Title</label>
              <input
                type="text"
                value={config.subject}
                onChange={(e) => handleConfigChange("subject", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="e.g. Data Warehousing and Management"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Exam Type</label>
              <input
                type="text"
                value={config.examType}
                onChange={(e) => handleConfigChange("examType", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="e.g. Midterm Examination"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">School Name</label>
              <input
                type="text"
                value={config.school}
                onChange={(e) => handleConfigChange("school", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="e.g. Occidental Mindoro State University"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Department</label>
              <input
                type="text"
                value={config.department}
                onChange={(e) => handleConfigChange("department", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="e.g. School of Accountancy"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 mb-1">Instruction Text</label>
              <input
                type="text"
                value={config.instruction}
                onChange={(e) => handleConfigChange("instruction", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="e.g. Choose the correct answer for each item."
              />
            </div>
          </div>

          {configDirty && (
            <p className="text-amber-600 text-xs mt-2">
              You have unsaved changes. Click <strong>Save Settings</strong> to apply.
            </p>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions by text or number…"
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
        </div>

        {/* Question list */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center text-gray-400 py-12 text-sm">
              No questions found.
            </div>
          )}

          {filtered.map((q) => {
            // find real index for operations
            const realIndex = questions.indexOf(q);
            const displayNum = realIndex + 1;
            const correctChoice = q.choices.find((c) => c.label === q.answer);

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    {/* Number badge */}
                    <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center mt-0.5">
                      {displayNum}
                    </span>

                    {/* Question content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-800 text-sm font-medium leading-snug line-clamp-2">
                        {q.question || (
                          <span className="text-gray-400 italic">No question text</span>
                        )}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {q.choices.map((c) => (
                          <span
                            key={c.label}
                            className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                              c.label === q.answer
                                ? "bg-emerald-100 text-emerald-700 font-semibold"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {c.label === q.answer && <span>✓</span>}
                            <span className="uppercase font-bold">{c.label}.</span>{" "}
                            <span className="truncate max-w-[120px]">{c.text}</span>
                          </span>
                        ))}
                      </div>
                      <p className="mt-1.5 text-xs text-emerald-700">
                        <span className="font-semibold">Answer:</span>{" "}
                        {correctChoice?.text ?? q.answer}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="shrink-0 flex flex-col gap-1 items-end">
                      <div className="flex gap-1">
                        <button
                          onClick={() => { setEditingIndex(realIndex); setIsNew(false); }}
                          className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-3 py-1.5 rounded-lg transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(realIndex)}
                          className="text-xs bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3 py-1.5 rounded-lg transition"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="flex gap-1 mt-1">
                        <button
                          onClick={() => handleMoveUp(realIndex)}
                          disabled={realIndex === 0}
                          className="text-xs text-gray-400 hover:text-indigo-600 disabled:opacity-30 px-2 py-1 rounded transition"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => handleMoveDown(realIndex)}
                          disabled={realIndex === questions.length - 1}
                          className="text-xs text-gray-400 hover:text-indigo-600 disabled:opacity-30 px-2 py-1 rounded transition"
                          title="Move down"
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question editor modal */}
      {(editingIndex !== null && !isNew) && editingQuestion && (
        <QuestionEditor
          question={editingQuestion}
          index={editingIndex}
          onSave={handleSave}
          onCancel={() => setEditingIndex(null)}
        />
      )}
      {isNew && (
        <QuestionEditor
          question={newQuestion()}
          index={-1}
          onSave={handleSave}
          onCancel={() => setIsNew(false)}
        />
      )}

      {/* Delete confirm modal */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Delete Question?</h3>
            <p className="text-gray-600 text-sm mb-1">
              Question {deleteConfirm + 1}:
            </p>
            <p className="text-gray-500 text-sm italic mb-6 line-clamp-3">
              &ldquo;{questions[deleteConfirm]?.question}&rdquo;
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-gray-300 text-gray-700 font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2.5 rounded-lg transition shadow"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}
