import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Mass General Brigham Hospital Kiosk',
    category: 'Full-stack · Backend Lead (team of 9)',
    description:
      "Backend lead for a hospital kiosk web app. Designed a 13-table PostgreSQL schema with Prisma, built an Express REST API with 15 endpoints across 6 service-request types, and shipped admin tooling with filtering, inline edits, and CSV import/export for map data.",
    tags: ['PostgreSQL', 'Prisma', 'Express', 'React', 'TypeScript', 'AWS', 'Docker'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Consensus — Daily Web Game',
    category: 'Full-stack · Team of 5',
    description:
      'NYT-style daily game where players rank options and compare against global averages. Hit 150+ DAU at peak among WPI students. Designed a MongoDB aggregation schema for per-puzzle response rollups and built an automated daily archival + scheduling system.',
    tags: ['Next.js', 'MongoDB', 'Tailwind', 'Framer Motion', 'Vercel'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Crowd Evacuation Simulator (MQP)',
    category: 'Systems + Simulation',
    description:
      "Physics-based multi-agent pedestrian simulator in C++ implementing the Korhonen Social Force Model on a three-ellipse body geometry. Multi-source BFS distance field with obstacle inflation and bilinear sub-cell interpolation for smooth corner navigation. React scene editor + Python matplotlib visualization.",
    tags: ['C++', 'React', 'TypeScript', 'Python', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/sjstardellis/MQP_BBS_2025',
    demo: null,
    featured: true,
  },
  {
    title: 'AI-Powered Labeling of Historical Testimonies',
    category: 'IQP · Prague, Czech Republic',
    description:
      "Global project work in Prague with Post Bellum, a nonprofit preserving 9,000+ eyewitness testimonies. Used a large language model to geographically categorize testimonies by country and built a web-scraping pipeline to generate an international mailing list for outreach.",
    tags: ['Python', 'LLM', 'Gemini API', 'Web Scraping'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Trello End-to-End Test Suite',
    category: 'Quality · Automation',
    description:
      'Cypress E2E framework for Trello using the Page Object Model. Reusable custom commands for auth, boards, lists, and cards; cy.origin() for cross-origin Atlassian login; JSON fixtures and organized selectors for scalable maintenance.',
    tags: ['Cypress', 'JavaScript', 'Page Object Model'],
    github: null,
    demo: null,
  },
  {
    title: 'Multi-Threaded Producer-Consumer',
    category: 'Systems Programming',
    description:
      'Thread-safe circular buffer with semaphore flow control and a reusable barrier primitive built from scratch, coordinating termination across up to 10 consumers. Instrumented microsecond timing to quantify synchronization overhead across buffer sizes (1–32) and consumer counts (1–10).',
    tags: ['C', 'POSIX Threads', 'Semaphores'],
    github: null,
    demo: null,
  },
  {
    title: 'Caloric Burn ML Pipeline',
    category: 'Machine Learning',
    description:
      'Supervised regression on a 973-record gym dataset. Engineered Workout Intensity and Cardiovascular Effort features, compared Linear, Ridge, and Random Forest models. Random Forest won with R² = 0.9940 and MAPE = 1.40%.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    github: null,
    demo: null,
  },
  {
    title: 'ML Homework Series',
    category: 'Machine Learning · From Scratch',
    description:
      'Four progressive assignments building ML fundamentals in NumPy: smile classifier via stepwise pixel-pair selection, age regression (closed-form + gradient descent), softmax on Titanic + Fashion MNIST, and a two-layer NN with manual backprop and mini-batch SGD.',
    tags: ['Python', 'NumPy', 'Backprop', 'SGD'],
    github: null,
    demo: null,
  },
  {
    title: 'Attack Lab & Binary Bomb',
    category: 'Systems Security',
    description:
      'Exploited buffer overflows in 64-bit binaries to redirect control flow and built ROP chains to bypass protections. Reverse-engineered a multi-phase binary bomb using GDB and x86-64 disassembly — stack layout, calling conventions, register/memory inspection.',
    tags: ['C', 'x86-64 Assembly', 'GDB', 'ROP'],
    github: null,
    demo: null,
  },
  {
    title: 'World Video Game Market Analysis',
    category: 'Data Science · Team',
    description:
      'Analyzed 1980–2016 global game sales across region, publisher, platform, and genre. Computed central tendency + variability stats, built top-10 publisher/platform/genre visualizations, and surfaced data quality gaps (e.g., 2016–2020 coverage).',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    github: null,
    demo: null,
  },
];

const card = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-edge">
      <div className="mb-14 grid gap-6 md:grid-cols-5 md:items-end">
        <div className="md:col-span-3">
          <p className="eyebrow">03 — projects</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Things I've <span className="text-brand-orange">built</span>
          </h2>
          <div className="rule" />
        </div>
        <p className="text-ink-muted md:col-span-2">
          A cross-section of coursework, team projects, and independent work at
          WPI — full-stack, systems, security, and ML.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            custom={i}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -3 }}
            className={`card group flex flex-col p-6 hover:border-edge-bright ${
              p.featured ? 'border-l-2 border-l-brand-blue' : ''
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <p className="eyebrow flex-1">{p.category}</p>
              <div className="flex items-center gap-3 text-ink-subtle">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} source`}
                    className="transition hover:text-ink"
                  >
                    <Github size={16} />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} demo`}
                    className="transition hover:text-ink"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-medium leading-tight text-ink">
              {p.title}
            </h3>
            <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-muted">
              {p.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
