import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container-custom py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
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
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <MDXRemote 
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight as any],
              },
            }}
          />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}
