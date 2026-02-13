import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/nicolaspalavecino', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nicolaspalavecino', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/nicolaspalavecino', icon: Github },
    { name: 'Email', href: 'mailto:contact@nicolaspalavecino.com', icon: Mail },
  ]

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Nicolás Palavecino
            </Link>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Building reliable platforms and high-performing teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Work With Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            © {currentYear} Nicolás Palavecino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
