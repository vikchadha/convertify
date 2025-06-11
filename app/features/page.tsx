import Link from 'next/link';
import { CheckCircle, BarChart2, Edit3, FileText, ImageIcon, Settings, Users, Zap, Palette, LayoutDashboard } from 'lucide-react';

export const metadata = {
  title: 'Convertify Features | AI-Powered Lead Magnet Generation Tools',
  description: 'Explore the powerful features of Convertify. From AI content generation and professional templates to analytics and integrations, see how we automate your lead magnet creation.',
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const FeatureCard = ({ icon: Icon, title, children }: FeatureCardProps) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 mr-3" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400">
      {children}
    </p>
  </div>
);

export default function FeaturesPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">Unlock the Full Potential of Lead Generation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Convertify is packed with powerful features designed to automate your lead magnet creation, save you time, and skyrocket your conversions. Discover how each tool works to your advantage.</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={Zap} title="AI Content Engine">
            Leverage our cutting-edge AI to transform your ideas, URLs, or existing text into compelling lead magnet content. Say goodbye to writer's block and hello to instant, high-quality drafts for ebooks, guides, checklists, and more. Saves hours of manual writing and research.
          </FeatureCard>

          <FeatureCard icon={LayoutDashboard} title="Professional Template Library">
            Access a diverse collection of professionally designed templates. Ensure your lead magnets are not only informative but also visually stunning and brand-aligned. No design skills needed – just pick a template and customize.
          </FeatureCard>

          <FeatureCard icon={Palette} title="Branding & Customization">
            Make every lead magnet truly yours. Easily customize templates with your brand’s logo, colors, fonts, and imagery. Maintain brand consistency across all your marketing materials and build stronger brand recognition.
          </FeatureCard>

          <FeatureCard icon={FileText} title="Multiple Lead Magnet Types">
            Create a wide variety of lead magnets to suit any campaign or audience. Generate ebooks, in-depth guides, practical checklists, insightful whitepapers, engaging worksheets, and more. Versatility to keep your content strategy fresh and effective.
          </FeatureCard>

          <FeatureCard icon={Edit3} title="Flexible Content Import">
            Start creating from multiple sources. Input a simple topic, paste raw text, or provide a URL to an existing blog post or webpage. Our AI intelligently processes your input to generate relevant and valuable content.
          </FeatureCard>

          <FeatureCard icon={Users} title="User-Friendly Interface">
            Navigate our intuitive platform with ease. Convertify is designed for simplicity, allowing you to create professional lead magnets without a steep learning curve. Get started quickly and efficiently.
          </FeatureCard>

          <FeatureCard icon={BarChart2} title="Performance Analytics (Coming Soon)">
            Gain insights into how your lead magnets are performing. Track views, downloads, and engagement to understand what resonates with your audience. (Note: Full analytics capabilities are under development and will be rolled out progressively).
          </FeatureCard>
          
          <FeatureCard icon={Settings} title="Seamless Integrations (Future)">
            Connect Convertify with your favorite marketing tools. Future integrations will allow you to streamline your workflow by sending leads directly to your CRM or email marketing platform. (Note: Integrations are planned for future releases).
          </FeatureCard>

          <FeatureCard icon={CheckCircle} title="High-Quality Output">
            Generate lead magnets that are not only AI-powered but also polished and professional. Our system focuses on readability, engagement, and providing genuine value to your audience, helping you build trust and authority.
          </FeatureCard>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Revolutionize Your Lead Generation?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Stop spending countless hours on manual creation. Experience the power, speed, and quality of Convertify's AI-driven features today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
              Get Started for Free
            </Link>
            <Link href="/request-demo" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
              Request a Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
