# Portofolio — Full-Stack & Computer Vision Engineer

React + React Router v6, styling Tailwind CSS, konten dinamis dari Google Sheets (CSV).

## Menjalankan proyek

```bash
npm install
npm run dev
```

## Panduan Setup Google Sheets sebagai CMS

### 1. Buat Google Sheet dengan 2 tab (atau 2 spreadsheet terpisah)

**Sheet "Skills"** — kolom baris pertama harus PERSIS seperti ini:

| Kategori | Skill |
|---|---|
| Web Dev | ReactJS |
| Web Dev | Laravel |
| Data & AI | Python |
| Data & AI | Random Forest |
| Data & AI | Vision Transformer (ViT) |
| Data & AI | NLP |
| Tools | Git |

**Sheet "Projects"** — kolom baris pertama harus PERSIS seperti ini:

| ID | Judul | Kategori | Deskripsi Singkat | Tech Stack | Github Link | Konten Detail |
|---|---|---|---|---|---|---|
| 1 | Analisis Sentimen Keuangan dengan Random Forest | Data Science | Klasifikasi sentimen berita keuangan... | Python, Scikit-learn, Pandas | https://github.com/... | `<p>Studi kasus lengkap...</p>` |
| 2 | Deteksi Objek Bounding Box pada X-Ray Medis | Computer Vision | EDA dan deteksi objek dengan Grad-CAM... | Python, PyTorch, OpenCV | https://github.com/... | `<p>...</p>` |
| 3 | Full-Stack Web App + Model ML | Full-Stack | Aplikasi web yang mengintegrasikan model ML... | React, Laravel, FastAPI | https://github.com/... | `<p>...</p>` |

Catatan penting:
- Nama kolom **case-sensitive** dan harus sama persis dengan kode (`Kategori`, `Skill`, `ID`, `Judul`, `Deskripsi Singkat`, `Tech Stack`, `Github Link`, `Konten Detail`).
- Kolom **Tech Stack** dipisahkan dengan koma, misal: `Python, PyTorch, OpenCV`.
- Kolom **Konten Detail** boleh diisi HTML dasar (`<p>`, `<h3>`, `<ul><li>`, `<img src="...">`) untuk tampilan halaman studi kasus.
- Kolom **ID** harus unik dan berupa angka — dipakai di URL `/project/1`, `/project/2`, dst.

### 2. Publish to Web sebagai CSV

Untuk masing-masing sheet (Skills dan Projects):

1. Buka **File → Share → Publish to web**.
2. Pilih sheet yang sesuai (bukan "Entire Document") pada dropdown pertama.
3. Pilih format **Comma-separated values (.csv)** pada dropdown kedua.
4. Klik **Publish**, lalu salin URL yang muncul.
5. Tempel URL tersebut ke `src/utils/sheetFetcher.js`, pada objek `SHEET_URLS`:

```js
export const SHEET_URLS = {
  skills: 'https://docs.google.com/spreadsheets/d/e/xxxxx/pub?gid=0&single=true&output=csv',
  projects: 'https://docs.google.com/spreadsheets/d/e/yyyyy/pub?gid=123456&single=true&output=csv',
}
```

Setiap kali kamu mengedit sheet dan menyimpan, data di website akan otomatis ikut berubah pada kunjungan/refresh berikutnya (Google butuh beberapa menit untuk sinkronisasi cache publikasinya).

## Struktur Direktori

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    ProjectsGrid.jsx
    Publications.jsx
    Contact.jsx
  pages/
    HomePage.jsx
    ProjectDetailPage.jsx
  utils/
    sheetFetcher.js     # fetch + parse CSV (PapaParse)
    useSheetData.js      # custom hook: data / isLoading / isError
  App.jsx
  main.jsx
  index.css
```
