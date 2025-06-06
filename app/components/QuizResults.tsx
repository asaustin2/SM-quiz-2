'use client';

import { useEffect, useState } from 'react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  leadData: any;
  onRestart: () => void;
}

export default function QuizResults({ score, totalQuestions, leadData, onRestart }: QuizResultsProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const isEligibleForSwag = score >= 80;

  useEffect(() => {
    if (isEligibleForSwag) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [isEligibleForSwag]);

  const getResultMessage = () => {
    if (score >= 90) return "You're a Summer Marketing Legend! 🏆";
    if (score >= 80) return "Beach Boss Status Achieved! 🏖️";
    if (score >= 70) return "Solid Sandcastle Builder! 🏰";
    if (score >= 60) return "Catching Some Marketing Waves! 🌊";
    return "Time to Work on That Summer Tan! ☀️";
  };

  const getResultDescription = () => {
    if (score >= 80) {
      return "Your marketing game is hotter than a summer day! Check your email for details about your free Sendoso swag.";
    }
    return "You're getting warmer! Try again to score 80% or higher and unlock some sweet Sendoso swag.";
  };

  const shareText = `I just scored ${score}% on the Summer Vibes Marketing Quiz! 🌴 Think you can beat my score? Take the quiz and win free swag from @Sendoso!`;

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(url);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <span className="text-2xl">🎉</span>
            </div>
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        <div className="mb-8">
          <div className="text-8xl mb-4">{isEligibleForSwag ? '🏆' : '🌊'}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 mb-4">
            {getResultMessage()}
          </h1>
          <div className="text-6xl font-bold text-gray-800 mb-2">{score}%</div>
          <p className="text-xl text-gray-600 mb-4">
            You got {Math.round((score / 100) * totalQuestions)} out of {totalQuestions} questions correct!
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {getResultDescription()}
          </p>
        </div>

        {leadData && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Thanks for playing, {leadData.firstName}! 🎊
            </p>
            {isEligibleForSwag && (
              <p className="text-gray-700">
                We'll send swag details to <span className="font-medium">{leadData.email}</span>
              </p>
            )}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-4 font-medium">Share your results:</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleShare('twitter')}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Share on X
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Share on LinkedIn
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
              >
                Share on Facebook
              </button>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="w-full max-w-md mx-auto py-4 px-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            Take the Quiz Again 🔄
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Want to learn more about Sendoso?</p>
          <a
            href="https://sendoso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            Visit Sendoso.com
          </a>
        </div>
      </div>
    </div>
  );
}