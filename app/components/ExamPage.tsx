"use client";

import { useState } from "react";
import { Question } from "@/app/lib/questions";
import { type ExamConfig } from "@/app/lib/examConfig";

interface ExamPageProps {
  studentName: string;
  studentSection: string;
  questions: Question[];
  config: ExamConfig;
  onSubmit: (answers: Record<number, string>) => void;
}

export default function ExamPage({
  studentName,
  studentSection,
  questions,
  config,
  onSubmit,
}: ExamPageProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [unansweredWarning, setUnansweredWarning] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);

  function handleSelect(questionId: number, label: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
    if (unansweredWarning) setUnansweredWarning(false);
  }

  function handleSubmitClick() {
    if (answeredCount < totalQuestions) {
      setUnansweredWarning(true);
      // Scroll to first unanswered
      const firstUnanswered = questions.find((q) => !answers[q.id]);
      if (firstUnanswered) {
        const el = document.getElementById(`question-${firstUnanswered.id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setShowConfirm(true);
  }

  function handleConfirmSubmit() {
    setShowConfirm(false);
    onSubmit(answers);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 bg-indigo-700 shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{studentName}</p>
            <p className="text-indigo-200 text-xs truncate">{studentSection}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-white text-xs font-medium">
                {answeredCount}/{totalQuestions} answered
              </span>
              <div className="w-32 bg-indigo-500 rounded-full h-1.5 mt-1">
                <div
                  className="bg-white rounded-full h-1.5 transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmitClick}
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-sm px-4 py-2 rounded-lg transition shadow"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Exam header */}
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-2">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            {config.subject}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{config.examType}</p>
          <p className="text-gray-400 text-xs mt-1">
            {config.instruction}
          </p>
        </div>

        {unansweredWarning && (
          <div className="mb-4 bg-amber-50 border border-amber-300 text-amber-800 text-sm px-4 py-3 rounded-lg flex items-start gap-2">
            <span className="mt-0.5">⚠️</span>
            <span>
              You have <strong>{totalQuestions - answeredCount}</strong> unanswered{" "}
              {totalQuestions - answeredCount === 1 ? "question" : "questions"}. Please
              answer all items before submitting.
            </span>
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="max-w-3xl mx-auto px-4 pb-24 space-y-6">
        {questions.map((q, index) => {
          const isAnswered = !!answers[q.id];
          const isUnansweredHighlight =
            unansweredWarning && !isAnswered;

          return (
            <div
              key={q.id}
              id={`question-${q.id}`}
              className={`bg-white rounded-xl shadow-sm border transition ${
                isUnansweredHighlight
                  ? "border-amber-400 ring-1 ring-amber-300"
                  : isAnswered
                  ? "border-indigo-100"
                  : "border-gray-200"
              }`}
            >
              <div className="px-5 pt-5 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                      isAnswered
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium pt-0.5">
                    {q.question}
                  </p>
                </div>

                <div className="space-y-2 pl-10">
                  {q.choices.map((choice) => {
                    const isSelected = answers[q.id] === choice.label;
                    return (
                      <label
                        key={choice.label}
                        className={`flex items-start gap-3 px-4 py-3 rounded-lg border cursor-pointer transition ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={choice.label}
                          checked={isSelected}
                          onChange={() => handleSelect(q.id, choice.label)}
                          className="mt-0.5 accent-indigo-600 shrink-0"
                        />
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold uppercase mr-1">
                            {choice.label}.
                          </span>
                          {choice.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 rounded-full h-2 transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">
              {answeredCount}/{totalQuestions}
            </span>
          </div>
          <button
            onClick={handleSubmitClick}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition shadow"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Confirmation modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Submit Exam?</h3>
            <p className="text-gray-600 text-sm mb-6">
              You have answered all <strong>{totalQuestions}</strong> questions. Once
              submitted, you cannot change your answers. The correct answers will be
              revealed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 border border-gray-300 text-gray-700 font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-50 transition"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="flex-1 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm py-2.5 rounded-lg transition shadow"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
