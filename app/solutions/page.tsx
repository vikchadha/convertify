import Link from 'next/link';
import { Briefcase, Users, Edit, Award, Target, Lightbulb, BarChart } from 'lucide-react';

export const metadata = {
  title: 'Convertify Solutions | Tailored AI Lead Generation for Your Business',
  description: 'Discover how Convertify provides targeted solutions for marketers, small businesses, content creators, and agencies to automate lead magnet creation and achieve growth.',
};

interface SolutionCardProps {
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
}

const SolutionCard = ({ icon: Icon, title, problem, solution, benefits }: SolutionCardProps) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
    <div className="flex items-center mb-4">
      <Icon className="w-10 h-10 text-blue-600 dark:text-blue-500 mr-4" />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">The Challenge:</h4>
      <p className="text-gray-600 dark:text-gray-400">{problem}</p>
    </div>
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">The Convertify Solution:</h4>
      <p className="text-gray-600 dark:text-gray-400">{solution}</p>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Key Benefits:</h4>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function SolutionsPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">Tailored AI Solutions for Your Unique Lead Generation Needs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Convertify isn't just a tool; it's a strategic partner. We provide specialized solutions to help diverse businesses and creators overcome their unique lead generation challenges and achieve remarkable growth.</p>
        </div>

        {/* Solutions List */}
        <div className="max-w-4xl mx-auto">
          <SolutionCard
            icon={Target}
            title="For Marketing Professionals"
            problem="Struggling to consistently produce high-quality lead magnets at scale to fuel campaigns and meet targets. Content creation bottlenecks hinder agility and campaign performance."
            solution="Convertify empowers marketers to generate a variety of lead magnets in minutes. Automate content creation, repurpose existing assets effortlessly, and maintain brand consistency across all materials. Free up your team to focus on strategy and optimization."
            benefits={[
              'Rapidly scale lead magnet production for multiple campaigns.',
              'Ensure consistent brand voice and visual identity.',
              'Reduce content creation costs and timelines significantly.',
              'Boost campaign ROI with highly relevant lead magnets.',
            ]}
          />

          <SolutionCard
            icon={Briefcase}
            title="For Small Business Owners"
            problem="Lacking the time, budget, or dedicated design/writing resources to create professional lead magnets that compete with larger players and effectively capture leads."
            solution="Convertify provides an affordable and easy-to-use platform to create professional-grade lead magnets without needing expert skills. Generate ebooks, guides, and checklists quickly, saving valuable time and resources while looking polished and credible."
            benefits={[
              'Create high-quality lead magnets on a tight budget.',
              'Save countless hours on content writing and design.',
              'Compete effectively with professional marketing materials.',
              'Increase lead capture and grow your customer base.',
            ]}
          />

          <SolutionCard
            icon={Edit}
            title="For Content Creators & Bloggers"
            problem="Sitting on a wealth of existing content (blog posts, articles) but finding it challenging to repurpose it into diverse lead magnet formats to maximize audience engagement and list growth."
            solution="Easily transform your existing blog posts, articles, or even video transcripts into engaging ebooks, checklists, or guides. Convertify’s AI helps you extract key information and reformat it into valuable resources for your audience."
            benefits={[
              'Maximize the value of your existing content library.',
              'Offer diverse downloadable resources to your audience.',
              'Grow your email list faster with minimal extra effort.',
              'Strengthen audience loyalty by providing added value.',
            ]}
          />

          <SolutionCard
            icon={Users}
            title="For Agencies & Consultants"
            problem="Needing to deliver high-value lead generation assets for multiple clients efficiently, while maintaining quality and customization for each client's unique brand and needs."
            solution="Use Convertify to quickly create customized lead magnets for your clients. Offer lead magnet creation as a new service or enhance existing packages. Manage multiple client needs from a single, efficient platform (future feature enhancement)."
            benefits={[
              'Deliver lead generation results for clients faster.',
              'Expand service offerings and increase agency revenue.',
              'Easily customize outputs for different client brands.',
              'Improve client retention with tangible marketing assets.',
            ]}
          />
        </div>

        {/* Why Convertify Section */}
        <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Convertify Advantage: Your Partner in Growth</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            No matter your role or industry, Convertify provides the speed, intelligence, and quality you need to transform your lead generation. We're committed to helping you save time, reduce costs, and achieve your marketing goals with powerful, AI-driven solutions.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Innovative AI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Leverage the latest in AI for content that converts.</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Efficiency Boost</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Slash creation time from weeks to minutes.</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Professional Quality</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Generate polished, brand-aligned lead magnets.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center pt-12 md:pt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Find Your Solution?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let Convertify tailor a lead generation strategy that works for you. Get started today or talk to our team to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
              Start Your Free Trial
            </Link>
            <Link href="/contact" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
