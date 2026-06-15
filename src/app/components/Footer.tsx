import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logoImg from "../../imports/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-[#080f2a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt="Logo Bimbel Grismatik" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#FBBF24]/60" />
            <div>
              <p className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>Bimbel</p>
              <p className="text-[#FBBF24]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>Grismatik</p>
            </div>
          </div>
          <p className="text-white/50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", lineHeight: 1.7 }}>
            Bimbingan belajar terpercaya di Batu Bara, Sumatera Utara. Resmi berizin, amanah, dan berdedikasi untuk generasi yang lebih cerdas.
          </p>

          <div className="mt-4 bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.65rem", fontWeight: 500 }}>IZIN OPERASIONAL</p>
            <p className="text-[#FBBF24] break-all mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.72rem" }}>
              No. 500.16.7.2/0002/IKK/DPM-PTSP/III/2026
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#FBBF24] mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            KONTAK & LOKASI
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-[#FBBF24] shrink-0 mt-0.5" />
              <p className="text-white/60" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.83rem", lineHeight: 1.6 }}>
                Gang Muhsin, Depan SPBU Simpang Bandar Tinggi,<br />Kec. Sei Suka, Kab. Batu Bara,<br />Sumatera Utara
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-[#FBBF24] shrink-0" />
              <p className="text-white/60" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.83rem" }}>
                Hubungi via media sosial
              </p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="text-[#FBBF24] mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            MEDIA SOSIAL
          </p>
          <div className="space-y-3">
            {[
              { icon: Facebook, label: "Grismatika Batu Bara", handle: "@GrismatikaBatuBara", color: "#1877f2" },
              { icon: Instagram, label: "Instagram", handle: "@bimbel_grismatik", color: "#e1306c" },
              {
                icon: () => (
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.03-.08z" />
                  </svg>
                ),
                label: "TikTok",
                handle: "@grismatik_batubara",
                color: "#000",
              },
            ].map((s) => {
              const Icon = s.icon as React.FC<{ size?: number }>;
              return (
                <div key={s.handle} className="flex items-center gap-3 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ background: s.color === "#000" ? "linear-gradient(45deg,#69C9D0,#EE1D52,#010101)" : s.color }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.68rem" }}>{s.label}</p>
                    <p className="text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}>{s.handle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem" }}>
            © 2026 Bimbel Grismatik Batu Bara. Semua hak dilindungi.
          </p>
          <p className="text-white/30" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem" }}>
            Dibangun untuk generasi Batu Bara yang lebih cerdas.
          </p>
        </div>
      </div>
    </footer>
  );
}
