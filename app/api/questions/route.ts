/**
 * /api/questions
 *
 * GET  — returns the active question bank (server override → bundled fallback)
 * POST — saves a new question bank to data/questions.json
 */

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { questions as bundledQuestions } from "@/app/lib/questions";

const DATA_FILE = path.join(process.cwd(), "data", "questions.json");

async function readOverride() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch {
    // file doesn't exist yet or is corrupt — fall through
  }
  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const override = await readOverride();

  // ?meta=1 → return metadata only (used by hasOverride())
  if (searchParams.get("meta") === "1") {
    return NextResponse.json({ hasOverride: override !== null });
  }

  return NextResponse.json(override ?? bundledQuestions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    await fs.writeFile(DATA_FILE, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true, count: body.length });
  } catch (err) {
    console.error("[api/questions POST]", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await fs.unlink(DATA_FILE);
  } catch {
    // already gone — that's fine
  }
  return NextResponse.json({ ok: true });
}
