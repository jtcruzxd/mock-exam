/**
 * questionsStore.ts
 *
 * Single source of truth for questions at runtime.
 * - Server-side: reads/writes via /api/questions (persisted to data/questions.json).
 * - Falls back to the bundled static question bank when the API returns nothing.
 * - The exam page calls getActiveQuestions() on every session start.
 *
 * localStorage is no longer used — data is shared across all devices.
 */

import { questions as bundledQuestions, Question } from "@/app/lib/questions";

export type { Question };
export { bundledQuestions };

/** Return the active question bank from the server (falls back to bundled). */
export async function getActiveQuestions(): Promise<Question[]> {
  try {
    const res = await fetch("/api/questions", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: Question[] = await res.json();
    if (Array.isArray(data) && data.length > 0) return data;
  } catch (err) {
    console.warn("[questionsStore] Could not reach /api/questions:", err);
  }
  return bundledQuestions;
}

/** Persist a question bank to the server. */
export async function saveQuestions(qs: Question[]): Promise<void> {
  const res = await fetch("/api/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(qs),
  });
  if (!res.ok) throw new Error(`Failed to save questions: HTTP ${res.status}`);
}

/** Clear the server override and revert to bundled questions. */
export async function resetToDefault(): Promise<void> {
  await fetch("/api/questions", { method: "DELETE" });
}

/** True if a server override is currently active. */
export async function hasOverride(): Promise<boolean> {
  try {
    const res = await fetch("/api/questions?meta=1", { cache: "no-store" });
    if (!res.ok) return false;
    const data: { hasOverride: boolean } = await res.json();
    return data.hasOverride === true;
  } catch {
    return false;
  }
}
