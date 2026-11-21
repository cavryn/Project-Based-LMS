import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeRole: 'dosen' | 'mahasiswa' | 'admin';
  onRoleChange: (role: 'dosen' | 'mahasiswa' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeRole,
  onRoleChange,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[var(--surface)] border-b-[3px] border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 grid place-items-center bg-[var(--primary)] text-[var(--on-primary)] border-[3px] border-[var(--line)] shadow-[3px_3px_0_var(--shadow)] font-black text-sm rounded-[var(--radius)]">
            PL
          </div>
          <div>
            <div className="font-black text-base tracking-tight leading-none">PBL-LMS</div>
            <div className="text-[10px] font-mono text-[var(--muted)]">Capstone IF13PP13</div>
          </div>
        </div>

        {/* Role Switcher (Simulator) */}
        <div className="flex items-center gap-1.5 bg-[var(--surface-2)] p-1 border-2 border-[var(--line)] rounded-[var(--radius)] text-xs font-bold">
          <span className="text-[10px] font-mono px-2 text-[var(--muted)] uppercase hidden sm:inline">Role:</span>
          {(['dosen', 'mahasiswa', 'admin'] as const).map((r) => (
            <button
              key={r}
              onClick={() => onRoleChange(r)}
              className={`px-2.5 py-1 rounded-[2px] transition-all capitalize ${
                activeRole === r
                  ? 'bg-[var(--primary)] text-[var(--on-primary)] shadow-[2px_2px_0_var(--shadow)]'
                  : 'hover:bg-[var(--surface)] text-[var(--ink)]'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 border-[3px] border-[var(--line)] bg-[var(--surface-2)] shadow-[3px_3px_0_var(--shadow)] rounded-[var(--radius)] text-xs font-bold font-mono hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          aria-label="Toggle Mode"
        >
          {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
          <span>{theme === 'dark' ? 'Malam' : 'Terang'}</span>
        </button>
      </div>
    </header>
  );
};
