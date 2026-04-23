import { Bell, GitBranch, Menu, Play, Search, Settings } from 'lucide-react';

export default function TopToolbar({ onToggleTree }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-12 border-b border-edge bg-ide-tool">
      <div className="flex h-full items-center gap-2 px-2">
        <button
          onClick={onToggleTree}
          className="rounded p-1.5 text-ink-muted transition hover:bg-ide-hover hover:text-ink"
          aria-label="Toggle project tree"
        >
          <Menu size={16} />
        </button>

        <div className="flex items-center gap-2 rounded border border-transparent px-2 py-1 hover:border-edge hover:bg-ide-hover">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-orange text-[10px] font-bold text-ide-bg">
            S
          </span>
          <span className="text-sm text-ink">stephen-stardellis</span>
        </div>

        <button className="hidden items-center gap-1.5 rounded px-2 py-1 text-xs text-ink-muted transition hover:bg-ide-hover hover:text-ink sm:flex">
          <GitBranch size={13} />
          <span>main</span>
        </button>

        <button className="hidden items-center gap-1.5 rounded border border-edge bg-ide-bg px-2 py-1 text-xs text-ink-muted transition hover:bg-ide-hover hover:text-ink md:flex">
          <Play size={11} className="fill-brand-green text-brand-green" />
          <span>portfolio</span>
        </button>

        <div className="flex flex-1 justify-center px-2">
          <button className="flex w-full max-w-md items-center gap-2 rounded border border-edge bg-ide-bg/60 px-3 py-1 text-xs text-ink-subtle transition hover:bg-ide-hover hover:text-ink">
            <Search size={12} />
            <span className="hidden sm:inline">Search Everywhere</span>
            <span className="sm:hidden">Search</span>
            <span className="ml-auto hidden font-mono text-[10px] sm:inline">
              ⇧ ⇧
            </span>
          </button>
        </div>

        <button
          className="rounded p-1.5 text-ink-muted transition hover:bg-ide-hover hover:text-ink"
          aria-label="Notifications"
        >
          <Bell size={14} />
        </button>
        <button
          className="rounded p-1.5 text-ink-muted transition hover:bg-ide-hover hover:text-ink"
          aria-label="Settings"
        >
          <Settings size={14} />
        </button>
      </div>
    </header>
  );
}
