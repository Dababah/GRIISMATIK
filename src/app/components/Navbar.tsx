import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/logo.jpg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Program", href: "#program" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Jadwal", href: "#jadwal" },
    { label: "Daftar", href: "#daftar" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B3175] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo Bimbel Grismatik" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#FBBF24]" />
          <div className="leading-tight">
            <p className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>Bimbel</p>
            <p className="text-[#FBBF24]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1 }}>Grismatik</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-white/80 hover:text-[#FBBF24] transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#daftar"
              className="px-4 py-2 rounded-lg bg-[#FBBF24] text-[#0B3175] hover:bg-yellow-300 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem" }}
            >
              Daftar Sekarang
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0B3175] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-[#FBBF24] border-b border-white/10 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#daftar"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-4 py-2 rounded-lg bg-[#FBBF24] text-[#0B3175] transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
