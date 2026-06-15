import { ChevronDown, Award, MapPin } from "lucide-react";
import logoImg from "../../imports/logo.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B3175 0%, #0d3d93 60%, #1a4fa8 100%)",
      }}>
      {/* Decorative gold rings */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10"
        style={{ border: "40px solid #FBBF24" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10"
        style={{ border: "30px solid #FBBF24" }}
      />
      <div className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-[#FBBF24] opacity-60" />
      <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-[#FBBF24] opacity-40" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="order-2 md:order-1">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#FBBF24]/30 mb-6">
            <Award size={14} className="text-[#FBBF24]" />
            <span
              className="text-[#FBBF24] text-xs"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
              }}>
              Resmi Berizin — No. 500.16.7.2/0002/IKK/DPM-PTSP/III/2026
            </span>
          </div>

          <h1
            className="text-white mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.15,
            }}>
            Belajar Lebih Cerdas,
            <br />
            <span className="text-[#FBBF24]">Masa Depan Lebih Cerah</span>
          </h1>

          <p
            className="text-white/75 mb-8 max-w-md"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.7,
            }}>
            Bimbingan belajar terpercaya di Batu Bara, Sumatera Utara — melayani
            program Calistung, Matematika, Bahasa Inggris, hingga Les Ngaji
            dalam suasana yang nyaman dan menyenangkan.
          </p>

          {/* Location badge */}
          <div className="flex items-start gap-2 mb-8 text-white/60">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[#FBBF24]" />
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.875rem",
              }}>
              Gang Muhsin, Depan SPBU Simpang Bandar Tinggi, Kec. Sei Suka, Kab.
              Batu Bara
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#daftar"
              className="px-6 py-3 rounded-xl bg-[#FBBF24] text-[#0B3175] hover:bg-yellow-300 transition-colors shadow-lg"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}>
              Daftar Sekarang — Gratis!
            </a>
            <a
              href="#program"
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}>
              Lihat Program
            </a>
          </div>
        </div>

        {/* Logo side */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: "#FBBF24", transform: "scale(1.2)" }}
            />
            <img
              src={logoImg}
              alt="Logo Bimbel Grismatik"
              className="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-2xl ring-4 ring-[#FBBF24]/60"
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative max-w-6xl mx-auto px-4 pb-10 w-full">
        <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
          {[
            { value: "+ 100", label: "Siswa Aktif" },
            { value: "4", label: "Program Unggulan" },
            { value: "2026", label: "Izin Resmi Terbit" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-[#FBBF24]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}>
                {s.value}
              </p>
              <p
                className="text-white/70"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
