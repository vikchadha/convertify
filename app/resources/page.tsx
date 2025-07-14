import Link from 'next/link';
import { FileText, Download, BookOpen, Video, Mic, MessageSquare, Target, Users, ArrowRight, Zap, Clock, CheckCircle, Phone, DollarSign, Brain } from 'lucide-react';
import ScriptTemplate from '@/components/icons/ScriptTemplate';
import EmailPsychology from '@/components/icons/EmailPsychology';
import AnalyticsChart from '@/components/icons/AnalyticsChart';
import BrainTarget from '@/components/icons/BrainTarget';
import ConversionFlow from '@/components/icons/ConversionFlow';
import MindBridge from '@/components/icons/MindBridge';

export const metadata = {
  title: 'Sales Resources | Free Scripts, Templates & Guides',
  description: 'Access our library of proven sales scripts, templates, and psychological frameworks. Battle-tested resources used by 25,000+ top performers.',
};

interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  type: string;
  href: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const ResourceCard = ({ icon: Icon, title, description, type, href, isNew, isPremium }: ResourceCardProps) => (
  <Link href={href} className="group block">
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
      {isNew && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          NEW
        </div>
      )}
      {isPremium && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          PREMIUM
        </div>
      )}
      
      <div className="flex items-start mb-4">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {type}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
        Access Resource <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  </Link>
);

interface CategorySectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const CategorySection = ({ title, description, icon: Icon, children }: CategorySectionProps) => (
  <div className="mb-16">
    <div className="flex items-center mb-8">
      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </div>
);

export default function ResourcesPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold mb-6 shadow-lg">
            <Zap className="w-5 h-5 mr-2" />
            100+ Battle-Tested Resources
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-premium-display mb-6 text-gray-900 dark:text-white hover-text-glow">
            Your Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Sales Arsenal</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Scripts, templates, and frameworks proven to work by 25,000+ sales professionals. 
            Stop guessing what to say—use what actually converts.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Sales Scripts</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Templates</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Frameworks</div>
            </div>
          </div>
        </div>

        {/* Featured Resources Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔥 Most Downloaded This Month
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              The "Objection Aikido" script collection that's helping reps close 340% more deals
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">12,847</div>
                <div className="text-blue-100">Downloads this month</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">89%</div>
                <div className="text-blue-100">Success rate reported</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">4.9/5</div>
                <div className="text-blue-100">Average rating</div>
              </div>
            </div>
            <Link href="/resources/objection-scripts" className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">
              Get The Scripts Now →
            </Link>
          </div>
        </div>

        {/* Sales Scripts Section */}
        <CategorySection
          title="Sales Scripts & Responses"
          description="Word-for-word scripts that convert, backed by psychology"
          icon={MessageSquare}
        >
          <ResourceCard
            icon={ScriptTemplate}
            title="50 Objection Handling Scripts"
            description="Turn every 'no' into a 'yes' with these psychology-based responses to the most common objections."
            type="Scripts"
            href="/resources/objection-scripts"
            isNew={true}
          />
          
          <ResourceCard
            icon={Phone}
            title="Cold Calling Script Library"
            description="Opening lines, gatekeeper scripts, and voicemail templates that get callbacks and book meetings."
            type="Scripts"
            href="/resources/cold-calling-guide"
          />
          
          <ResourceCard
            icon={Target}
            title="17 Closing Techniques"
            description="Psychology-based closing scripts that create urgency without being pushy. Includes when to use each."
            type="Scripts"
            href="/resources/closing-scripts"
            isPremium={true}
          />
          
          <ResourceCard
            icon={MessageSquare}
            title="Interview Power Scripts"
            description="Answer any interview question with confidence. Includes salary negotiation scripts."
            type="Scripts"
            href="/resources/interview-scripts"
          />
          
          <ResourceCard
            icon={Users}
            title="Recruiting Conversation Guide"
            description="Scripts for attracting top talent, handling candidate objections, and closing offers."
            type="Scripts"
            href="/resources/recruiting-scripts"
          />
          
          <ResourceCard
            icon={DollarSign}
            title="Salary Negotiation Playbook"
            description="Step-by-step scripts to negotiate 20-40% higher compensation packages."
            type="Scripts"
            href="/resources/salary-negotiation"
          />
        </CategorySection>

        {/* Templates & Tools Section */}
        <CategorySection
          title="Templates & Tools"
          description="Ready-to-use templates that save hours and boost results"
          icon={FileText}
        >
          <ResourceCard
            icon={EmailPsychology}
            title="Sales Email Templates"
            description="20+ proven email templates for prospecting, follow-ups, and closing. Includes A/B test results."
            type="Templates"
            href="/resources/email-templates"
          />
          
          <ResourceCard
            icon={BrainTarget}
            title="Pitch Deck Psychology Guide"
            description="Structure your pitch to trigger investment decisions. Includes annotated examples."
            type="Guide"
            href="/resources/pitch-deck-psychology"
            isNew={true}
          />
          
          <ResourceCard
            icon={ConversionFlow}
            title="Budget Approval Templates"
            description="Get internal buy-in fast with these proven templates for budget requests and business cases."
            type="Templates"
            href="/resources/budget-approval-templates"
          />
          
          <ResourceCard
            icon={AnalyticsChart}
            title="Sales Playbook Template"
            description="Build a winning sales playbook for your team. Includes process maps and training guides."
            type="Templates"
            href="/resources/sales-playbook-template"
            isPremium={true}
          />
          
          <ResourceCard
            icon={MindBridge}
            title="LinkedIn Outreach Kit"
            description="Templates and sequences that get 5x response rates on LinkedIn. Includes connection requests."
            type="Templates"
            href="/resources/linkedin-outreach"
          />
          
          <ResourceCard
            icon={FileText}
            title="Proposal Template Library"
            description="Winning proposal templates for different industries. Psychological triggers included."
            type="Templates"
            href="/resources/proposal-templates"
          />
        </CategorySection>

        {/* Frameworks & Methodologies */}
        <CategorySection
          title="Frameworks & Methodologies"
          description="Proven systems and methodologies used by top performers"
          icon={Target}
        >
          <ResourceCard
            icon={Brain}
            title="The SPIN Selling Framework"
            description="Master consultative selling with this question-based framework. Includes practice scenarios."
            type="Framework"
            href="/resources/spin-selling"
          />
          
          <ResourceCard
            icon={Target}
            title="Challenger Sale Methodology"
            description="Learn to teach, tailor, and take control of the sales conversation. Full implementation guide."
            type="Framework"
            href="/resources/challenger-sale"
          />
          
          <ResourceCard
            icon={Users}
            title="MEDDIC Qualification"
            description="Never waste time on bad deals again. Master the enterprise qualification framework."
            type="Framework"
            href="/resources/meddic"
            isPremium={true}
          />
          
          <ResourceCard
            icon={Brain}
            title="Psychological Triggers Map"
            description="The 27 psychological triggers that drive buying decisions and how to ethically activate them."
            type="Framework"
            href="/resources/psychological-triggers"
            isNew={true}
          />
          
          <ResourceCard
            icon={Target}
            title="Value Selling Framework"
            description="Stop competing on price. Learn to sell value and maintain premium pricing."
            type="Framework"
            href="/resources/value-selling"
          />
          
          <ResourceCard
            icon={MessageSquare}
            title="Objection Prevention System"
            description="Stop objections before they happen with this proactive framework."
            type="Framework"
            href="/resources/objection-prevention"
          />
        </CategorySection>

        {/* Premium Resources CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 mb-16 border-2 border-purple-200 dark:border-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-bold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              PREMIUM ACCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Unlock All Premium Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Get instant access to all premium scripts, templates, and frameworks. Plus weekly updates with new resources based on what's working now.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">100+ Premium Resources</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">Weekly Updates</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">Exclusive Community</span>
              </div>
            </div>
            
            <Link href="/signup" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">
              Get Premium Access - $47/month
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Stop Winging It. Start Winning.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Every resource is battle-tested by thousands of sales professionals. 
            Download what you need now, or get premium access to everything.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/resources/objection-scripts" className="btn text-white bg-blue-600 hover:bg-blue-700 text-lg py-4 px-8">
              Get Free Objection Scripts
            </Link>
            <Link href="/training" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-lg py-4 px-8">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}