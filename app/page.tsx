"use client";

import { useState, useCallback } from "react";
import { getActiveQuestions } from "@/app/lib/questionsStore";
import { getActiveConfig, defaultExamConfig, type ExamConfig } from "@/app/lib/examConfig";
import LandingPage from "@/app/components/LandingPage";
import ExamPage from "@/app/components/ExamPage";
import ResultsPage from "@/app/components/ResultsPage";
import type { Question } from "@/app/lib/questions";

type View = "landing" | "exam" | "results";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Home() {
  const [view, setView] = useState<View>("landing");
  const [studentName, setStudentName] = useState("");
  const [studentSection, setStudentSection] = useState("");
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, string>>({});
  // Default to defaultExamConfig so it's never null
  const [examConfig, setExamConfig] = useState<ExamConfig>(defaultExamConfig);

  const handleStart = useCallback((name: string, section: string) => {
    setStudentName(name);
    setStudentSection(section);
    setShuffledQuestions(shuffleArray(getActiveQuestions()));
    setExamConfig(getActiveConfig());
    setView("exam");
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = useCallback((answers: Record<number, string>) => {
    setSubmittedAnswers(answers);
    setView("results");
    window.scrollTo({ top: 0 });
  }, []);

  const handleRetake = useCallback(() => {
    setSubmittedAnswers({});
    setShuffledQuestions([]);
    setExamConfig(defaultExamConfig);
    setStudentName("");
    setStudentSection("");
    setView("landing");
    window.scrollTo({ top: 0 });
  }, []);

  if (view === "landing") {
    // Pass onStart so the button actually works
    return <LandingPage onStart={handleStart} />;
  }

  if (view === "exam") {
    return (
      <ExamPage
        studentName={studentName}
        studentSection={studentSection}
        questions={shuffledQuestions}
        config={examConfig}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <ResultsPage
      studentName={studentName}
      studentSection={studentSection}
      questions={shuffledQuestions}
      answers={submittedAnswers}
      config={examConfig}
      onRetake={handleRetake}
    />
  );
}
