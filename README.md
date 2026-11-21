# 🎓 Project-Based Learning Management System (PBL-LMS)
**Sistem Manajemen Pembelajaran Berbasis Proyek dengan Rubrik Penilaian Digital dan Peer Assessment Berbasis Web**  
*Capstone Project IF13PP13 — Universitas Internasional Semen Indonesia (UISI)*

---

## 🛠️ Tech Stack & Arsitektur

| Layer | Teknologi |
|---|---|
| **Bahasa Utama** | TypeScript |
| **Backend Framework** | NestJS |
| **Frontend Library** | React (Vite + TypeScript) |
| **Styling & UI** | Tailwind CSS v4 + Neobrutalism Design System |
| **Database** | PostgreSQL 16 |
| **Object-Relational Mapping** | MikroORM v6 |
| **Kontainerisasi** | Docker & Docker Compose |

---

## 🌿 Strategi Branching Git

Repositori menggunakan strategi 3 branch utama:
- `main` : Branch stabil untuk rilis sprint.
- `be` : Branch pengerjaan tim backend (folder `backend/`).
- `fe` : Branch pengerjaan tim frontend (folder `frontend/`).

```bash
# Berpindah ke branch backend
git checkout be

# Berpindah ke branch frontend
git checkout fe
```

---

## 🚀 Panduan Menjalankan Aplikasi

### Opsi 1: Menggunakan Docker Compose (Direkomendasikan)
Menjalankan seluruh ekosistem (PostgreSQL, NestJS Backend, dan React Frontend) dalam satu perintah:

```bash
# 1. Salin template environment
cp .env.example .env

# 2. Jalankan container
docker compose up --build

# Akses aplikasi:
# Frontend : http://localhost:5173
# Backend  : http://localhost:3000/api
```

---

### Opsi 2: Menjalankan Lokal Sekaligus (Root `npm run dev`)
Cukup jalankan satu perintah dari folder utama (*root*):

```bash
# 1. Pastikan database PostgreSQL aktif (lokal atau via docker):
docker compose up -d postgres

# 2. Jalankan Backend & Frontend secara bersamaan:
npm run dev

# Akses aplikasi:
# Frontend : http://localhost:5173
# Backend  : http://localhost:3000/api
```

> **Perintah Tambahan:**
> - `npm run dev:backend` : Menjalankan backend saja
> - `npm run dev:frontend` : Menjalankan frontend saja
> - `npm run build` : Mem-build backend & frontend sekaligus
> - `npm run install:all` : Menginstal dependensi root, backend, dan frontend

---

### Opsi 3: Menjalankan Manual di Masing-masing Folder

#### 1. Setup Database (PostgreSQL)
Pastikan PostgreSQL aktif lokal di port 5432 dengan database bernama `pbl_lms`, atau jalankan servicenya via Docker:
```bash
docker compose up -d postgres
```

#### 2. Jalankan Backend (NestJS)
```bash
cd backend
npm install --legacy-peer-deps
npm run start:dev
# Backend aktif di http://localhost:3000/api
```

#### 3. Jalankan Frontend (React Vite)
```bash
cd frontend
npm install
npm run dev
# Frontend aktif di http://localhost:5173
```

---

## 📂 Struktur Direktori Proyek

```plaintext
Project-Based-LMS/
│
├── docs/                         # Dokumen PRD, Backlog, & Sprint Plan
│   ├── Sprint_Plan_LMS_PBL.md
│   └── Sprint_Plan_by_Epic.md
│
├── backend/                      # NestJS Modular Backend
│   ├── src/
│   │   ├── common/               # Guards, Decorators, Filters, DTOs
│   │   ├── config/               # App & Database Config
│   │   ├── database/             # Migrasi & Seeders MikroORM
│   │   └── modules/              # Modul domain (Auth, Users, Courses, Groups,
│   │                             # Milestones, Rubrics, Assessments, Grades, dll)
│   ├── mikro-orm.config.ts       # Konfigurasi MikroORM CLI
│   └── Dockerfile
│
├── frontend/                     # React + Vite + Tailwind Frontend
│   ├── src/
│   │   ├── components/           # Komponen UI Neobrutalism (Button, Badge, Card)
│   │   ├── layouts/              # Template layout peran
│   │   ├── pages/                # Halaman Dosen, Mahasiswa, Admin
│   │   └── index.css             # Design Tokens & Neobrutalism CSS
│   └── Dockerfile
│
├── docker-compose.yml            # Orkestrasi Docker (DB + Backend + Frontend)
├── .env.example                  # Template konfigurasi variabel lingkungan
└── README.md
```

---

## 📌 Status Pengerjaan Backlog
- ✅ **PB-01 (Sprint 1, Epic E00)**: Setup repositori, struktur folder modular, Docker compose, branching strategy `main/be/fe`, dan skeleton app responsif.
- ⏳ **PB-02 (Sprint 1, Epic E00)**: Perancangan skema basis data ERD & migrasi MikroORM.
