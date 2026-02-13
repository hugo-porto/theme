import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Nicolás Palavecino\'s journey in technology leadership, platform engineering, and building high-performing teams.',
}

export default function About() {
  return (
    <div className="container-custom py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
          I'm a technology leader focused on building platforms that scale, teams that deliver, 
          and organizations that win through reliability.
        </p>

        {/* Journey */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Journey</h2>
          <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I didn't start as a leader. I started as someone who wanted to build things that worked. 
              Over the past decade, that curiosity evolved into something bigger: a passion for building 
              systems that organizations can trust, and teams that can move with confidence.
            </p>
            <p>
              Early in my career, I learned that the best code in the world doesn't matter if the team 
              can't ship it, the platform can't support it, or the business can't rely on it. This shaped 
              how I think about technology—not as a goal in itself, but as a means to create value.
            </p>
            <p>
              Today, I lead with that same principle. Whether it's implementing SRE practices, building 
              observability platforms, or mentoring engineers into leadership roles, I focus on what drives 
              outcomes: people, systems, and culture working together.
            </p>
          </div>
        </section>

        {/* What I Do */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What I Do</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Platform Engineering</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I build developer platforms that enable teams to ship faster without sacrificing reliability. 
                This means the right abstractions, clear interfaces, and tools that get out of the way.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Site Reliability Engineering</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I implement SRE practices that balance innovation with operational excellence. Error budgets, 
                SLOs, and incident response aren't bureaucracy—they're how you build trust.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Observability & Operations</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I create visibility into systems that drives better decisions and faster recovery. The goal 
                isn't more dashboards—it's understanding what actually matters.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I develop high-performing teams through mentorship, clarity, and psychological safety. 
                Great engineers become great leaders when they have the right support and environment.
              </p>
            </div>
          </div>
        </section>

        {/* How I Think */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How I Think</h2>
          <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              <strong className="text-neutral-900 dark:text-neutral-100">Systems thinking.</strong> Everything is connected. 
              A deployment pipeline isn't just code—it's the collaboration model, the testing strategy, and the organizational trust it enables.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-neutral-100">People first.</strong> Technology decisions are people decisions. 
              The best architecture doesn't matter if the team can't understand it, maintain it, or evolve it.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-neutral-100">Outcomes over outputs.</strong> I don't measure success by how many 
              features we ship or how many servers we run. I measure it by the value delivered and the reliability maintained.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-neutral-100">Clarity wins.</strong> Complexity is inevitable. Confusion is optional. 
              The leader's job is to create clarity in the midst of ambiguity.
            </p>
          </div>
        </section>

        {/* Where I'm Going */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Where I'm Going</h2>
          <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I'm building my path to CTO—not because of the title, but because I know what it takes to lead 
              technology at scale. I understand how platforms enable business, how reliability drives competitive 
              advantage, and how culture shapes outcomes.
            </p>
            <p>
              Along the way, I'm sharing what I learn through writing, speaking, and mentoring. Because the best 
              leaders aren't the ones with all the answers—they're the ones who help others find their own.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            If you're building platforms, scaling teams, or navigating technology leadership—let's talk. 
            I'm available for advisory, mentoring, speaking, and consulting.
          </p>
          <a href="/work" className="btn-primary">
            Work With Me
          </a>
        </section>
      </div>
    </div>
  )
}
