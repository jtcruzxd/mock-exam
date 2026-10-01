/**
 * /api/config
 *
 * GET    — returns the active exam config (server override → default fallback)
 * POST   — saves a new config to data/config.json
 * DELETE — removes the override, reverting to defaults
 */

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { defaultExamConfig } from "@/app/lib/examConfig";

const DATA_FILE = path.join(process.cwd(), "data", "config.json");

async function readOverride() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return { ...defaultExamConfig, ...parsed };
    }
  } catch {
    // file doesn't exist yet or is corrupt — fall through
  }
  return null;
}

export async function GET() {
  const override = await readOverride();
  return NextResponse.json(override ?? defaultExamConfig);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    await fs.writeFile(DATA_FILE, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/config POST]", err);
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
