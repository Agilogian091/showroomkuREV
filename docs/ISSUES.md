# Daftar Issues SHOWROOMKU (siap salin ke GitHub)

Rekomendasi untuk kelompok 4 orang: 8 issue, tiap orang pegang 2 issue. Kalau kelompok 3 orang, gabungkan #7 dan #8 ke anggota lain.
Tambahkan label `feature`, `docs`, atau `bug` supaya rapi. Tulis nama assignee di tiap issue.

| # | Judul issue | Branch | Pemegang |
|---|-------------|--------|----------|
| 1 | Setup struktur project dan README awal | `chore/project-setup` | Anggota A (pemilik repo) |
| 2 | Buat navbar dan menu responsif | `feature/navbar` | Anggota A |
| 3 | Buat hero section | `feature/hero` | Anggota B |
| 4 | Buat section About / Profile | `feature/about` | Anggota B |
| 5 | Buat katalog mobil (kartu mobil) | `feature/catalog` | Anggota C |
| 6 | Tambah filter tipe mobil dengan JavaScript | `feature/catalog-filter` | Anggota C |
| 7 | Buat section kontak dan formulir | `feature/contact` | Anggota D |
| 8 | Buat footer, lalu lengkapi README dan screenshot | `feature/footer`, `docs/readme-screenshots` | Anggota D |

---

## Isi tiap issue (salin ke kolom deskripsi)

### #1 Setup struktur project dan README awal
**Tujuan:** menyiapkan kerangka project supaya anggota lain bisa mulai bekerja.
**Checklist:**
- [ ] Folder `css/`, `js/`, `images/`, `screenshots/`, `docs/`
- [ ] `index.html` kerangka dengan penanda tiap section
- [ ] File CSS per section (`base`, `navbar-hero`, `about`, `catalog`, `contact-footer`)
- [ ] `README.md` awal dan `.gitignore`

### #2 Buat navbar dan menu responsif
**Tujuan:** pengguna bisa berpindah antarseksi.
**Checklist:**
- [ ] Logo SHOWROOMKU dan 4 tautan (Beranda, Tentang Kami, Katalog, Kontak)
- [ ] Navbar menempel di atas saat scroll
- [ ] Tombol menu (hamburger) di layar kecil dengan JavaScript
**File:** `index.html`, `css/navbar-hero.css`, `js/main.js`

### #3 Buat hero section
**Tujuan:** kesan pertama yang jelas tentang SHOWROOMKU.
**Checklist:**
- [ ] Judul, deskripsi singkat, dan dua tombol (Lihat katalog, Jadwalkan kunjungan)
- [ ] Ilustrasi atau foto mobil
- [ ] Tampilan rapi di ponsel
**File:** `index.html`, `css/navbar-hero.css`

### #4 Buat section About / Profile
**Checklist:**
- [ ] Latar belakang showroom
- [ ] Visi dan misi
- [ ] 3 nilai layanan
**File:** `index.html`, `css/about.css`

### #5 Buat katalog mobil (kartu mobil)
**Checklist:**
- [ ] Minimal 6 kartu mobil (nama, tipe, tahun, harga)
- [ ] Grid responsif
**File:** `index.html`, `css/catalog.css`

### #6 Tambah filter tipe mobil dengan JavaScript
**Checklist:**
- [ ] Tombol filter: Semua, Sedan, SUV, MPV, Hatchback
- [ ] Kartu yang tidak cocok disembunyikan
- [ ] Pesan jika hasil kosong
**File:** `js/main.js`, `index.html`

### #7 Buat section kontak dan formulir
**Checklist:**
- [ ] Alamat, jam buka, telepon, media sosial
- [ ] Formulir (nama, minat, pesan) yang membuka WhatsApp
**File:** `index.html`, `css/contact-footer.css`, `js/main.js`

### #8 Buat footer, lengkapi README dan screenshot
**Checklist:**
- [ ] Footer dengan tautan dan hak cipta
- [ ] Isi nama anggota, username, dan ringkasan kontribusi di README
- [ ] Screenshot halaman utama dan section penting di `screenshots/`

---

## Opsi cepat: buat issue lewat GitHub CLI
Jika sudah install `gh` dan login (`gh auth login`), jalankan dari folder repo:
```bash
gh issue create --title "Setup struktur project dan README awal" --body "Lihat docs/ISSUES.md #1"
gh issue create --title "Buat navbar dan menu responsif" --body "Lihat docs/ISSUES.md #2"
# ...dan seterusnya. Menambah assignee: --assignee username
```
Cara manual lewat web juga cukup: tab **Issues** > **New issue**.
