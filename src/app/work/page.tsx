import type { Metadata } from 'next'
import { Mail, MessageSquare, Users, Presentation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work With Me',
  description: 'Advisory, consulting, speaking, and mentoring services for technology leaders and organizations building reliable platforms.',
}

export default function Work() {
  return (
    <div className="container-custom py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Work With Me
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
          I help technology leaders and organizations build platforms that scale, teams that deliver, 
          and systems that can be trusted.
        </p>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">How I Can Help</h2>
          <div className="grid gap-8">
            {/* Advisory */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Strategic Advisory</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    I work with CTOs, VPs of Engineering, and technical leaders navigating platform modernization, 
                    SRE implementation, or organizational scaling. This is for leaders who need a sounding board 
                    for high-stakes technical decisions.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Platform architecture and evolution strategy
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      SRE program design and implementation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Observability and operational excellence
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Engineering organization design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consulting */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Technical Consulting</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    I provide hands-on consulting for organizations tackling complex platform challenges. 
                    This is embedded work—I'll dive deep into your systems, work with your teams, and 
                    deliver concrete outcomes.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Platform reliability assessments
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Incident response process design
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      SLO/SLI framework implementation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Team structure and on-call optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Speaking */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Presentation className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Speaking & Workshops</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    I speak at conferences, company offsites, and team events on technology leadership, 
                    platform engineering, and building reliable systems. I also run hands-on workshops 
                    for engineering teams.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Conference talks and keynotes
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Engineering leadership workshops
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      SRE and observability training
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Team offsites and strategy sessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mentoring */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">1-on-1 Mentoring</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    I mentor senior engineers and engineering managers navigating the path to technical 
                    leadership. This is for people who want to grow beyond being great ICs—who want to 
                    lead teams, influence strategy, and build their path to CTO.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Transitioning from IC to leadership
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Career strategy and positioning
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Building executive presence
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      Navigating organizational complexity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who I Work With */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who I Work With</h2>
          <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I work with organizations and leaders who understand that reliability is a competitive advantage, 
              that great technology requires great teams, and that the path to CTO isn't about being the best 
              coder—it's about enabling the best outcomes.
            </p>
            <p>
              My clients include:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>CTOs and VPs of Engineering scaling platforms and teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Platform and infrastructure leaders building SRE capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Senior engineers transitioning into technical leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Organizations modernizing legacy systems at scale</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            Interested in working together? Send me an email with details about your challenge, 
            and I'll get back to you within 48 hours.
          </p>
          <a 
            href="mailto:contact@nicolaspalavecino.com?subject=Let's Work Together"
            className="btn-primary inline-flex items-center"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </a>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
            Include your name, organization, and what you're hoping to accomplish. 
            The more context you provide, the better I can help.
          </p>
        </section>
      </div>
    </div>
  )
}
