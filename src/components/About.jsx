import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'SQL', 'R', 'MATLAB', 'Assembly'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Spring Boot', 'Prisma ORM', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI', 'HTML5 Canvas'],
  },
  {
    label: 'Data & Infra',
    items: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS (EC2, RDS)', 'GitLab CI/CD', 'TeamCity', 'Grafana', 'Splunk'],
  },
  {
    label: 'Testing & Tooling',
    items: ['Cypress', 'JUnit', 'Postman', 'GDB', 'Jira', 'Confluence', 'NumPy', 'Matplotlib', 'Gemini API'],
  },
];

export default function About() {
  return (
    <section id="about" className="section border-t border-edge">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 md:grid-cols-5"
      >
        <div className="md:col-span-2">
          <p className="eyebrow">01 — about</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            A few things <span className="text-brand-orange">about me</span>
          </h2>
          <div className="rule" />
          <div className="mt-6 space-y-1.5 font-mono text-sm text-ink-muted">
            <p className="text-ink">Worcester Polytechnic Institute</p>
            <p>B.S. Computer Science · Minor Data Science</p>
            <p>Dean's List · GPA 3.8 / 4.0</p>
            <p>Graduated May 2026</p>
          </div>
        </div>

        <div className="space-y-5 text-ink-muted md:col-span-3">
          <p className="text-lg leading-relaxed">
            I'm a software engineer who enjoys working across the stack, from
            PostgreSQL schemas and REST APIs up through the React components
            that render them. My work at WPI and MathWorks has been in Agile
            Scrum teams, where I've shipped features end-to-end, owned backend
            architecture, and maintained CI/CD pipelines for production services.
          </p>
          <p className="text-lg leading-relaxed">
            Outside the typical full-stack lane, I've built a physics-based
            crowd simulator in C++ for my Major Qualifying Project, written
            multi-threaded systems code in C with POSIX threads, and trained
            regression and neural-net models from scratch in NumPy. I like
            to understand problems in depth behind all
            the abstraction.
          </p>

          <div className="space-y-5 border-t border-edge pt-6">
            <p className="eyebrow pt-2">Toolkit</p>
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-ink-subtle">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
