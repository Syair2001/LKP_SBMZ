# 🌟 LKP SBMZ - Website Resmi 🌐

![Next.js](https://img.shields.io/badge/Next.js-13+-000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-^3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![ShadCN UI](https://img.shields.io/badge/shadcn/ui-%23FFDD57?style=for-the-badge&logo=react&logoColor=black)

> Website resmi Lembaga Kursus & Pelatihan **SBMZ** – Fokus pada pendidikan nonformal dan pelatihan berbasis teknologi yang berlokasi di Kabupaten Barru, Sulawesi Selatan.

---

## 🚀 Fitur Utama

✨ **Desain Modern** – Dengan bantuan `TailwindCSS` & `shadcn/ui`  
🧠 **Struktur Komponen Modular** – Mudah dikembangkan & dipelihara  
📱 **Responsif** – Tersedia tampilan mobile & desktop  
📚 **Section Informatif**:
- Hero Section
- Tentang Kami
- Program
- Visi Misi
- Para Tentor
- Testimoni
- FAQ
- Footer interaktif

---

## 📁 Struktur Folder

WEB_LKP/
├── app/
│   ├── components/                # Semua komponen utama website
│   │   ├── AboutSection.tsx          # Tentang Kami
│   │   ├── FAQSection.tsx            # FAQ interaktif
│   │   ├── Footer.tsx                # Footer dengan kontak & sosmed
│   │   ├── HeroSection.tsx           # Bagian atas halaman
│   │   ├── Navbar.tsx                # Navigasi utama
│   │   ├── Program_Section.tsx       # Program yang ditawarkan
│   │   ├── TensorSection.tsx         # (Sementara) Placeholder / tambahan
│   │   ├── TestimoniSection.tsx      # Ulasan dari siswa
│   │   └── VisiMisiSection.tsx       # Visi & Misi LKP
│
│   ├── globals.css               # Global style dengan Tailwind
│   ├── layout.tsx               # Layout root untuk Next.js App Router
│   └── page.tsx                 # Halaman utama website
│
├── public/
│   ├── logo.png                 # Logo LKP
│   ├── foto1.jpg                # Gambar ilustrasi kegiatan
│   └── profil.jpg               # Gambar profil tim / testimoni
│
├── tailwind.config.ts          # Konfigurasi TailwindCSS
├── next.config.ts              # Konfigurasi Next.js
├── package.json                # Dependency & script proyek
└── README.md                   # Dokumentasi proyek
