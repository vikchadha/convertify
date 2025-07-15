import { getBlogPosts } from '@/components/mdx/utils'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostItem from '@/components/post-item'
import CtaBox from '@/components/cta-box'

export const metadata = {
  title: 'Sales Psychology Secrets: 347% Close Rate Increase Strategies',
  description: 'Discover the psychological triggers that make prospects say yes. From objection handling to value stacking - learn what top 1% performers know.',
  openGraph: {
    title: 'Sales Psychology Secrets That 10x Close Rates',
    description: 'Master the psychological triggers used by top 1% performers to earn $127K+ more per year.',
    url: 'https://convertify.com/blog',
    siteName: 'Convertify Sales Training',
    images: [
      {
        url: 'https://convertify.com/images/blog-post-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Sales Psychology Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://convertify.com/blog',
  },
}

import React from 'react'
import Hero from '@/components/hero-blog'
import Tags from '@/components/blog-tags'

export default function Blog() {
  const allBlogs = getBlogPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) ? -1 : 1
  })
  
  // Slicing content for demo purposes
  const featuredPost = allBlogs[0]
  const latestPosts = allBlogs.slice(1,4)
  const popularPosts = allBlogs.slice(4, 7)
  const productPosts = allBlogs.slice(7, 10)

  return (
    <>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
      </div>
      
      {/* Custom Sales Psychology Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🧠</span>
                Sales Psychology Weekly - 47K+ Subscribers
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                The <span className="text-red-400">Psychology Secrets</span>
                <br />
                That Make Prospects
                <br />
                <span className="text-green-400">Beg to Buy</span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Discover the exact psychological triggers used by <strong className="text-white">top 1% performers</strong> to achieve <strong className="text-green-400">347% close rate increases</strong> and earn <strong className="text-yellow-400">$127K+ more per year</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/signup" className="btn text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl transform hover:scale-105 transition-all duration-200 text-xl py-6 px-12 border-4 border-green-400">
                  🚀 Get These Secrets for $47/month
                </Link>
              </div>
              
              <p className="text-green-300 text-lg mt-6">
                30-day guarantee • Join 25,000+ top performers
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Tags />

      {featuredPost ? (
        <>
          {/* Featured article */}
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-8 md:py-16">
                <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
                  {/* Image */}
                  {featuredPost.metadata.image && (
                    <Link className="relative block group overflow-hidden md:w-1/2" href={`/blog/${featuredPost.slug}`} data-aos="fade-down">
                      <Image className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out" src={featuredPost.metadata.image} width={540} height={340} priority alt={featuredPost.metadata.title} />
                      <div className="absolute top-6 right-6">
                        <svg className="w-8 h-8" viewBox="0 0 32 32">
                          <circle className="fill-slate-900" fillOpacity=".48" cx="16" cy="16" r="16" />
                          <path className="fill-yellow-500" d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                      </div>
                    </Link>
                  )}
                  {/* Content */}
                  <div className="md:w-1/2" data-aos="fade-up">
                    <header>
                      <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/blog/${featuredPost.slug}`}>{featuredPost.metadata.title}</Link>
                      </h2>
                    </header>
                    <p className="text-lg text-slate-500 grow">{featuredPost.metadata.summary}</p>
                    <footer className="flex items-center mt-4">
                      <a href="#0">
                        {featuredPost.metadata.authorImg && <Image className="rounded-full shrink-0 mr-3" src={featuredPost.metadata.authorImg} width={32} height={32} alt={featuredPost.metadata.author || ''} />}
                      </a>
                      <div>
                        <a className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">{featuredPost.metadata.author}</a>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500"><PostDate dateString={featuredPost.metadata.publishedAt} /></span>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* All articles */}
          <section className="bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-8 md:py-16 space-y-16">
                {/* Latest Sales Psychology Articles */}
                {latestPosts.length > 0 && (
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 text-center md:text-left mb-8">
                      🧠 Latest <span className="text-green-600">Psychology Secrets</span>
                    </h2>
                    <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                      {latestPosts.map((post, postIndex) => (
                        <PostItem key={postIndex} {...post} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Sales Techniques */}
                {popularPosts.length > 0 && (
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 text-center md:text-left mb-8">
                      🔥 Most Popular <span className="text-red-600">Techniques</span>
                    </h2>
                    <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                      {popularPosts.map((post, postIndex) => (
                        <PostItem key={postIndex} {...post} />
                      ))}
                    </div>
                  </div>
                )}

                <CtaBox />

                {/* Advanced Strategies */}
                {productPosts.length > 0 && (
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 text-center md:text-left mb-8">
                      🎯 Advanced <span className="text-blue-600">Strategies</span>
                    </h2>
                    <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                      {productPosts.map((post, postIndex) => (
                        <PostItem key={postIndex} {...post} />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA to Join Training */}
                <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
                  <h3 className="text-4xl font-black mb-6">
                    🚀 Ready to Apply These Techniques?
                  </h3>
                  <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                    Reading about psychology is one thing. Having a step-by-step system with personal coaching is another. Join 25,000+ sales professionals in our elite training program.
                  </p>
                  <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    🎯 Get Complete Training System - $47/month
                  </Link>
                  <div className="mt-6 text-green-200">
                    <p>30-day guarantee • Personal coaching included • Cancel anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 text-center">
              <h2 className="text-4xl font-black text-gray-900 mb-8">Sales Psychology Articles Coming Soon</h2>
              <p className="text-2xl text-gray-600 mb-8">We're working on exclusive content about the psychology behind sales success. In the meantime, get started with our proven training system.</p>
              <Link href="/signup" className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                🚀 Start Training Now - $47/month
              </Link>
            </div>
          </div>
        </section>
      )}      
    </>
  )
}
