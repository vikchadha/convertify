import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { allBlogs } from 'contentlayer/generated';
import BlogPostContent from './BlogPostContent';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allBlogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Back to blog */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                {post.title}
              </h1>
              {post.summary && (
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  {post.summary}
                </p>
              )}
              {/* Article meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                {post.author && (
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                )}
                {post.publishedAt && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                )}
                {/* You can add readTime if you compute it */}
              </div>
            </header>

            {/* Article content */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <BlogPostContent code={post.body.html} />
            </div>
          </article>

          {/* Article footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Ready to create your own high-converting lead magnets?
              </p>
              <Link 
                href="/signup" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-150 ease-in-out"
              >
                Start Your Free Trial
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
} 