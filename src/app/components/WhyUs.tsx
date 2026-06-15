import { ShieldCheck, Users, Clock, Star, BookOpen, Wifi } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Legal & Berizin Resmi",
    description: "Terdaftar resmi di DPM-PTSP Kab. Batu Bara sejak Maret 2026. Bukan bimbel abal-abal.",
  },
  {
    icon: Users,
    title: "Kelas Kecil & Personal",
    description: "Jumlah siswa terbatas per kelas agar setiap anak mendapat perhatian penuh dari tutor.",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Beragam gelombang jadwal kelas untuk menyesuaikan aktivitas sekolah anak.",
  },
  {
    icon: Star,
    title: "Tutor Berpengalaman",
    description: "Pengajar terlatih yang memahami karakteristik belajar tiap anak secara individual.",
  },
  {
    icon: BookOpen,
    title: "Rapor Progres Digital",
    description: "Orang tua dapat memantau perkembangan belajar dan mengunduh rapor kapan saja.",
  },
  {
    icon: Wifi,
    title: "Sistem Ringan & Cepat",
    description: "Aplikasi dioptimasi untuk jaringan seluler yang tidak stabil di wilayah Batu Bara.",
  },
];

export function WhyUs() {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual block */}
          <div className="relative">
            <div
              className="rounded-3xl p-8"
              style={{ background: "linear-gradient(135deg, #0B3175 0%, #1a56c4 100%)" }}
            >
              <div
                className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl opacity-20"
                style={{ background: "#FBBF24" }}
              />
              <p
                className="text-[#FBBF24] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                SURAT IZIN RESMI
              </p>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1.3 }}
              >
                Terpercaya, Legal, dan Berlisensi
              </h3>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p
                  className="text-white/60 mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 500 }}
                >
                  Nomor Izin Kursus &amp; Keterampilan
                </p>
                <p
                  className="text-[#FBBF24] break-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                >
                  500.16.7.2/0002/IKK/DPM-PTSP/III/2026
                </p>
                <p
                  className="text-white/50 mt-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem" }}
                >
                  Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Batu Bara — Maret 2026
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Terdaftar Resmi", sub: "DPM-PTSP Batu Bara" },
                  { label: "Legal & Amanah", sub: "Izin Operasional" },
                  { label: "Berdedikasi", sub: "Untuk Generasi Cerdas" },
                  { label: "Lokal & Dekat", sub: "Kec. Sei Suka" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-3">
                    <p
                      className="text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-white/50"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem" }}
                    >
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full bg-[#0B3175]/10 text-[#0B3175] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em" }}
            >
              MENGAPA GRISMATIK?
            </span>
            <h2
              className="text-[#0B3175] mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
            >
              Bimbel yang Benar-Benar Peduli Masa Depan Anak Anda
            </h2>

            <div className="space-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B3175]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#0B3175]" />
                    </div>
                    <div>
                      <p
                        className="text-[#0B3175]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                      >
                        {f.title}
                      </p>
                      <p
                        className="text-[#4a6098]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.85rem", lineHeight: 1.6 }}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
