/**
 * examConfig.ts
 * Stores editable exam metadata — title, exam type, school info, etc.
 * Admin page can override these via /api/config (server-persisted, shared across devices).
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
  subject: "Science, Technology, and Society",
  instruction: "Part I – Choose the correct identification. Part II – Choose the best answer. Part III – Choose True or False.",
};

/** Return the active exam config from the server (falls back to defaults). */
export async function getActiveConfig(): Promise<ExamConfig> {
  try {
    const res = await fetch("/api/config", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && typeof data === "object") {
      return { ...defaultExamConfig, ...data };
    }
  } catch (err) {
    console.warn("[examConfig] Could not reach /api/config:", err);
  }
  return defaultExamConfig;
}

/** Persist the config to the server. */
export async function saveConfig(config: ExamConfig): Promise<void> {
  const res = await fetch("/api/config", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config),
  });
  if (!res.ok) throw new Error(`Failed to save config: HTTP ${res.status}`);
}

/** Remove the server override, reverting to defaultExamConfig. */
export async function resetConfig(): Promise<void> {
  await fetch("/api/config", { method: "DELETE" });
}

// ── Legacy localStorage keys (kept so old browsers don't error on stale data) ──
export const CONFIG_STORAGE_KEY = "adminExamConfig";
