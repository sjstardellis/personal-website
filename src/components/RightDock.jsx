import { Bell, FileType, Github, Linkedin, Mail } from 'lucide-react';

export default function RightDock() {
  return (
    <aside className="fixed bottom-6 right-0 top-12 z-20 flex w-10 flex-col items-center gap-1 border-l border-edge bg-ide-tool py-2">
      <DockButton
        href="https://github.com/sjstardellis"
        icon={Github}
        label="GitHub"
      />
      <DockButton
        href="https://www.linkedin.com/in/stephenstardellis/"
        icon={Linkedin}
        label="LinkedIn"
      />
      <DockButton
        href="mailto:sjstardellis@gmail.com"
        icon={Mail}
        label="Email"
      />
      <DockButton href="/resume.pdf" icon={FileType} label="Resume" />
      <div className="mt-auto">
        <DockButton icon={Bell} label="Notifications" disabled />
      </div>
    </aside>
  );
}

function DockButton({ href, icon: Icon, label, disabled }) {
  const common =
    'rounded p-2 text-ink-muted transition hover:bg-ide-hover hover:text-ink';
  if (disabled) {
    return (
      <span className={common + ' cursor-default opacity-60'} title={label}>
        <Icon size={16} />
      </span>
    );
  }
  const external = href && href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      title={label}
      aria-label={label}
      className={common}
    >
      <Icon size={16} />
    </a>
  );
}
