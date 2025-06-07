'use client';

import { useState } from 'react';

interface QuizQuestionType {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact?: string;
}

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answerIndex: number) => void;
  selectedAnswer?: number;
}

export default function QuizQuestion({ question, onAnswer, selectedAnswer }: QuizQuestionProps) {
  const [showFunFact, setShowFunFact] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== undefined) return;
    
    setShowFunFact(true);
    onAnswer(index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedAnswer !== undefined}
            className={`
              relative p-6 rounded-2xl text-left transition-all duration-300 transform
              ${selectedAnswer === undefined
                ? 'hover:scale-[1.02] hover:shadow-lg cursor-pointer bg-white border-2 border-gray-200 hover:border-orange-300'
                : selectedAnswer === index
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-2 border-green-500 scale-[1.02]'
                  : 'bg-red-100 border-2 border-red-500'
                : index === question.correctAnswer
                ? 'bg-green-50 border-2 border-green-300'
                : 'bg-gray-50 border-2 border-gray-200'
              }
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0
                ${selectedAnswer === undefined
                  ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white'
                  : selectedAnswer === index
                  ? index === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : index === question.correctAnswer
                  ? 'bg-green-400 text-white'
                  : 'bg-gray-300 text-gray-600'
                }
              `}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg font-medium text-gray-800">{option}</span>
            </div>
            
            {selectedAnswer !== undefined && index === question.correctAnswer && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Correct!
              </div>
            )}
          </button>
        ))}
      </div>

      {showFunFact && question.funFact && (
        <div className="mt-6 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl animate-fade-in">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-bold text-blue-900 mb-1">Fun Fact!</p>
              <p className="text-blue-800">{question.funFact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}