import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import headshotImg from '/headshot.png';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="section min-h-[calc(100vh-84px)] flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 md:grid-cols-[minmax(0,1fr)_auto]"
        >
          <div className="max-w-3xl">

            <motion.h1
              variants={item}
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl"
            >
              Stephen
              <br />
              Stardellis<span className="text-brand-orange">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-xl text-ink-muted md:text-2xl"
            >
              Software engineer, building full-stack systems.
            </motion.p>

            <div className="rule mt-8" />

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
            >
              Computer Science graduate from{' '}
              <span className="text-ink">Worcester Polytechnic Institute</span>{' '}
              with a minor in Data Science. Most recently a Software Engineering
              Intern at <span className="text-ink">MathWorks</span>, shipping AWS
              migrations, CI/CD patches, and automated test coverage across 15+
              Spring Boot services on a 15-person Agile team.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} />
                Contact me
              </a>
              <a
                href="/resume.pdf"
                className="btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex items-center gap-5 text-ink-subtle"
            >
              <a
                href="https://github.com/sjstardellis"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-ink"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/stephenstardellis/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-ink"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sjstardellis@gmail.com"
                aria-label="Email"
                className="transition hover:text-ink"
              >
                <Mail size={18} />
              </a>
              <span className="font-mono text-xs">Worcester, MA</span>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto md:mx-0">
            <div className="relative h-60 w-60 overflow-hidden rounded-md border border-edge bg-ide-tool shadow-2xl md:h-72 md:w-72">
              <img
                src={headshotImg}
                alt="Stephen Stardellis"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
