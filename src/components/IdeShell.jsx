import { useEffect, useState } from 'react';
import TopToolbar from './TopToolbar.jsx';
import ProjectTree from './ProjectTree.jsx';
import EditorTabs from './EditorTabs.jsx';
import RightDock from './RightDock.jsx';
import StatusBar from './StatusBar.jsx';

export const FILES = [
  { id: 'top', name: 'hero.tsx', type: 'tsx', title: 'Hero' },
  { id: 'about', name: 'about.md', type: 'md', title: 'About' },
  { id: 'experience', name: 'experience.json', type: 'json', title: 'Experience' },
  { id: 'projects', name: 'projects.tsx', type: 'tsx', title: 'Projects' },
  { id: 'education', name: 'education.md', type: 'md', title: 'Education' },
  { id: 'contact', name: 'contact.vcf', type: 'vcf', title: 'Contact' },
];

export default function IdeShell({ children }) {
  const [treeOpen, setTreeOpen] = useState(true);
  const [active, setActive] = useState('top');
  const [cursor, setCursor] = useState({ line: 1, col: 1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8] }
    );
    FILES.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const line = Math.max(1, Math.floor(y / 24) + 1);
      setCursor({ line, col: 1 });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <TopToolbar onToggleTree={() => setTreeOpen((t) => !t)} />
      <ProjectTree open={treeOpen} active={active} />
      <EditorTabs active={active} treeOpen={treeOpen} />
      <main
        className={`min-h-screen pt-[84px] pb-10 pr-10 transition-[padding] duration-200 ${
          treeOpen ? 'md:pl-60' : 'pl-0'
        }`}
      >
        {children}
      </main>
      <RightDock />
      <StatusBar active={active} cursor={cursor} />
    </>
  );
}
