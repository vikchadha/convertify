export const metadata = {
  title: 'Free Sales Consultation | Get Personalized Growth Strategy',
  description: 'Book your free 30-minute consultation with our sales psychology experts. Get a personalized strategy to double your close rates.',
  alternates: {
    canonical: 'https://convertify.com/consultation',
  },
}

import Link from 'next/link';
import { Calendar, Clock, CheckCircle, TrendingUp, Users, Award, Zap, ArrowRight, Phone } from 'lucide-react';

export default function ConsultationPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Personalized Growth Strategy",
      description: "Get a custom roadmap based on your specific industry, product, and sales challenges"
    },
    {
      icon: Users,
      title: "Expert Analysis",
      description: "Our team has helped 25,000+ sales professionals increase close rates by 347%"
    },
    {
      icon: Award,
      title: "Actionable Insights",
      description: "Walk away with 3-5 specific tactics you can implement immediately"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Book Your Call",
      description: "Select a time that works for you. We'll send a brief questionnaire to maximize our time together."
    },
    {
      number: "2",
      title: "Strategy Session",
      description: "30-minute deep dive into your sales process, challenges, and opportunities for growth."
    },
    {
      number: "3",
      title: "Custom Action Plan",
      description: "Receive a personalized roadmap with specific tactics to double your close rates."
    }
  ];

  const testimonials = [
    {
      quote: "In just 30 minutes, they identified why I was losing deals and gave me a script that closed my next 3 prospects.",
      author: "Sarah Chen",
      role: "Enterprise AE",
      result: "+$240K in new deals"
    },
    {
      quote: "The psychological insights they shared changed how I approach every conversation. My close rate went from 18% to 67%.",
      author: "Marcus Johnson",
      role: "SaaS Founder",
      result: "3.7x close rate increase"
    },
    {
      quote: "I was skeptical about a free consultation, but they over-delivered. Implemented their advice and hit 340% of quota.",
      author: "Jennifer Park",
      role: "Sales Manager",
      result: "Team hit 340% of quota"
    }
  ];

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-sm font-bold mb-8 shadow-lg">
              <Clock className="w-5 h-5 mr-2" />
              LIMITED AVAILABILITY - Only 10 Spots This Week
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get a Free 30-Minute Sales Strategy Session
              <span className="block text-3xl md:text-4xl mt-4 text-yellow-300">
                Worth $500 - Yours Free
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our sales psychology experts will analyze your current process and give you a personalized roadmap to double your close rates in 90 days or less.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg">No pitch, just value</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg">Actionable tactics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg">100% personalized</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl py-6 px-12 rounded-lg shadow-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book Your Free Strategy Session
              </Link>
              <a 
                href="tel:1-800-CONVERT" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-xl py-6 px-12 rounded-lg shadow-lg transition-all border-2 border-white/30 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call Now: 1-800-CONVERT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll Get in Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No fluff, no pitch - just actionable strategies you can use immediately
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple 3-step process to transform your sales results
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="ml-6 mt-4 mb-4 border-l-2 border-gray-300 dark:border-gray-700 h-8"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Others Say About Their Free Consultation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real results from real sales professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-green-600 dark:text-green-400 font-bold mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions About the Free Consultation
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Is this really free? What's the catch?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, it's 100% free with no strings attached. We offer these because many clients choose to continue working with us after seeing the value we provide. But there's zero obligation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Will you try to sell me something?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No. This is a strategy session, not a sales call. We'll mention our training programs if you ask, but the focus is entirely on giving you actionable value.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">How should I prepare?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                After booking, you'll receive a brief questionnaire about your current sales process and challenges. This helps us make the most of our 30 minutes together.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Who will I be speaking with?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You'll speak with one of our senior sales strategists who has personally closed millions in deals and trained hundreds of top performers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Double Your Close Rate?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized strategies from experts who've helped 25,000+ sales professionals earn an average of $127K more per year.
          </p>
          
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl py-6 px-12 rounded-lg shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Calendar className="w-6 h-6" />
            Book Your Free Strategy Session Now
          </Link>
          
          <p className="mt-6 text-blue-200">
            Only 10 spots available this week • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}