import Link from 'next/link'
import { ArrowRight, BookOpen, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32 animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Nicolás Palavecino
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Building reliable platforms, high-performing teams, and the future of technology leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/blog" className="btn-primary group">
              Read the Blog
              <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/work" className="btn-secondary group">
              Work With Me
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I build platforms that organizations trust. For over a decade, I've led teams that deliver reliable, 
                scalable systems—the kind that power businesses through their most critical moments.
              </p>
              <p>
                My path to leadership wasn't about climbing a ladder. It was about understanding that great technology 
                is built by great people, and that reliability isn't just a technical metric—it's a competitive advantage.
              </p>
              <p>
                Today, I lead with a focus on observability, operational excellence, and building teams that thrive. 
                I'm working toward the CTO role, not because of a title, but because I know what it takes to align 
                technology with business outcomes at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="container-custom py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Believe</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Technology is a People Game</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The best architectures in the world fail without the right culture. I build teams that own their outcomes, 
                communicate clearly, and move with purpose.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Reliability is a Competitive Advantage</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Organizations that can deploy with confidence, recover faster, and observe what matters win. 
                This isn't just DevOps—it's business strategy.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Leadership is Earned, Not Given</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Titles don't make leaders. Trust, clarity, and the ability to navigate uncertainty do. 
                I lead by asking the right questions, not having all the answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Technology */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Leadership & Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Platform Engineering</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Building developer platforms that accelerate delivery without sacrificing reliability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Site Reliability</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Implementing SRE practices that balance innovation with operational excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Observability</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Creating visibility into systems that drives better decisions and faster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Team Building</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Developing high-performing teams through mentorship, clarity, and psychological safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container-custom py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Articles</h2>
          <div className="space-y-6">
            <Link href="/blog/future-of-sre" className="block group">
              <article className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 transition-all hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  The Future of SRE is Business Observability
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  Why the next evolution of Site Reliability Engineering isn't about more metrics—it's about 
                  understanding what drives business outcomes.
                </p>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  Read more →
                </span>
              </article>
            </Link>

            <Link href="/blog/technology-leadership-people-game" className="block group">
              <article className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 transition-all hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Technology Leadership is a People Game
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  The systems we build are only as good as the teams that build them. Here's what I've learned 
                  about developing high-performing engineering organizations.
                </p>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  Read more →
                </span>
              </article>
            </Link>

            <Link href="/blog/reliability-competitive-advantage" className="block group">
              <article className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 transition-all hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Reliability as a Competitive Advantage
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  In a world where everyone ships fast, the organizations that can also ship reliably will win. 
                  Here's how to build that capability.
                </p>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  Read more →
                </span>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 dark:bg-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Whether you need advisory, mentoring, or strategic consulting—let's talk.
          </p>
          <Link href="/work" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
            <Briefcase className="mr-2 h-5 w-5" />
            Work With Me
          </Link>
        </div>
      </section>
    </>
  )
}
