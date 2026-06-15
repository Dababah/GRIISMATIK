---

# PRODUCT REQUIREMENT DOCUMENT (PRD)

## 1. Ringkasan Produk & Latar Belakang

* **Nama Produk:**  Bimbel Grismatik Batu Bara
* **Tujuan:** Mendigitalisasi seluruh operasional konvensional Bimbel Grismatik (Pendaftaran, Presensi, Billing, dan Distribusi Rapor Massal) ke dalam satu sistem web terintegrasi berbasis peran (*role-based*).
* **Target Pengguna:** Pemilik Bimbel (Super Admin), Tenaga Pengajar (Tutor), dan Orang Tua Murid.
* **Karakteristik Skala Bisnis:** < 100 Siswa Aktif, berlokasi di area Lintas Sumatera (Kec. Sei Suka, Kab. Batu Bara). Aplikasi harus dioptimasi agar sangat ringan (*lightweight UI*) untuk menghemat kuota dan mengantisipasi jaringan seluler yang tidak stabil.

---

## 2. Cakupan Fitur & Arsitektur Sistem

### A. Teknologi Utama (Tech Stack)

- **Framework:** Next.js (App Router, Server Components untuk optimasi kecepatan render halaman depan).
- **ORM:** Prisma ORM.
- **Database:** PostgreSQL / MySQL (Terhost di shared/cloud hosting Hostinger yang mendukung Node.js _standalone runtime_).
- **UI Component:** Tailwind CSS + Shadcn UI (Mengadopsi pola layout bersih ala _Edufio_).

### B. Matriks Hak Akses Pengguna (Role-Based Access Control)

Sistem dibagi menjadi 3 aktor utama dengan hak akses terisolasi (_Data Silo_):

1. **Super Admin (Owner / Admin Grismatik):** Hak kontrol mutlak (CRUD) untuk memverifikasi pembayaran, menambah/menghapus kelas, mengubah status kehadiran jika ada komplain, serta mengonfigurasi masa promo dinamis.
2. **Tutor (Guru):** Hak akses menginput data kehadiran, mengisi jurnal materi kelas harian, dan mengunggah rapor massal via berkas PDF.
3. **Parent (Orang Tua Murid):** Dasbor privat untuk melihat status tagihan bulanan, mengunggah bukti bayar, memantau riwayat presensi harian anak, serta mengunduh berkas rapor secara rapi.

---

## 3. Logika Fungsi & Alur Kerja Teknis (Core Modules)

### Module 1: Landing Page & Pendaftaran Pintar (Multi-Step Form)

- **Visual Identity:** Didominasi warna dasar logo (_Deep Blue_ `bg-[#0B3175]` dan aksen _Bright Gold_ `text-[#FBBF24]`).
- **Trust Banner Section:** Menampilkan nomor **Surat Izin Resmi Kursus Keterampilan** (`500.16.7.2/0002/IKK/DPM-PTSP/III/2026`) secara teks statis demi optimasi performa _loading_ dan index SEO Google di wilayah Batu Bara.
- **Formulir Multi-Step:**
- **Step 1 (Pilih Program):** Checklist dinamis berdasarkan program yang tersedia (Calistung, Matematika, Bahasa Inggris, Tambah Les Ngaji).
- **Step 2 (Pilih Jadwal):** Menampilkan gelombang jadwal kelas kelompok yang slotnya masih tersedia.
- **Step 3 (Biodata):** Pengisian data diri anak dan orang tua.

- **Logika Kalkulator Promo Dinamis (Backend):** Sistem mencocokkan tanggal submit formulir dengan variabel `promo_end_date` (Contoh: Batas Promo Gratis Pendaftaran). Jika valid, komponen biaya pendaftaran di-set otomatis menjadi Rp 0 pada entri tabel `Invoice`.
- **Sistem Registrasi Tanpa WA:** Akun dibuat menggunakan kombinasi _username_ unik atau email buatan orang tua yang bertindak sebagai basis _login credential_.

### Module 2: Skema Database Pelaporan Progres Dinamis

Untuk menghindari tabel kotor akibat perbedaan indikator penilaian anak Calistung (Checklist Huruf/Bunyi) dengan anak SMP/SMA (Nilai Angka), database dimatangkan menggunakan pola **Dynamic Key-Value Pair**.

- **Struktur Relasi Prisma (Logical Model):**
- `Student` memiliki field `level` bertipe Enum (`CALISTUNG`, `SD`, `SMP`, `SMA`).
- Saat pendaftaran disetujui, backend melakukan fungsi _auto-generate code_ untuk mencetak ID unik internal siswa (Format: `GSM-CAL-XXX` atau `GSM-AKA-XXX`).
- Tabel `ReportDetail` bertindak sebagai penampung data dinamis dengan struktur kolom: `studentId: String`, `key: String`, `value: String`.

- **Alur Penilaian di Sisi Frontend Tutor:**
- Jika `student.level === 'CALISTUNG'`, halaman input memuat field berbasis _capaian kompetensi_ (Contoh: Pengenalan Huruf & Bunyi $\rightarrow$ Value: "Lancar/Belum").
- Jika `student.level === 'SMP' / 'SMA'`, halaman input memuat field berbasis _angka akademik_ (Contoh: Quick Math Tricks $\rightarrow$ Value: "85").
- Jika siswa mengaktifkan paket modular `Les Ngaji`, komponen evaluasi tambahan (Tingkatan Bacaan Iqro/Al-Qur'an, Capaian Hafalan Surat Pendek) otomatis di-inject ke bagian bawah formulir penulisan progres tutor.

### Module 3: Robust Bulk Upload Rapor (Regex Parser)

Modul untuk memproses pengunggahan berkas rapor dalam jumlah banyak sekaligus oleh tutor guna meminimalisir kesalahan pengetikan nama manual di sistem.

- **Format Penamaan Berkas:** Tutor wajib menamai berkas PDF di laptop dengan format awalan ID unik internal siswa yang dihasilkan sistem di Module 2 (Contoh berkas: `GSM-CAL-001_Aziz.pdf`).
- **Logika Pemrosesan Backend:**

1. Tutor melakukan aksi _drag-and-drop_ seluruh berkas PDF kelas kelompok ke area unggah `/tutor/upload-rapor`.
2. Backend API Route Next.js menangkap _FormData_ dan mengeksekusi fungsi _String Splitting / Regex Parser_ untuk mencari kecocokan pola kode `GSM-XXX-XXX` pada nama berkas.
3. Sistem mencocokkan kode hasil ekstraksi ke kolom ID tabel `Student` di database.

- **Pre-Flight Validation (Frontend Safeguard):** Sebelum file disimpan ke direktori storage server, sistem wajib memunculkan tabel _preview validation_ ke hadapan tutor. Menampilkan berkas mana saja yang sukses terpasang ke nama anak, dan berkas mana yang gagal terdeteksi (akibat salah ketik format kode oleh tutor). Berkas yang sukses akan langsung dikunci di dasbor akun orang tua murid yang bersangkutan secara privat (_Silo Privacy_).

### Module 4: Pengelolaan State & Aliran Data

- **Optimasi Sisi Klien (Data Fetching):** Mengingat skala pengguna di bawah 100 anak, kita menghindari penggunaan WebSocket. Sinkronisasi data antara presensi harian tutor dengan halaman orang tua dioptimasi menggunakan pustaka **SWR / TanStack Query** berbasis mekanisme _lightweight polling_ atau `revalidateOnFocus`.
- **Penyegaran Cache (Data Stale):** Saat orang tua melakukan unggah foto bukti transfer manual, sistem mengeksekusi **Next.js Server Actions** untuk memicu fungsi `revalidatePath('/admin/keuangan')`. Skrip ini memaksa server menghapus cache data usang, sehingga laporan bukti masuk langsung ter-update di layar laptop admin saat itu juga tanpa perlu melakukan _refresh browser_ manual.
- **Client-Side File Restriction:** Komponen pembatas file dipasang di sisi frontend sebelum proses unggah berjalan. File PDF rapor atau foto bukti transfer dikunci pada batas maksimal ukuran **2MB**. Jika melampaui batas, proses unggah dihentikan secara prematur untuk menghemat _bandwidth_ server Hostinger.

---

## 4. Kriteria Keberhasilan Non-Fungsional (Non-Functional Requirements)

1. **Kecepatan Muat:** Halaman depan wajib memanfaatkan keunggulan _Server Components_ murni tanpa JavaScript berat dari pihak ketiga agar website dapat diakses dengan mulus di area minim sinyal sepanjang jalur lintas Sumatera.
2. **Kemanan Data Privasi:** Nilai rapor, catatan mengaji anak, dan data riwayat keuangan bersifat privat utuh. Tidak ada kebocoran visual data antar sesama akun orang tua murid.
3. **Data Integrity:** Semua aksi krusial (penghapusan data invoice, pengubahan status absen yang salah input) dilindungi oleh aturan enkripsi middleware Next.js yang hanya dapat ditembus oleh pengguna ber-role `SUPER_ADMIN`.

---

PRD ini sudah matang secara sistematis, logis, dan mencakup semua detail unik dari materi cetak Grismatik Batu Bara. Lembar panduan kerja ini sudah 100% siap digunakan sebagai acuan awal Mas Fawas mulai menulis kode di teks editor!
