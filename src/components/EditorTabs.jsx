import {
  Braces,
  Contact as ContactIcon,
  FileCode2,
  FileText,
  X,
} from 'lucide-react';
import { FILES } from './IdeShell.jsx';

const TYPE_ICONS = {
  tsx: { icon: FileCode2, color: 'text-brand-blue' },
  md: { icon: FileText, color: 'text-brand-md' },
  json: { icon: Braces, color: 'text-brand-yellow' },
  vcf: { icon: ContactIcon, color: 'text-brand-green' },
};

export default function EditorTabs({ active, treeOpen }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`scrollbar-hidden fixed right-10 top-12 z-20 h-9 overflow-x-auto border-b border-edge bg-ide-tool transition-[left] duration-200 ${
        treeOpen ? 'md:left-60 left-0' : 'left-0'
      }`}
    >
      <div className="flex h-full">
        {FILES.map((f) => {
          const { icon: Icon, color } = TYPE_ICONS[f.type] || {};
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              onClick={() => scrollTo(f.id)}
              className={`group relative flex shrink-0 items-center gap-1.5 border-r border-edge px-3 py-1.5 text-xs transition ${
                isActive
                  ? 'bg-ide-bg text-ink'
                  : 'text-ink-muted hover:bg-ide-hover hover:text-ink'
              }`}
            >
              {Icon && <Icon size={13} className={color} />}
              <span className="font-mono">{f.name}</span>
              <X
                size={11}
                className="text-ink-subtle opacity-0 transition group-hover:opacity-100"
              />
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-brand-blue" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
