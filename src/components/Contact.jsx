import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, User } from 'lucide-react';

const rows = [
  {
    icon: User,
    label: 'Name',
    value: 'Stephen Stardellis',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '203-800-1314',
    href: 'tel:+12038001314',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sjstardellis@gmail.com',
    href: 'mailto:sjstardellis@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/stephenstardellis',
    href: 'https://www.linkedin.com/in/stephenstardellis/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-edge">
      <div className="grid gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <p className="eyebrow">05 — contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Let's <span className="text-brand-orange">connect</span>.
          </h2>
          <div className="rule" />
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Open to{' '}
            <span className="text-ink">software engineering</span>{' '}
            and
            <span className="text-ink"> data science </span> {' '}
            related roles.
            Always open to expanding my skill sets, lets connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8 md:col-span-3 md:p-10"
        >
          <ul className="divide-y divide-edge">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li
                key={label}
                className="flex items-center gap-5 py-5 first:pt-0 last:pb-0"
              >
                <div className="rounded-md border border-edge bg-ide-gutter p-2.5 text-brand-blue">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="block truncate font-mono text-base text-ink transition hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="truncate font-mono text-base text-ink">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
