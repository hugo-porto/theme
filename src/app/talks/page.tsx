import type { Metadata } from 'next'
import { Presentation, Calendar, MapPin, ExternalLink, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Talks',
  description: 'Conference talks, workshops, and speaking engagements by Nicolás Palavecino on technology leadership, SRE, platform engineering, and observability.',
}

const upcomingTalks = [
  {
    title: 'The Future of SRE is Business Observability',
    event: 'SREcon LATAM 2025',
    date: '2025-06-15',
    location: 'Buenos Aires, Argentina',
    description: 'Why the next evolution of SRE isn\'t about more metrics—it\'s about understanding what drives business outcomes.',
    tags: ['SRE', 'Observability', 'Leadership'],
  },
]

const pastTalks = [
  {
    title: 'Reliability as a Competitive Advantage',
    event: 'DevOps Days Buenos Aires',
    date: '2024-11-10',
    location: 'Buenos Aires, Argentina',
    description: 'How engineering organizations can turn reliability into a business differentiator, not just a cost center.',
    tags: ['Reliability', 'Strategy', 'Engineering'],
  },
  {
    title: 'Technology Leadership is a People Game',
    event: 'Nerdearla 2024',
    date: '2024-09-22',
    location: 'Buenos Aires, Argentina',
    description: 'The shift from maker to multiplier—what it really takes to lead engineering teams at scale.',
    tags: ['Leadership', 'Team Building', 'Culture'],
  },
  {
    title: 'Building Observability Platforms That Scale',
    event: 'Platform Engineering Meetup',
    date: '2024-05-18',
    location: 'Remote',
    description: 'Lessons learned building observability platforms that serve hundreds of engineering teams.',
    tags: ['Observability', 'Platform Engineering'],
  },
]

const topics = [
  {
    title: 'Technology Leadership',
    description: 'Navigating the transition from IC to leader, building high-performing teams, and creating clarity in complex organizations.',
  },
  {
    title: 'SRE & Reliability',
    description: 'Implementing SRE practices, designing SLO frameworks, and turning reliability into a competitive advantage.',
  },
  {
    title: 'Platform Engineering',
    description: 'Building internal developer platforms, creating the right abstractions, and enabling teams to ship faster.',
  },
  {
    title: 'Observability',
    description: 'Moving beyond dashboards to business observability—understanding what actually matters for your organization.',
  },
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function TalkCard({ talk }: { talk: { title: string; event: string; date: string; location: string; description: string; tags: string[]; link?: string } }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg shrink-0">
          <Mic className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{talk.title}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{talk.event}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(talk.date)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {talk.location}
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
            {talk.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {talk.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          {talk.link && (
            <a
              href={talk.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Watch recording <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Talks() {
  return (
    <div className="container-custom py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Talks
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
          I speak at conferences, meetups, and company events about technology leadership,
          platform engineering, SRE, and building teams that deliver.
        </p>

        {/* Upcoming */}
        {upcomingTalks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming</h2>
            <div className="grid gap-6">
              {upcomingTalks.map((talk) => (
                <TalkCard key={`${talk.event}-${talk.date}`} talk={talk} />
              ))}
            </div>
          </section>
        )}

        {/* Past Talks */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Talks</h2>
          <div className="grid gap-6">
            {pastTalks.map((talk) => (
              <TalkCard key={`${talk.event}-${talk.date}`} talk={talk} />
            ))}
          </div>
        </section>

        {/* Topics */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Topics I Speak About</h2>
          <div className="space-y-6">
            {topics.map((topic) => (
              <div key={topic.title} className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg shrink-0">
              <Presentation className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Invite Me to Speak</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                I'm available for conferences, company offsites, team events, and workshops.
                I tailor every talk to the audience and context.
              </p>
              <a
                href="mailto:contact@nicolaspalavecino.com?subject=Speaking Inquiry"
                className="btn-primary inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
