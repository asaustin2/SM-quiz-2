import Quiz from './components/Quiz';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <Quiz />
      </div>
    </main>
  );
}