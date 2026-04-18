# 📸 Image Management System

## Cara Mengubah Foto/Gambar

### Metode 1: Mengganti File Gambar (Paling Mudah)

1. **Siapkan gambar baru** (cth: extracted_1.jpg)
2. **Ganti file di folder root** - tinggal copy paste gambar baru dengan nama yang sama
3. **Reload browser** (Ctrl+R atau Cmd+R)
4. ✅ Gambar otomatis terupdate, kode tetap aman!

### Metode 2: Mengubah Nama & Deskripsi

1. Buka file `images.json`
2. Cari project yang ingin diubah
3. Update field:
   - `image`: nama file gambar (cth: `"extracted_1.jpg"`)
   - `title_id`: judul bahasa Indonesia
   - `title_en`: judul bahasa English
   - `description_id`: deskripsi bahasa Indonesia
   - `description_en`: deskripsi bahasa English
   - `meta1_id`: informasi tambahan (cth: "Ukuran: 10-20mm")
   - `meta1_en`: informasi tambahan English
   - `tag`: label/kategori project
4. Simpan file
5. Reload browser

### Contoh Struktur JSON

```json
{
  "id": 1,
  "image": "extracted_1.jpg",
  "alt": "Pasir Konstruksi",
  "tag": "Pasir",
  "title_id": "Pasir Konstruksi Berkualitas",
  "title_en": "Quality Construction Sand",
  "description_id": "Pasir bersih untuk beton berkualitas SNI",
  "description_en": "Clean sand for quality concrete",
  "meta1_id": "Stok: Tersedia",
  "meta1_en": "Stock: Available",
  "meta2": "Siap Kirim"
}
```

## Fitur Image Manager Panel

### Mengakses Panel Admin

Buka Browser Console (F12) dan jalankan:
```javascript
localStorage.setItem('imageManagerAuth','enabled')
```

Kemudian reload halaman. Panel akan muncul di kanan bawah.

### Fitur Panel

- 📸 Daftar semua gambar yang sedang digunakan
- ⚙️ Tombol "Edit images.json" untuk quick edit
- 📝 Instruksi lengkap di panel

---

## FAQ

### Q: Bagaimana jika saya ganti nama file gambar?

**A:** Update di `images.json` field `"image"`. Contoh:

Sebelum:
```json
"image": "extracted_1.jpg"
```

Sesudah:
```json
"image": "pasir_berkualitas.jpg"
```

### Q: Bisa menambah project baru?

**A:** Ya, copy salah satu object di array `"projects"`, paste di akhir, dan sesuaikan datanya.

### Q: Berapa banyak project bisa ditampilkan?

**A:** Tidak terbatas! Sistem otomatis adjust grid (3 kolom di desktop, responsive di mobile).

### Q: Apakah gambar lama akan hilang?

**A:** Tidak, kalau Anda tidak menghapus filenya. File bisa dihapus lewat file manager/FTP.

### Q: Apakah kode HTML akan error jika edit JSON?

**A:** Tidak! Sistem dimulai dari JSON, jadi kode HTML tidak pernah berubah.

---

## Checklist Keamanan

✅ Kode HTML tetap terlindungi  
✅ Tidak perlu mengedit HTML lagi  
✅ Gambar tidak perlu hardcoded  
✅ Bilingual support (ID/EN) otomatis  
✅ Responsive design tetap terjaga  

---

**🚀 Tip:** Simpan backup `images.json` sebelum membuat perubahan besar!
