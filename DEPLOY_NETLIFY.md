## 🚀 Deploy Netlify - Step by Step

### Opsi 1: Drag & Drop (PALING MUDAH)

1. Buka: https://app.netlify.com/drop
2. Login dengan GitHub (luzzzainstudio)
3. **Drag folder `weber` ke layar**
4. ✅ Website instant live!

---

### Opsi 2: Connect GitHub Repository (Otomatis Update)

1. Buka: https://app.netlify.com
2. Klik "Add new site" → "Import an existing project"
3. Pilih "GitHub" 
4. Authorize Netlify untuk akses GitHub
5. Pilih repository `mbm`
6. Pilih branch: `main`
7. Build settings: (biarkan kosong)
8. Deploy!

**Benefit**: Setiap kali push ke GitHub, website auto-deploy!

---

### Update Website (Setelah Deploy)

**Opsi A - Auto via GitHub:**
```bash
cd /Users/mbm/Documents/weber
# Edit file apapun
git add .
git commit -m "Update konten"
# Fix push issue atau manual push
# Netlify akan auto-deploy!
```

**Opsi B - Netlify CLI (Paling Mudah):**
```bash
npm install -g netlify-cli
cd /Users/mbm/Documents/weber
netlify login  # Login dengan browser
netlify deploy # Deploy sekarang
netlify deploy --prod  # Deploy ke production
```

---

### Website URL

- Drag & Drop: `random-name-123456.netlify.app`
- Custom domain: Setting di Netlify Dashboard

---

**✅ Rekomendasi: Gunakan Opsi 1 (Drag & Drop) dulu untuk test, kemudian upgrade ke Opsi 2 (GitHub) untuk auto-deploy!**
