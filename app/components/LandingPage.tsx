"use client";

import { useState } from "react";

interface LandingPageProps {
  onStart: (name: string, section: string) => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [errors, setErrors] = useState<{ name?: string; section?: string }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; section?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your full name.";
    if (!section.trim()) newErrors.section = "Please enter your course and section.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onStart(name.trim(), section.trim());
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Banner */}
          <div className="bg-indigo-700 px-8 py-6 text-center">
            <p className="text-indigo-200 text-sm font-medium uppercase tracking-widest mb-1">
              Republic of the Philippines
            </p>
            <h1 className="text-white text-xl font-bold leading-tight">
              Occidental Mindoro State University
            </h1>
            <p className="text-indigo-200 text-sm mt-1">School of Accountancy</p>
          </div>

          {/* Exam info */}
          <div className="px-8 py-6 border-b border-gray-100 text-center">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Midterm Examination
            </span>
            <h2 className="text-gray-800 text-2xl font-bold">
              Data Warehousing and Management
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              65 items &nbsp;·&nbsp; Multiple Choice &nbsp;·&nbsp; Randomized
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="e.g. Juan Dela Cruz"
                className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="section"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Course and Section
              </label>
              <input
                id="section"
                type="text"
                value={section}
                onChange={(e) => {
                  setSection(e.target.value);
                  if (errors.section)
                    setErrors((prev) => ({ ...prev, section: undefined }));
                }}
                placeholder="e.g. BSAIS 2-A"
                className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                  errors.section
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300 bg-gray-50"
                }`}
              />
              {errors.section && (
                <p className="text-red-500 text-xs mt-1">{errors.section}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition text-sm tracking-wide shadow-md hover:shadow-lg"
              >
                Start Exam
              </button>
            </div>

            <p className="text-center text-xs text-gray-400">
              Questions are shuffled each session. Correct answers are shown only after submission.
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Educate · Empower · Excel
        </p>
        <p className="text-center mt-2">
          <a href="/admin" className="text-xs text-gray-300 hover:text-indigo-500 transition">
            Admin
          </a>
        </p>
      </div>
    </div>
  );
}
