"use client";

import { Question } from "@/app/lib/questions";
import { type ExamConfig } from "@/app/lib/examConfig";

interface ResultsPageProps {
  studentName: string;
  studentSection: string;
  questions: Question[];
  answers: Record<number, string>;
  config: ExamConfig;
  onRetake: () => void;
}

export default function ResultsPage({
  studentName,
  studentSection,
  questions,
  answers,
  config,
  onRetake,
}: ResultsPageProps) {
  const total = questions.length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const wrong = total - correct;
  const score = Math.round((correct / total) * 100);

  function getGradeLabel(pct: number) {
    if (pct >= 90) return { label: "Excellent", color: "text-emerald-600" };
    if (pct >= 80) return { label: "Very Good", color: "text-blue-600" };
    if (pct >= 75) return { label: "Passed", color: "text-indigo-600" };
    return { label: "Needs Improvement", color: "text-red-500" };
  }

  const { label: gradeLabel, color: gradeColor } = getGradeLabel(score);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-indigo-700">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <p className="text-indigo-200 text-xs uppercase tracking-widest mb-1">
            Exam Results
          </p>
          <h1 className="text-white text-xl font-bold">
            {config.subject}
          </h1>
          <p className="text-indigo-200 text-sm mt-1">{config.examType}</p>
        </div>
      </div>

      {/* Score card */}
      <div className="max-w-3xl mx-auto px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm mb-1">{studentName}</p>
            <p className="text-gray-400 text-xs">{studentSection}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Score ring */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke={score >= 75 ? "#4f46e5" : "#ef4444"}
                    strokeWidth="3"
                    strokeDasharray={`${score} ${100 - score}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-gray-800">
                    {score}%
                  </span>
                </div>
              </div>
              <span className={`mt-2 text-sm font-semibold ${gradeColor}`}>
                {gradeLabel}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-2xl font-extrabold text-gray-800">{total}</p>
                <p className="text-xs text-gray-500 mt-0.5">Total</p>
              </div>
              <div className="bg-emerald-50 rounded-xl px-4 py-3">
                <p className="text-2xl font-extrabold text-emerald-600">{correct}</p>
                <p className="text-xs text-gray-500 mt-0.5">Correct</p>
              </div>
              <div className="bg-red-50 rounded-xl px-4 py-3">
                <p className="text-2xl font-extrabold text-red-500">{wrong}</p>
                <p className="text-xs text-gray-500 mt-0.5">Wrong</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onRetake}
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm px-8 py-2.5 rounded-lg transition shadow"
            >
              Retake Exam
            </button>
          </div>
        </div>

        {/* Answer review */}
        <h2 className="text-gray-700 font-semibold text-sm uppercase tracking-wide mb-3 px-1">
          Answer Review
        </h2>

        <div className="space-y-4">
          {questions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.answer;
            const correctChoice = q.choices.find((c) => c.label === q.answer);
            const userChoice = q.choices.find((c) => c.label === userAnswer);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border shadow-sm overflow-hidden ${
                  isCorrect ? "border-emerald-200" : "border-red-200"
                }`}
              >
                {/* Question header */}
                <div
                  className={`px-4 py-2 flex items-center gap-2 ${
                    isCorrect ? "bg-emerald-50" : "bg-red-50"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 ${
                      isCorrect
                        ? "bg-emerald-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    Question {index + 1}
                  </span>
                </div>

                <div className="px-5 py-4">
                  <p className="text-gray-800 text-sm font-medium leading-relaxed mb-4">
                    {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.choices.map((choice) => {
                      const isUserPick = choice.label === userAnswer;
                      const isCorrectPick = choice.label === q.answer;

                      let rowStyle =
                        "border-gray-200 bg-gray-50 text-gray-600";
                      if (isCorrectPick) {
                        rowStyle =
                          "border-emerald-400 bg-emerald-50 text-emerald-800 font-medium";
                      } else if (isUserPick && !isCorrectPick) {
                        rowStyle =
                          "border-red-400 bg-red-50 text-red-700 line-through";
                      }

                      return (
                        <div
                          key={choice.label}
                          className={`flex items-start gap-2 px-3 py-2 rounded-lg border text-sm ${rowStyle}`}
                        >
                          <span className="font-semibold uppercase shrink-0">
                            {choice.label}.
                          </span>
                          <span>{choice.text}</span>
                          {isCorrectPick && (
                            <span className="ml-auto shrink-0 text-emerald-600 text-xs font-bold">
                              ✓ Correct
                            </span>
                          )}
                          {isUserPick && !isCorrectPick && (
                            <span className="ml-auto shrink-0 text-red-500 text-xs font-bold">
                              Your answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!isCorrect && (
                    <p className="mt-3 text-xs text-gray-500">
                      <span className="font-semibold text-emerald-700">
                        Correct answer:
                      </span>{" "}
                      <span className="uppercase font-bold">{q.answer}.</span>{" "}
                      {correctChoice?.text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onRetake}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm px-8 py-3 rounded-lg transition shadow"
          >
            Retake Exam
          </button>
          <p className="text-gray-400 text-xs mt-3">
            Educate · Empower · Excel
          </p>
        </div>
      </div>
    </div>
  );
}
