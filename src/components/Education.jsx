import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const coursework = {
  'Software & Systems': [
    'CS 3733 — Software Engineering',
    'CS 4241 — Webware',
    'CS 2303 — Systems Programming Concepts',
    'CS 3013 — Operating Systems',
    'CS 2011 — Machine Organization & Assembly',
    'CS 2102 — Object-Oriented Design',
  ],
  'Algorithms & Theory': [
    'CS 2223 — Algorithms',
    'CS 4120 — Analysis of Algorithms',
    'CS 3133 — Foundations of Computer Science',
  ],
  'Databases': [
    'CS 3431 — Database Systems I',
    'CS 4432 — Database Systems II',
    'CS 4445 — Data Mining & Knowledge Discovery',
  ],
  'Data Science & ML': [
    'CS 4342 — Machine Learning',
    'DS 1010 — Data Science I',
    'DS 2010 — Data Science II: Modeling',
    'BUS 2080 — Data Analysis for Decision Making',
    'MA 2611 — Applied Statistics',
    'MA 2631 — Probability Theory',
    'MA 2071 — Matrices & Linear Algebra',
  ],
};

const wpiAwards = [
  { name: "Dean's List", detail: '5 semesters · most recent Fall 2025' },
  { name: 'Charles O. Thompson Scholar Nominee', detail: 'Superior academic accomplishment — first-year coursework' },
];

const amityAwards = [
  { name: 'David Braverman Memorial Award', detail: 'Amity Regional High School · June 2022' },
  { name: 'Excellence in AP Computer Science', detail: 'Amity Regional High School · June 2022' },
  { name: 'Excellence in Chinese', detail: 'Amity Regional High School · May 2020' },
  { name: 'First Honors', detail: '2019 — 2022' },
];

export default function Education() {
  return (
    <section id="education" className="section border-t border-edge">
      <div className="mb-14">
        <p className="eyebrow">04 — education</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Academics & <span className="text-brand-orange">honors</span>
        </h2>
        <div className="rule" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="card mb-10 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-md border border-edge bg-ide-gutter p-3">
            <GraduationCap size={22} className="text-brand-blue" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-ink">
              Worcester Polytechnic Institute
            </h3>
            <p className="text-sm text-ink-muted">
              B.S. Computer Science · Minor in Data Science
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 text-sm md:text-right">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
              GPA
            </p>
            <p className="mt-1 font-mono text-lg text-brand-cyan">3.8 / 4.0</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
              Honors
            </p>
            <p className="mt-1 text-lg text-ink">Dean's List</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
              Graduated
            </p>
            <p className="mt-1 font-mono text-lg text-ink">Mar 2026</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card p-8 lg:col-span-3"
        >
          <div className="mb-6 flex items-center gap-3">
            <BookOpen size={18} className="text-brand-blue" />
            <h3 className="text-xl font-medium text-ink">
              Relevant coursework
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(coursework).map(([group, courses]) => (
              <div key={group}>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-ink-subtle">
                  {group}
                </p>
                <ul className="space-y-1.5 text-sm text-ink-muted">
                  {courses.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8 lg:col-span-2"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award size={18} className="text-brand-blue" />
            <h3 className="text-xl font-medium text-ink">Awards & honors</h3>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-subtle">
                Worcester Polytechnic Institute
              </p>
              <ul className="space-y-3">
                {wpiAwards.map((a) => (
                  <li key={a.name}>
                    <p className="text-ink">{a.name}</p>
                    <p className="text-xs text-ink-subtle">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-subtle">
                Amity Regional High School
              </p>
              <ul className="space-y-3">
                {amityAwards.map((a) => (
                  <li key={a.name}>
                    <p className="text-ink">{a.name}</p>
                    <p className="text-xs text-ink-subtle">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
