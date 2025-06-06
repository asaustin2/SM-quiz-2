'use client';

import { useState } from 'react';
import { quizQuestions } from '../lib/quizData';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import LeadForm from './LeadForm';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState<any>(null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowLeadForm(true);
      }, 1000);
    }
  };

  const handleLeadSubmit = (data: any) => {
    setLeadData(data);
    setShowLeadForm(false);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowLeadForm(false);
    setLeadData(null);
  };

  const calculateScore = () => {
    const correct = answers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;
    return Math.round((correct / quizQuestions.length) * 100);
  };

  if (showResults) {
    return (
      <QuizResults
        score={calculateScore()}
        totalQuestions={quizQuestions.length}
        leadData={leadData}
        onRestart={handleRestart}
      />
    );
  }

  if (showLeadForm) {
    return <LeadForm onSubmit={handleLeadSubmit} score={calculateScore()} />;
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 mb-2">
          Summer Vibes Marketing Quiz 🌴
        </h1>
        <p className="text-gray-600 text-lg">
          Test your B2B marketing knowledge and win Sendoso swag!
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-orange-500">
            {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-400 to-pink-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <QuizQuestion
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        selectedAnswer={answers[currentQuestion]}
      />
    </div>
  );
}