import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Button } from './components/common/Button';
import { Badge } from './components/common/Badge';
import { Card } from './components/common/Card';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [role, setRole] = useState<'dosen' | 'mahasiswa' | 'admin'>('dosen');
  
  // Rubric weights state
  const [weights, setWeights] = useState([20, 20, 25, 20, 15]);
  const criteria = [
    'Kejelasan Masalah & Solusi Produk',
    'Transparansi Asumsi & Pembuktian',
    'Engineering & Kompleksitas Teknis',
    'Kelayakan Ruang Lingkup MVP',
    'Validasi Pengujian & Etika'
  ];

  const totalWeight = weights.reduce((acc, curr) => acc + curr, 0);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleWeightChange = (index: number, val: number) => {
    const next = [...weights];
    next[index] = Number(val) || 0;
    setWeights(next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeRole={role}
        onRoleChange={setRole}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 grid gap-8">
        {/* Hero Section */}
        <div className="border-[3px] border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 shadow-[6px_6px_0_var(--shadow)] rounded-[var(--radius)]">
          <div className="text-xs font-mono font-bold tracking-widest text-[var(--primary-text)] uppercase mb-2">
            PB-01 · Kerangka Aplikasi Berjalan
          </div>
          <h1 className="text-2xl md:text-4xl font-black mb-3">
            Sistem Manajemen Pembelajaran Berbasis Proyek (PBL-LMS)
          </h1>
          <p className="text-[var(--muted)] max-w-3xl text-sm md:text-base mb-6">
            Prototipe sistem penilaian proyek kelompok berbasis rubrik digital dan modul peer assessment 
            anonim deterministik. Menggunakan desain Neobrutalism responsif dengan backend NestJS & database PostgreSQL MikroORM.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="primary">Sprint 1 Aktif</Badge>
            <Badge variant="soft">Role: {role.toUpperCase()}</Badge>
            <Badge variant="ink">Branch: FE / BE</Badge>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Milestone Tahapan */}
          <Card title="Milestone Proyek" badge={<Badge variant="primary">Aktif</Badge>}>
            <div className="space-y-4 text-sm">
              <div className="p-3 border-2 border-[var(--line)] bg-[var(--surface-2)] rounded-[var(--radius)]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">M1: Proposal & Scope</span>
                  <Badge variant="ink">Selesai</Badge>
                </div>
                <div className="text-xs text-[var(--muted)]">Tenggat: 16 Okt 2026</div>
              </div>

              <div className="p-3 border-2 border-[var(--line)] bg-[var(--surface-2)] rounded-[var(--radius)]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">M2: Prototipe MVP</span>
                  <Badge variant="primary">Proses</Badge>
                </div>
                <div className="text-xs text-[var(--muted)]">Tenggat: 13 Nov 2026 (Peer Assessment Dibuka)</div>
              </div>

              <div className="p-3 border-2 border-[var(--line)] bg-[var(--surface-2)] rounded-[var(--radius)]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">M3: Pengujian & Laporan</span>
                  <Badge variant="default">Terkunci</Badge>
                </div>
                <div className="text-xs text-[var(--muted)]">Tenggat: 27 Nov 2026</div>
              </div>
            </div>
          </Card>

          {/* Card 2: Interactive Rubric Weight Validator */}
          <Card 
            title="Rubric Builder (Demo)" 
            badge={
              totalWeight === 100 ? (
                <Badge variant="primary">100% Valid</Badge>
              ) : (
                <Badge variant="danger">Total: {totalWeight}%</Badge>
              )
            }
            className="md:col-span-2"
          >
            <p className="text-xs text-[var(--muted)]">
              Simulasi aturan bisnis FR-02: Total bobot kriteria wajib tepat 100% agar rubrik dapat disimpan.
            </p>

            <div className="space-y-2 mt-2">
              {criteria.map((c, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-2 border-2 border-[var(--line)] rounded-[var(--radius)] bg-[var(--surface-2)]">
                  <span className="text-xs md:text-sm font-medium">{c}</span>
                  <div className="flex items-center gap-1 font-mono">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={weights[i]}
                      onChange={(e) => handleWeightChange(i, Number(e.target.value))}
                      className="w-16 px-2 py-1 text-right text-xs md:text-sm border-2 border-[var(--line)] bg-[var(--surface)] font-bold rounded-[var(--radius)]"
                    />
                    <span className="text-xs font-bold">%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[var(--line)] mt-3">
              <div className="text-xs font-mono">
                Status Validasi: {totalWeight === 100 ? (
                  <span className="text-[var(--primary)] font-bold">✓ Siap Disimpan</span>
                ) : (
                  <span className="text-[var(--danger)] font-bold">✕ Bobot harus 100%</span>
                )}
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => setWeights([20, 20, 25, 20, 15])}>Reset</Button>
                <Button variant="primary" size="sm" disabled={totalWeight !== 100}>
                  Simpan Rubrik
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Peer Assessment Preview */}
        <div className="border-[3px] border-[var(--line)] bg-[var(--surface)] p-6 shadow-[6px_6px_0_var(--shadow)] rounded-[var(--radius)]">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-4 border-b-2 border-[var(--line)] pb-3">
            <div>
              <h2 className="text-lg md:text-xl font-bold">Simulasi Modul Peer Assessment (E07)</h2>
              <p className="text-xs text-[var(--muted)]">Anonimitas terjamin: Identitas penilai disanitasi di sisi backend.</p>
            </div>
            <Badge variant="warn">Periode Aktif</Badge>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {['Rani Putri', 'Dimas Arya', 'Bagas Nugroho', 'Salsa Wijaya'].map((nama, idx) => (
              <div key={idx} className="p-3 border-2 border-[var(--line)] bg-[var(--surface-2)] rounded-[var(--radius)] flex flex-col justify-between">
                <div>
                  <div className="font-bold text-sm">{nama}</div>
                  <div className="text-[10px] font-mono text-[var(--muted)]">Kelompok A · Tim Hijau</div>
                </div>
                <div className="mt-3 flex gap-1 justify-between">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      className="w-7 h-7 border-2 border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-[var(--on-primary)] font-mono text-xs font-bold rounded-[var(--radius)] transition-colors"
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-[var(--line)] bg-[var(--surface)] py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-xs text-[var(--muted)] font-mono">
          <div>Proyek Capstone IF13PP13 · Semester 7</div>
          <div>Tech Stack: TypeScript · NestJS · React · PostgreSQL · MikroORM · Docker</div>
        </div>
      </footer>
    </div>
  );
}
