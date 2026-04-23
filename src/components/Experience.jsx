import { motion } from 'framer-motion';

const roles = [
  {
    company: 'MathWorks',
    title: 'Software Engineering Intern',
    location: 'Natick, MA',
    dates: 'May 2025 — August 2025',
    bullets: [
      'Migrated 4 on-premises web service applications to AWS, increasing scalability and deployment speed.',
      'Shipped features across a 15-person Agile Scrum team — sprint planning, daily standups, retrospectives.',
      'Maintained GitLab CI/CD pipelines to patch CVEs and support secure production releases across 15+ Spring Boot services.',
      'Automated JUnit integration tests for 20+ Spring Boot services and Cypress tests for frontend regressions, cutting manual QA time.',
      'Validated 7 AWS-based releases through automated tests and Grafana dashboards; ran smoke tests, liveness checks, and Splunk log verification.',
    ],
  },
  {
    company: 'Amphenol Corporation',
    title: 'Information Technology Intern',
    location: 'Wallingford, CT',
    dates: 'June 2024 — August 2024',
    bullets: [
      'Managed 150+ HQ users across Microsoft Office, Entra, and Admin Center — licensing and account administration.',
      'Ran anti-phishing campaigns and quarantined malicious email using KnowBe4 and Microsoft Defender.',
      'Authored a Zoom vs. Microsoft Teams cost/benefit analysis by auditing HQ invoicing against alternative platforms.',
      'Onboarded 600+ employees onto Duo authentication to secure SAP access, providing tier-1 tech support throughout rollout.',
    ],
  },
  {
    company: 'Amity Regional High School',
    title: 'Student Information Technology Intern',
    location: 'Woodbridge, CT',
    dates: 'October 2021 — August 2022',
    bullets: [
      'Managed software installation and maintenance on laptops for 1,600+ students and staff, including lockdown browsers and antivirus tooling.',
      'Performed hardware repairs and component replacements — batteries, screens, keyboards, and trackpads.',
      'Troubleshot daily technical issues and escalated advanced cases to senior technology associates.',
      'Installed and configured projectors, sound systems, and classroom AV wiring across 150+ rooms.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-edge">
      <div className="mb-14">
        <p className="eyebrow">02 — experience</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Where I've <span className="text-brand-orange">worked</span>
        </h2>
        <div className="rule" />
      </div>

      <ol className="space-y-10">
        {roles.map((role, i) => (
          <motion.li
            key={role.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid gap-6 md:grid-cols-5"
          >
            <div className="md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
                {role.dates}
              </p>
              <h3 className="mt-2 text-2xl font-medium text-ink">
                {role.company}
              </h3>
              <p className="text-lg text-brand-orange">{role.title}</p>
              <p className="mt-1 font-mono text-xs text-ink-subtle">
                {role.location}
              </p>
            </div>

            <ul className="space-y-3 text-base leading-relaxed text-ink-muted md:col-span-3">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
