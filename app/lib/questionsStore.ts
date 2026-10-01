/**
 * questionsStore.ts
 *
 * Single source of truth for questions at runtime.
 * - Reads from localStorage override first (set by the admin page).
 * - Falls back to the bundled static question bank.
 * - The exam page calls getActiveQuestions() on every session start.
 */

import { questions as bundledQuestions, Question } from "@/app/lib/questions";

export const STORAGE_KEY = "adminQuestions";

/** Return the active question bank (override → bundled fallback). */
export function getActiveQuestions(): Question[] {
  if (typeof window === "undefined") return bundledQuestions;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return bundledQuestions;
    const parsed: Question[] = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch {
    // corrupt data — ignore and use bundled
  }
  return bundledQuestions;
}

/** Persist an edited question bank to localStorage. */
export function saveQuestions(qs: Question[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(qs));
}

/** Clear the override and revert to the bundled questions. */
export function resetToDefault(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/** True if an override is currently active. */
export function hasOverride(): boolean {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(STORAGE_KEY);
}

export type { Question };
export { bundledQuestions };
