# CV. MAISAN BINTANG MUDA - Website

Website resmi CV. Maisan Bintang Muda - Kontraktor Pondasi Jalan & Supplier Material.

## 📋 Informasi

- **Perusahaan**: CV. Maisan Bintang Muda
- **Bidang**: Kontraktor Pondasi Jalan, Supplier Material Konstruksi
- **Lokasi**: Cikarang Pusat, Bekasi, Indonesia
- **Kontak**: 
  - HP: 0813-1157-8023
  - WA: 0822-1385-3865
  - Email: maisan.bintangmuda@gmail.com

## 🌐 Live Website

**GitHub Pages**: https://yourusername.github.io/weber/  
**Custom Domain**: (set di GitHub Pages settings)

## 📂 Struktur File

```
weber/
├── index.html          # Halaman utama
├── img/               # Folder gambar
│   ├── hero.jpg
│   ├── project1-jalan.jpg
│   ├── project2-limestone.jpg
│   ├── project3-pemeliharaan.jpg
│   ├── project4-basecourse.jpg
│   ├── project5-aspal.jpg
│   ├── project6-supplier.jpg
│   └── about.jpg
├── LICENSE            # Lisensi proprietary
├── README.md          # File ini
└── .gitignore         # Git ignore file
```

## 🚀 Cara Deploy & Update

### 1. Setup Awal (Sekali Saja)

#### Step 1: Buat GitHub Account
- Buka https://github.com/signup
- Buat akun dengan email

#### Step 2: Buat Repository Baru
- Login ke GitHub
- Klik "+" → "New repository"
- Nama: `weber` atau `maisanbintangmuda.github.io`
- Pilih "Public"
- Klik "Create repository"

#### Step 3: Setup di Komputer Lokal
```bash
cd /Users/mbm/Documents/weber

# Inisialisasi git
git init
git add .
git commit -m "Initial commit - CV Maisan Bintang Muda website"

# Hubungkan ke GitHub (ganti USERNAME dengan username GitHub Anda)
git branch -M main
git remote add origin https://github.com/USERNAME/weber.git
git push -u origin main
```

#### Step 4: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Pilih Branch: **main**
4. Pilih folder: **/ (root)**
5. Klik **Save**
6. Tunggu ~ 1-2 menit, website akan live di: `https://USERNAME.github.io/weber/`

---

### 2. Update Website (Setiap Kali Ada Perubahan)

**Cara mudah via terminal:**

```bash
cd /Users/mbm/Documents/weber

# Edit file sesuai kebutuhan (misal index.html, gambar, dll)

# Setelah selesai edit, jalankan:
git add .
git commit -m "Update: deskripsi perubahan Anda"
git push
```

**GitHub Pages akan auto-deploy dalam 1-2 menit! ✅**

---

### 3. Update dari VS Code

1. Buka folder `weber` di VS Code
2. Klik Source Control (ikon git di sidebar)
3. Lihat file yang berubah
4. Klik `+` untuk stage semua file
5. Tulis message di atas, misal: "Update kontak & layanan"
6. Klik Commit & Push

---

## 📝 Contoh Update

**Update nomor kontak:**
```bash
# Edit index.html
# Ubah nomor: 0822-1385-3865 → 0822-XXXX-XXXX

git add index.html
git commit -m "Update nomor kontak WhatsApp"
git push
```

**Tambah gambar baru:**
```bash
# Copy gambar ke folder img/

git add img/project7-baru.jpg
git commit -m "Tambah foto proyek terbaru"
git push
```

---

## 🔧 Custom Domain (Optional)

Jika Anda punya domain sendiri (misal: www.maisanbintangmuda.com):

1. GitHub Pages Settings → Custom domain
2. Masukkan domain Anda
3. Update DNS records di registrar domain (pointing ke GitHub Pages)
4. Selesai! 🎉

---

## 🛡️ Perlindungan Konten

Website sudah dilindungi dengan:
- ✅ Copyright notice di code
- ✅ Disable right-click & text selection
- ✅ Developer tools blocker
- ✅ LICENSE file (proprietary)
- ✅ Meta tags untuk SEO

---

## 📊 Monitoring

Untuk melihat status deployment:
1. Buka repository di GitHub
2. Klik tab "Actions"
3. Lihat status push & deployment
4. Klik untuk detail error (jika ada)

---

## ❓ FAQ

**P: Berapa lama update muncul di website?**  
J: 1-3 menit setelah push

**P: Gimana kalau salah push?**  
J: Bisa revert ke versi sebelumnya (lihat GitHub commit history)

**P: Bisa pakai git GUI tanpa terminal?**  
J: Ya, pakai GitHub Desktop (https://desktop.github.com/) atau GitKraken

**P: Storage ada batasan?**  
J: GitHub Pages: 1GB per site (cukup untuk ini)

---

## 🆘 Troubleshooting

**Website tidak muncul setelah push:**
- Tunggu 2-3 menit
- Clear browser cache (Ctrl+Shift+Delete)
- Check "Actions" tab di GitHub untuk error

**Image tidak muncul:**
- Pastikan path gambar benar di HTML
- Pastikan gambar sudah `git add` & `git push`

---

## 📞 Kontak & Support

Untuk bantuan lebih lanjut:
- GitHub Docs: https://docs.github.com/pages
- GitHub Support: https://support.github.com

---

**Last Updated**: 16 April 2026  
**License**: Proprietary - CV. Maisan Bintang Muda © 2026
