import { useState } from "react";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const programs = [
  { id: "calistung", label: "Calistung", sub: "Baca, Tulis & Hitung" },
  { id: "matematika", label: "Matematika", sub: "SD / SMP / SMA" },
  { id: "english", label: "Bahasa Inggris", sub: "SD / SMP / SMA" },
  { id: "ngaji", label: "Les Ngaji", sub: "Iqro & Al-Qur'an" },
];

const scheduleOptions = [
  { id: "g1", label: "Gelombang 1 — 07.30–09.00 (Senin, Rabu, Jumat)" },
  { id: "g2", label: "Gelombang 2 — 10.00–11.30 (Selasa, Kamis, Sabtu)" },
  { id: "g3", label: "Gelombang 3 — 13.00–14.30 (Senin, Rabu, Jumat)" },
  { id: "g4", label: "Gelombang 4 — 15.30–17.00 (Selasa, Kamis, Sabtu)" },
];

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    childLevel: "",
    parentName: "",
    phone: "",
    username: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleProgram = (id: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="daftar" className="py-20" style={{ background: "#0B3175" }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <CheckCircle2 size={64} className="text-[#FBBF24] mx-auto mb-6" />
          <h2
            className="text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "2rem" }}
          >
            Pendaftaran Terkirim!
          </h2>
          <p
            className="text-white/70 mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Terima kasih, <strong className="text-white">{form.parentName}</strong>. Data pendaftaran putra/putri Anda telah kami terima. Tim Grismatik akan segera menghubungi Anda untuk konfirmasi.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setSelectedPrograms([]); setSelectedSchedule(""); setForm({ childName: "", childAge: "", childLevel: "", parentName: "", phone: "", username: "" }); }}
            className="px-6 py-3 rounded-xl bg-[#FBBF24] text-[#0B3175] hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
          >
            Daftar Lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="daftar" className="py-20" style={{ background: "#0B3175" }}>
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-3 py-1 rounded-full bg-[#FBBF24]/20 text-[#FBBF24] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em" }}
          >
            PENDAFTARAN ONLINE
          </span>
          <h2
            className="text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
          >
            Daftar Sekarang — Gratis!
          </h2>
          <p
            className="mt-2 text-white/60"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem" }}
          >
            Promo biaya pendaftaran Rp 0 untuk periode ini.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  background: step >= s ? "#FBBF24" : "rgba(255,255,255,0.15)",
                  color: step >= s ? "#0B3175" : "rgba(255,255,255,0.5)",
                }}
              >
                {s}
              </div>
              {s < 3 && <div className="w-10 h-px bg-white/20" />}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-20 mb-8">
          {["Pilih Program", "Pilih Jadwal", "Data Diri"].map((label, i) => (
            <span
              key={label}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: step === i + 1 ? 700 : 400,
                fontSize: "0.72rem",
                color: step === i + 1 ? "#FBBF24" : "rgba(255,255,255,0.4)",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3
                className="text-[#0B3175] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                Pilih Program Belajar
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {programs.map((p) => {
                  const active = selectedPrograms.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => toggleProgram(p.id)}
                      className="text-left px-4 py-4 rounded-xl border-2 transition-all"
                      style={{
                        borderColor: active ? "#0B3175" : "#e2e8f0",
                        background: active ? "#0B3175" : "#fff",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: active ? "#FBBF24" : "#0B3175",
                        }}
                      >
                        {p.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.78rem",
                          color: active ? "rgba(255,255,255,0.7)" : "#4a6098",
                        }}
                      >
                        {p.sub}
                      </p>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={selectedPrograms.length === 0}
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  background: selectedPrograms.length > 0 ? "#0B3175" : "#e2e8f0",
                  color: selectedPrograms.length > 0 ? "#FBBF24" : "#94a3b8",
                  cursor: selectedPrograms.length === 0 ? "not-allowed" : "pointer",
                }}
              >
                Lanjut <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3
                className="text-[#0B3175] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                Pilih Jadwal Kelas
              </h3>
              <div className="space-y-3 mb-8">
                {scheduleOptions.map((s) => {
                  const active = selectedSchedule === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSchedule(s.id)}
                      className="w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all"
                      style={{
                        borderColor: active ? "#0B3175" : "#e2e8f0",
                        background: active ? "#0B3175" : "#fff",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: active ? "#FBBF24" : "#0B3175",
                        }}
                      >
                        {s.label}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl border-2 border-[#0B3175] text-[#0B3175] flex items-center justify-center gap-2 hover:bg-[#0B3175]/5 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  <ChevronLeft size={18} /> Kembali
                </button>
                <button
                  type="button"
                  disabled={!selectedSchedule}
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    background: selectedSchedule ? "#0B3175" : "#e2e8f0",
                    color: selectedSchedule ? "#FBBF24" : "#94a3b8",
                    cursor: !selectedSchedule ? "not-allowed" : "pointer",
                  }}
                >
                  Lanjut <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h3
                className="text-[#0B3175] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                Data Diri Siswa & Orang Tua
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                    Nama Lengkap Anak *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Ahmad Fauzi"
                    value={form.childName}
                    onChange={(e) => setForm({ ...form, childName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                      Usia Anak *
                    </label>
                    <input
                      required
                      type="number"
                      min={4}
                      max={20}
                      placeholder="Contoh: 10"
                      value={form.childAge}
                      onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                      Tingkat Sekolah *
                    </label>
                    <select
                      required
                      value={form.childLevel}
                      onChange={(e) => setForm({ ...form, childLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                    >
                      <option value="">Pilih...</option>
                      <option value="CALISTUNG">Pra-SD / Calistung</option>
                      <option value="SD">SD</option>
                      <option value="SMP">SMP</option>
                      <option value="SMA">SMA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                    Nama Orang Tua / Wali *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Bapak Suharto"
                    value={form.parentName}
                    onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                    Nomor HP / Telepon *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="Contoh: 0812-3456-7890"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label className="block text-[#0B3175] mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
                    Buat Username Login *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: fauzi_batubara"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0B3175]/20 focus:outline-none focus:ring-2 focus:ring-[#0B3175]/30 bg-[#f5f7fa] text-[#0B3175]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem" }}
                  />
                  <p className="mt-1 text-[#4a6098]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.73rem" }}>
                    Username ini digunakan untuk login ke dashboard orang tua.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-xl border-2 border-[#0B3175] text-[#0B3175] flex items-center justify-center gap-2 hover:bg-[#0B3175]/5 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  <ChevronLeft size={18} /> Kembali
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#0B3175] text-[#FBBF24] hover:bg-[#0a2d6b] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
