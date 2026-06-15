const schedules = [
  {
    wave: "Gelombang 1",
    time: "07.30 – 09.00 WIB",
    days: "Senin, Rabu, Jumat",
    programs: ["Matematika SD", "Calistung"],
    slots: 4,
  },
  {
    wave: "Gelombang 2",
    time: "10.00 – 11.30 WIB",
    days: "Selasa, Kamis, Sabtu",
    programs: ["Bahasa Inggris", "Matematika SMP/SMA"],
    slots: 6,
  },
  {
    wave: "Gelombang 3",
    time: "13.00 – 14.30 WIB",
    days: "Senin, Rabu, Jumat",
    programs: ["Les Ngaji (Iqro & Al-Qur'an)", "Calistung"],
    slots: 8,
  },
  {
    wave: "Gelombang 4",
    time: "15.30 – 17.00 WIB",
    days: "Selasa, Kamis, Sabtu",
    programs: ["Matematika SMP/SMA", "Bahasa Inggris"],
    slots: 5,
  },
];

export function Schedule() {
  return (
    <section id="jadwal" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full bg-[#0B3175]/10 text-[#0B3175] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em" }}
          >
            JADWAL KELAS
          </span>
          <h2
            className="text-[#0B3175]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            Pilih Jadwal yang Cocok
          </h2>
          <p
            className="mt-3 text-[#4a6098] max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Tersedia 4 gelombang jadwal per minggu. Pilih saat mendaftar sesuai waktu luang anak Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {schedules.map((s) => (
            <div
              key={s.wave}
              className="bg-white rounded-2xl p-6 border border-[#0B3175]/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="text-[#FBBF24]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem" }}
                  >
                    {s.wave}
                  </p>
                  <p
                    className="text-[#0B3175]"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.15rem" }}
                  >
                    {s.time}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      background: s.slots > 5 ? "#dcfce7" : "#fef9c3",
                      color: s.slots > 5 ? "#15803d" : "#a16207",
                    }}
                  >
                    {s.slots} slot tersedia
                  </span>
                </div>
              </div>

              <p
                className="text-[#4a6098] mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem" }}
              >
                {s.days}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.programs.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1 rounded-lg bg-[#0B3175]/8 text-[#0B3175]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
