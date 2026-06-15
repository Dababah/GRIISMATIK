import { BookOpen, Calculator, Globe, Moon } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Calistung",
    subtitle: "Baca, Tulis & Hitung",
    description: "Program fondasi untuk anak usia dini. Membangun kemampuan membaca, menulis, dan berhitung dengan metode yang menyenangkan dan bertahap.",
    tag: "TK – SD Awal",
    color: "#1a56c4",
  },
  {
    icon: Calculator,
    title: "Matematika",
    subtitle: "SD hingga SMA",
    description: "Penguatan konsep matematika dari aritmatika dasar hingga aljabar lanjutan. Termasuk tips & trik Quick Math untuk persiapan ujian.",
    tag: "SD – SMA",
    color: "#0B3175",
  },
  {
    icon: Globe,
    title: "Bahasa Inggris",
    subtitle: "Komunikasi & Akademik",
    description: "Penguasaan tata bahasa, kosakata, dan percakapan. Dirancang untuk meningkatkan nilai ujian sekaligus kepercayaan diri berbicara.",
    tag: "SD – SMA",
    color: "#1a56c4",
  },
  {
    icon: Moon,
    title: "Les Ngaji",
    subtitle: "Iqro & Al-Qur'an",
    description: "Bimbingan membaca Iqro' hingga Al-Qur'an dengan tajwid yang benar. Dilengkapi capaian hafalan surat-surat pendek pilihan.",
    tag: "Semua Usia",
    color: "#0B3175",
  },
];

export function Programs() {
  return (
    <section id="program" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full bg-[#0B3175]/10 text-[#0B3175] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em" }}
          >
            PROGRAM UNGGULAN
          </span>
          <h2
            className="text-[#0B3175]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            Apa yang Kami Ajarkan
          </h2>
          <p
            className="mt-3 text-[#4a6098] max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Empat program terstruktur yang disesuaikan dengan kebutuhan dan tingkat usia siswa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-[#0B3175]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#FBBF24]" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: p.color }}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <span
                  className="inline-block px-2 py-0.5 rounded-full bg-[#FBBF24]/20 text-[#0B3175] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.65rem" }}
                >
                  {p.tag}
                </span>

                <h3
                  className="text-[#0B3175] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#FBBF24]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
                >
                  {p.subtitle}
                </p>
                <p
                  className="mt-3 text-[#4a6098]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.85rem", lineHeight: 1.65 }}
                >
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
