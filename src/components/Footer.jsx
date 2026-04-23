import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-ink-subtle md:flex-row">
        <p className="serif-italic">
          © {new Date().getFullYear()} Stephen Stardellis — set in Fraunces & Inter.
        </p>
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
}
