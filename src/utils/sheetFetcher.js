import Papa from 'papaparse'

/**
 * === CARA MENDAPATKAN URL INI ===
 * 1. Buka Google Sheets Anda.
 * 2. File → Share → Publish to web.
 * 3. Pada tab "Link", pilih sheet spesifik (misal "Skills" atau "Projects"),
 *    lalu pilih format "Comma-separated values (.csv)".
 * 4. Klik "Publish", salin URL yang dihasilkan ke variabel di bawah.
 *
 * URL di bawah ini adalah DUMMY — ganti dengan URL asli dari sheet Anda.
 * Setiap sheet/tab butuh URL publish terpisah.
 */
export const SHEET_URLS = {
  skills:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYixwy6r30kgV7BHjKnU-CtOyfEFDtYN-My8A02x2sck3paLkQZPZSRWdkdCnKjaLF9lLQCAMV4DMa/pub?gid=1093106571&single=true&output=csv',
  projects:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYixwy6r30kgV7BHjKnU-CtOyfEFDtYN-My8A02x2sck3paLkQZPZSRWdkdCnKjaLF9lLQCAMV4DMa/pub?gid=0&single=true&output=csv'
  // publications:
  //   'https://docs.google.com/spreadsheets/d/e/2PACX-1vDUMMY_PUBLICATIONS_SHEET_ID/pub?gid=987654321&single=true&output=csv',
}

/**
 * Mengambil CSV dari URL "Publish to web" Google Sheets dan mem-parsingnya
 * menjadi array of objects, dengan baris header sebagai key.
 *
 * @param {string} url - URL CSV hasil publish Google Sheets.
 * @returns {Promise<Array<Object>>}
 */
export async function fetchSheetData(url) {
  const response = await fetch(url, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil data sheet (status ${response.status}). Pastikan sheet sudah di-publish ke web sebagai CSV.`,
    )
  }

  const csvText = await response.text()

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
      transform: (value) => (typeof value === 'string' ? value.trim() : value),
      complete: (results) => {
        if (results.errors?.length) {
          // PapaParse melaporkan error per-baris; kita tetap resolve
          // selama ada data yang berhasil di-parse, tapi catat di console.
          console.warn('PapaParse warnings:', results.errors)
        }
        resolve(results.data)
      },
      error: (err) => reject(err),
    })
  })
}

/**
 * Fallback manual (tanpa PapaParse) — berguna sebagai referensi jika Anda
 * tidak ingin menambah dependency. Tidak menangani koma di dalam quoted
 * string se-robust PapaParse, jadi hanya disarankan untuk data sederhana.
 */
export function parseCsvManual(csvText) {
  const [headerLine, ...lines] = csvText.trim().split('\n')
  const headers = headerLine.split(',').map((h) => h.trim())

  return lines
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const values = line.split(',').map((v) => v.trim())
      return headers.reduce((row, key, i) => {
        row[key] = values[i] ?? ''
        return row
      }, {})
    })
}
