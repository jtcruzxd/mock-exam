/**
 * examConfig.ts
 * Stores editable exam metadata — title, exam type, school info, etc.
 * Admin page can override these via localStorage.
 */

export interface ExamConfig {
  school: string;
  department: string;
  examType: string;
  subject: string;
  instruction: string;
}

export const defaultExamConfig: ExamConfig = {
  school: "Occidental Mindoro State University",
  department: "School of Accountancy",
  examType: "Midterm Examination",
  subject: "Data Warehousing and Management",
  instruction: "Choose the correct answer for each item.",
};

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
  } catch {
    // ignore
  }
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
