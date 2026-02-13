import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on technology leadership, platform engineering, SRE, and building high-performing teams.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="container-custom py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
          Thoughts on technology leadership, platform engineering, observability, and what it takes 
          to build systems and teams that scale.
        </p>

        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-neutral-600 dark:text-neutral-400">No posts yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 transition-all hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <time dateTime={post.date}>
                          {format(new Date(post.date), 'MMMM d, yyyy')}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readingTime}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
