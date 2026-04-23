import { useState } from 'react';
import {
  Braces,
  ChevronDown,
  ChevronRight,
  FileCode2,
  FileText,
  FileType,
  Folder,
  FolderOpen,
  Image,
  Contact as ContactIcon,
} from 'lucide-react';
import { FILES } from './IdeShell.jsx';

const TYPE_ICONS = {
  tsx: { icon: FileCode2, color: 'text-brand-blue' },
  md: { icon: FileText, color: 'text-brand-md' },
  json: { icon: Braces, color: 'text-brand-yellow' },
  vcf: { icon: ContactIcon, color: 'text-brand-green' },
};

export default function ProjectTree({ open, active }) {
  const [srcOpen, setSrcOpen] = useState(true);
  const [sectionsOpen, setSectionsOpen] = useState(true);
  const [publicOpen, setPublicOpen] = useState(true);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside
      className={`fixed bottom-6 left-0 top-12 z-30 w-60 overflow-y-auto border-r border-edge bg-ide-tool transition-transform duration-200 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="sticky top-0 z-10 border-b border-edge bg-ide-tool px-3 py-2">
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-subtle">
          Project
        </p>
      </div>

      <div className="select-none py-1 text-sm">
        <Row
          label="stephen-stardellis"
          icon={FolderOpen}
          iconColor="text-brand-orange"
          depth={0}
          bold
          expandable
          expanded
        />

        <Row
          label="src"
          icon={srcOpen ? FolderOpen : Folder}
          iconColor="text-brand-orange"
          depth={1}
          expandable
          expanded={srcOpen}
          onClick={() => setSrcOpen((s) => !s)}
        />
        {srcOpen && (
          <>
            <Row
              label="sections"
              icon={sectionsOpen ? FolderOpen : Folder}
              iconColor="text-brand-orange"
              depth={2}
              expandable
              expanded={sectionsOpen}
              onClick={() => setSectionsOpen((s) => !s)}
            />
            {sectionsOpen &&
              FILES.map((f) => {
                const { icon, color } = TYPE_ICONS[f.type] || {};
                return (
                  <Row
                    key={f.id}
                    label={f.name}
                    icon={icon}
                    iconColor={color}
                    depth={3}
                    selected={active === f.id}
                    onClick={() => scrollTo(f.id)}
                  />
                );
              })}
            <Row
              label="main.tsx"
              icon={FileCode2}
              iconColor="text-brand-blue"
              depth={2}
            />
            <Row
              label="index.css"
              icon={FileText}
              iconColor="text-brand-md"
              depth={2}
            />
          </>
        )}

        <Row
          label="public"
          icon={publicOpen ? FolderOpen : Folder}
          iconColor="text-brand-orange"
          depth={1}
          expandable
          expanded={publicOpen}
          onClick={() => setPublicOpen((s) => !s)}
        />
        {publicOpen && (
          <>
            <Row
              label="resume.pdf"
              icon={FileType}
              iconColor="text-brand-red"
              depth={2}
              onClick={() => window.open('/resume.pdf', '_blank')}
            />
            <Row
              label="headshot.png"
              icon={Image}
              iconColor="text-brand-purple"
              depth={2}
            />
          </>
        )}

        <Row
          label="package.json"
          icon={Braces}
          iconColor="text-brand-yellow"
          depth={1}
        />
        <Row
          label="tailwind.config.js"
          icon={FileCode2}
          iconColor="text-brand-yellow"
          depth={1}
        />
        <Row
          label="README.md"
          icon={FileText}
          iconColor="text-brand-md"
          depth={1}
        />
      </div>
    </aside>
  );
}

function Row({
  label,
  icon: Icon,
  iconColor = 'text-ink-muted',
  depth = 0,
  expandable,
  expanded,
  selected,
  bold,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-1 py-[3px] pr-2 text-left transition hover:bg-ide-hover ${
        selected ? 'bg-ide-select/60 text-ink' : 'text-ink-muted'
      }`}
      style={{ paddingLeft: `${depth * 14 + 6}px` }}
    >
      {expandable ? (
        expanded ? (
          <ChevronDown size={12} className="shrink-0 text-ink-subtle" />
        ) : (
          <ChevronRight size={12} className="shrink-0 text-ink-subtle" />
        )
      ) : (
        <span className="inline-block w-3 shrink-0" />
      )}
      {Icon && <Icon size={13} className={`shrink-0 ${iconColor}`} />}
      <span
        className={`truncate text-[13px] ${
          bold ? 'font-medium text-ink' : ''
        }`}
      >
        {label}
      </span>
    </button>
  );
}
