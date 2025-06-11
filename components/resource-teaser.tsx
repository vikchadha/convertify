import Link from 'next/link'

export default function ResourceTeaser() {
  // Placeholder data for blog posts - replace with actual data fetching later
  const posts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Creating Lead Magnets that Convert',
      slug: '/blog/ultimate-guide-lead-magnets',
      excerpt: 'Learn the strategies and best practices for developing lead magnets that not only attract but also convert your target audience effectively...',
    },
    {
      id: 2,
      title: '5 Ways AI is Revolutionizing Content Creation for Marketers',
      slug: '/blog/ai-revolutionizing-content-creation',
      excerpt: 'Discover how artificial intelligence is changing the game for content marketers, from idea generation to automated writing and personalization...',
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Learn & Grow with Convertify</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Explore insights, tips, and strategies on lead generation, content marketing, and AI automation from our experts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link href={post.slug} className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-150 ease-in-out">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
                <div className="mt-4">
                  <Link href={post.slug} className="text-blue-600 dark:text-blue-500 hover:underline font-medium">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn text-white bg-blue-600 hover:bg-blue-700">
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
