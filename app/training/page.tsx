import Link from 'next/link';
import { Brain, Target, Phone, Shield, Users, TrendingUp, Heart, Briefcase, DollarSign, MessageSquare, Star, Award } from 'lucide-react';
import BrainTarget from '@/components/icons/BrainTarget';
import PsychologyDollar from '@/components/icons/PsychologyDollar';
import ConversionFlow from '@/components/icons/ConversionFlow';
import InfluenceWaves from '@/components/icons/InfluenceWaves';
import MindBridge from '@/components/icons/MindBridge';
import PersuasionTarget from '@/components/icons/PersuasionTarget';
import TrustHandshake from '@/components/icons/TrustHandshake';
import InfluenceStyleQuiz from '@/components/InfluenceStyleQuiz';

export const metadata = {
  title: 'Sales Psychology Training | Master the Art of Persuasion',
  description: 'Transform your sales skills with science-backed psychological techniques. From objection handling to closing techniques, master every aspect of sales psychology',
  
  alternates: {
    canonical: 'https://convertify.com/training',
  },
};

interface TrainingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
  href: string;
  category: string;
}

const TrainingCard = ({ icon: Icon, title, description, stats, href, category }: TrainingCardProps) => (
  <Link href={href} className="group block">
    <div className="card-base p-6">
      <div className="flex items-center mb-4">
        <div className="icon-container">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="ml-auto text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-primary-gradient">{stats}</span>
        <span className="text-sm text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200 transition-colors">
          Learn More →
        </span>
      </div>
    </div>
  </Link>
);

export default function TrainingPage() {
  return (
    <section className="relative bg-white dark:bg-gray-900 section-padding">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by 25,000+ Sales Professionals
          </div>
          
          <h1 className="heading-xl mb-6 text-gray-900 dark:text-white">
            Master the <span className="text-primary-gradient">Psychology of Sales</span>
          </h1>
          
          <p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Science-backed training programs that transform average salespeople into top performers. 
            Learn the psychological techniques that drive 3-10x results.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="text-center p-6 card-base">
            <div className="text-2xl font-bold text-primary-gradient mb-1">340%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Close Rate Increase</div>
          </div>
          <div className="text-center p-6 card-base">
            <div className="text-2xl font-bold text-primary-gradient mb-1">89%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Objection Conversion</div>
          </div>
          <div className="text-center p-6 card-base">
            <div className="text-2xl font-bold text-primary-gradient mb-1">2.5x</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Deal Size</div>
          </div>
          <div className="text-center p-6 card-base">
            <div className="text-2xl font-bold text-primary-gradient mb-1">92%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Student Success Rate</div>
          </div>
        </div>

        {/* Core Sales Training */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Core Sales Training Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard
              icon={ConversionFlow}
              title="Objection Aikido"
              description="Turn every 'no' into a closing opportunity. Master the psychological art of objection handling with our proven Aikido method."
              stats="340% close rate increase"
              href="/training/objection-handling"
              category="Core Training"
            />
            
            <TrainingCard
              icon={InfluenceWaves}
              title="Cold Calling Mastery"
              description="Break through gatekeepers and book meetings with decision makers. Learn the psychological triggers that get prospects to say yes."
              stats="5x meeting rate"
              href="/training/cold-calling"
              category="Core Training"
            />
            
            <TrainingCard
              icon={PersuasionTarget}
              title="Closing Psychology"
              description="Master 17 psychological closing techniques that create urgency and drive decisions without being pushy."
              stats="89% close rate"
              href="/training/closing-techniques"
              category="Core Training"
            />
            
            <TrainingCard
              icon={BrainTarget}
              title="Sales Psychology Fundamentals"
              description="Understand the deep psychological principles that drive buying decisions and how to ethically influence them."
              stats="2.5x deal size"
              href="/training/sales-psychology"
              category="Core Training"
            />
          </div>
        </div>

        {/* Career-Specific Training */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Career-Specific Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard
              icon={PsychologyDollar}
              title="Fundraising Psychology"
              description="Master the art of raising capital. Learn how VCs think and what psychological triggers drive investment decisions."
              stats="87% funding success"
              href="/training/fundraising-psychology"
              category="Startup"
            />
            
            <TrainingCard
              icon={MindBridge}
              title="Interview Psychology"
              description="Land your dream job by mastering the psychological dynamics of interviews. Turn questions into opportunities."
              stats="94% offer rate"
              href="/training/interview-psychology"
              category="Career"
            />
            
            <TrainingCard
              icon={TrustHandshake}
              title="Recruiting Psychology"
              description="Attract and close top talent by understanding what drives career decisions. Build world-class teams."
              stats="3x acceptance rate"
              href="/training/recruiting-psychology"
              category="Leadership"
            />
            
            <TrainingCard
              icon={Briefcase}
              title="Internal Influence"
              description="Master organizational psychology to drive change, get buy-in, and advance your career faster."
              stats="2.5x promotion rate"
              href="/training/internal-influence"
              category="Corporate"
            />
          </div>
        </div>

        {/* Influence Style Quiz */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Discover Your Natural Influence Style
          </h2>
          <InfluenceStyleQuiz />
        </div>

        {/* What Makes Us Different */}
        <div className="bg-gray-900 rounded-2xl p-12 text-white mb-16">
          <h2 className="heading-lg text-center mb-12">
            Why Our Training Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BrainTarget className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Science-Backed Methods</h3>
              <p className="text-gray-300">
                Every technique is based on proven psychological research, not outdated sales tactics.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Application</h3>
              <p className="text-gray-300">
                Practical scripts, frameworks, and exercises you can use immediately to see results.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-300">
                25,000+ students with average 340% performance improvements in 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Success Stories from Our Students
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "The Objection Aikido method completely transformed my approach to sales. I went from dreading objections to actually looking forward to them. My close rate jumped from 12% to 47% in just 30 days."
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Sarah Chen</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">SaaS Sales • +$240K income</div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "The psychological insights in this training are game-changing. Understanding WHY prospects think the way they do has made selling feel effortless. Top performer 3 years running now."
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Marcus Rodriguez</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Insurance • President's Club</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 max-w-3xl mx-auto text-center">
          <h2 className="heading-md text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Sales Performance?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join 25,000+ sales professionals who have mastered the psychology of persuasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn-primary">
              Get Started for $47/month
            </Link>
            <Link href="/success-stories" className="btn-secondary">
              View Success Stories
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}