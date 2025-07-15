import InfluenceStyleQuiz from '@/components/InfluenceStyleQuiz';

export const metadata = {
  title: 'Influence Style Quiz | Discover Your Natural Persuasion Style',
  description: 'Take this 2-minute quiz to uncover your natural influence style and get personalized strategies to maximize your persuasive power.',
  alternates: {
    canonical: 'https://convertify.com/quiz',
  },
};

export default function QuizPage() {
  return (
    <section className="relative bg-white dark:bg-gray-900 section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-6 text-gray-900 dark:text-white">
            Discover Your <span className="text-primary-gradient">Influence Style</span>
          </h1>
          <p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everyone has a natural way of influencing others. Understanding yours is the key to 
            becoming more persuasive in every interaction.
          </p>
        </div>

        {/* Quiz Component */}
        <InfluenceStyleQuiz />

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-primary-gradient mb-2">2 min</div>
            <div className="text-gray-600 dark:text-gray-400">Quick Assessment</div>
          </div>
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-primary-gradient mb-2">4 Styles</div>
            <div className="text-gray-600 dark:text-gray-400">Unique Profiles</div>
          </div>
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-primary-gradient mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Personalized Results</div>
          </div>
        </div>
      </div>
    </section>
  );
}