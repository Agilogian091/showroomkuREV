# Panduan Workflow Git & GitHub untuk Kelompok

## A. Sekali saja: pemilik repo (Anggota A)
1. Di GitHub: **New repository** > nama `showroomku` > jangan centang "Add a README" (kita punya sendiri).
2. Di komputer, dari folder `starter/`:
   ```bash
   git init
   git add .
   git commit -m "chore: setup struktur project awal"
   git branch -M main
   git remote add origin https://github.com/<username>/showroomku.git
   git push -u origin main
   ```
3. **Settings > Collaborators**: undang 3 anggota lain dan mentor/staf Catalyst (atau jadikan repo Public supaya bisa direview).
4. Buat Issues sesuai `docs/ISSUES.md`.

## B. Anggota lain: sekali saja
```bash
git clone https://github.com/<username-pemilik>/showroomku.git
cd showroomku
```

## C. Alur kerja tiap task (ulangi untuk setiap issue)
```bash
# 1. pastikan main terbaru
git checkout main
git pull origin main

# 2. buat branch sendiri
git checkout -b feature/navbar

# 3. kerjakan, lalu commit kecil dan jelas
git add index.html css/navbar-hero.css
git commit -m "feat: tambah struktur navbar"
git add js/main.js
git commit -m "feat: tambah toggle menu mobile"

# 4. push ke GitHub
git push -u origin feature/navbar
```
5. Di GitHub, klik **Compare & pull request**. Judul jelas, dan di deskripsi tulis `Closes #2` (nomor issue) supaya issue tertutup otomatis saat merge.
6. Minta review ke minimal satu anggota lain (**Reviewers** di kanan).

## D. Review (untuk reviewer)
1. Buka PR > tab **Files changed**.
2. Beri komentar di baris kode (klik tanda +) atau komentar umum.
3. Klik **Review changes** > pilih **Approve** atau **Request changes** > **Submit review**.
4. Cek juga secara lokal: `git fetch` lalu `git checkout feature/navbar` dan buka `index.html`.

## E. Merge
Setelah di-approve, klik **Merge pull request**. Lalu semua anggota:
```bash
git checkout main
git pull origin main
```
Aturan: `main` harus selalu bisa dijalankan.

## F. Format pesan commit
`feat:` fitur baru, `fix:` perbaikan, `style:` tampilan, `docs:` dokumentasi, `chore:` urusan teknis.
Contoh: `style: rapikan jarak antar kartu mobil`.

## G. Jika terjadi merge conflict
1. `git checkout feature/xxx` lalu `git pull origin main`.
2. Buka file yang bertanda `<<<<<<<`, `=======`, `>>>>>>>`, pilih isi yang benar, hapus tanda tersebut.
3. `git add <file>` > `git commit` > `git push`.
Karena CSS dipisah per section, konflik jarang terjadi. Konflik paling mungkin muncul di `index.html` dan `js/main.js`.

## H. Saran urutan pengerjaan agar tidak saling tunggu
1. A selesaikan setup (#1) dan push dulu.
2. B, C, D clone, lalu semua kerjakan section masing-masing secara paralel.
3. Review silang: A review B, B review C, C review D, D review A.
4. Terakhir README dan screenshot (#8), lalu cek daftar sebelum deadline di soal.
