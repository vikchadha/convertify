import Link from 'next/link';
import { Star, TrendingUp, DollarSign, Users, Award, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Success Stories | Real Results from Real Sales Professionals',
  description: 'Discover how sales professionals across industries have transformed their careers with our psychology-based training. Real stories, real results.',
};

interface SuccessCardProps {
  name: string;
  role: string;
  company: string;
  increase: string;
  metric: string;
  story: string;
  image?: string;
  href: string;
  industry: string;
}

const SuccessCard = ({ name, role, company, increase, metric, story, href, industry }: SuccessCardProps) => (
  <Link href={href} className="group block">
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{role} at {company}</p>
            </div>
          </div>
        </div>
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          {industry}
        </span>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-6">
        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{increase}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{metric}</div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic line-clamp-3">
        "{story}"
      </p>
      
      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
        Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  </Link>
);

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

export default function SuccessStoriesPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white text-sm font-bold mb-6 shadow-lg">
            <Award className="w-5 h-5 mr-2" />
            25,000+ Success Stories and Counting
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-6 text-gray-900 dark:text-white">
            Real People. <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">Real Results.</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These aren't cherry-picked testimonials. These are real stories from sales professionals who transformed their careers using our psychology-based training methods.
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <StatCard icon={TrendingUp} value="340%" label="Avg. Performance Increase" />
          <StatCard icon={DollarSign} value="$2.1M" label="Additional Revenue Generated" />
          <StatCard icon={Users} value="25,000+" label="Students Trained" />
          <StatCard icon={Star} value="4.9/5" label="Average Rating" />
        </div>

        {/* Featured Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Success Stories
          </h2>
          
          {/* Hero Story */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-1">
                  <div className="flex text-yellow-300 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">From Bottom 20% to President's Club in 6 Months</h3>
                  <p className="text-blue-100 mb-4">Sarah Chen • Enterprise Sales at TechCorp</p>
                  <p className="text-lg text-blue-50 mb-6 italic">
                    "I was about to quit sales entirely. I couldn't handle objections, my close rate was 12%, and I was dead last on our team. The Objection Aikido training changed everything. I learned to see objections as opportunities, not roadblocks. My close rate jumped to 47% in 30 days. Six months later, I made President's Club and earned an extra $240K in commissions. This training didn't just save my career—it transformed my life."
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="font-bold">391%</span> close rate increase
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="font-bold">$240K</span> additional income
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="font-bold">Top 5%</span> company ranking
                    </div>
                  </div>
                  <Link href="/success-stories/saas" className="inline-flex items-center mt-6 bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Categories */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Success Stories by Industry
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessCard
              name="Marcus Rodriguez"
              role="Senior Sales Rep"
              company="Shield Insurance"
              increase="340%"
              metric="Close rate improvement"
              story="The Aikido method is pure genius. I stopped fighting objections and started using them to close. Went from bottom 20% to top 5% in our company."
              href="/success-stories/insurance"
              industry="Insurance"
            />
            
            <SuccessCard
              name="Jennifer Park"
              role="Commercial Broker"
              company="Premier Realty"
              increase="$1.2M"
              metric="Additional commissions"
              story="Cold calling used to terrify me. Now I book 5x more appointments using the psychological triggers I learned. Best investment in my career."
              href="/success-stories/real-estate"
              industry="Real Estate"
            />
            
            <SuccessCard
              name="David Thompson"
              role="Account Executive"
              company="DataFlow Solutions"
              increase="2.5x"
              metric="Average deal size"
              story="Understanding buyer psychology transformed how I position our solution. I'm closing bigger deals faster than ever before."
              href="/success-stories/b2b"
              industry="B2B Sales"
            />
            
            <SuccessCard
              name="Lisa Chen"
              role="Founder & CEO"
              company="HealthTech Innovations"
              increase="$3.5M"
              metric="Series A raised"
              story="The fundraising psychology training gave me the confidence and skills to nail our pitch. Closed our round in just 6 weeks."
              href="/success-stories/startup-founder"
              industry="Startup"
            />
            
            <SuccessCard
              name="Michael Harris"
              role="VP of Sales"
              company="Global Solutions Inc"
              increase="94%"
              metric="Job offer rate"
              story="After being laid off, I used the interview psychology techniques to land 3 competing offers. Negotiated 40% higher than my previous salary."
              href="/success-stories/executive-job-search"
              industry="Executive"
            />
            
            <SuccessCard
              name="Rachel Kumar"
              role="Innovation Director"
              company="Fortune 500 Corp"
              increase="$12M"
              metric="Budget approved"
              story="The internal influence training helped me get buy-in for my transformation initiative. What seemed impossible became inevitable."
              href="/success-stories/corporate-innovator"
              industry="Corporate"
            />
          </div>
        </div>

        {/* By The Numbers */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Success By The Numbers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">89%</div>
              <div className="text-gray-300">of students see results within 30 days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">92%</div>
              <div className="text-gray-300">report increased confidence in sales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">76%</div>
              <div className="text-gray-300">achieve top performer status</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">94%</div>
              <div className="text-gray-300">would recommend to colleagues</div>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Recent Student Reviews
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "This training is like having a psychology PhD focused entirely on sales. The depth of understanding you gain about human behavior is incredible."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Alex Martinez</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Software Sales</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "I've taken every sales training out there. This is the only one that actually explains WHY techniques work, not just what to do."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Patricia Wong</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Medical Device Sales</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">5 days ago</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "The ROI on this training is insane. I made back the entire year's cost in my first week using the closing techniques."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">James Foster</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Financial Services</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">1 week ago</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "As a startup founder, the fundraising psychology module helped me raise $2M in just 4 weeks. Absolutely game-changing."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Sophia Patel</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tech Founder</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Your Success Story Starts Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of sales professionals who have transformed their careers with psychology-based training. 
            See results in 30 days or your money back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-4 px-8 shadow-lg">
              Start Your Transformation
            </Link>
            <Link href="/training" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-lg py-4 px-8">
              Explore Training Programs
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              30-day guarantee
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              Instant access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}