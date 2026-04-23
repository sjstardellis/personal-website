import { CheckCircle2, GitBranch, MapPin } from 'lucide-react';
import { FILES } from './IdeShell.jsx';

const TYPE_LABEL = {
  tsx: 'TypeScript JSX',
  md: 'Markdown',
  json: 'JSON',
  vcf: 'vCard',
};

export default function StatusBar({ active, cursor }) {
  const file = FILES.find((f) => f.id === active);
  const typeLabel = file ? TYPE_LABEL[file.type] || file.type.toUpperCase() : '';

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 flex h-6 items-center border-t border-edge bg-ide-tool font-mono text-[11px] text-ink-muted">
      <div className="flex h-full items-center">
        <Item>
          <GitBranch size={11} />
          <span>main</span>
        </Item>
        <Item>
          <CheckCircle2 size={11} className="text-brand-green" />
          <span className="hidden sm:inline">0 problems</span>
        </Item>
      </div>

      <div className="flex-1" />

      <div className="flex h-full items-center">
        {file && <Item className="hidden md:flex">{file.name}</Item>}
        <Item>
          {cursor.line}:{cursor.col}
        </Item>
        <Item className="hidden sm:flex">UTF-8</Item>
        <Item className="hidden md:flex">LF</Item>
        <Item className="hidden lg:flex">2 spaces</Item>
        <Item className="hidden sm:flex">{typeLabel}</Item>
        <Item className="hidden lg:flex">
          <MapPin size={11} />
          <span>Worcester, MA</span>
        </Item>
      </div>
    </footer>
  );
}

function Item({ children, className = '' }) {
  return (
    <div
      className={`flex h-full cursor-default items-center gap-1 border-r border-edge px-2 transition hover:bg-ide-hover ${className}`}
    >
      {children}
    </div>
  );
}
