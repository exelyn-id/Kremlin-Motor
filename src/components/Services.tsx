import { Wrench, Droplet, Zap, Settings, Cog, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    title: 'Servis Rutin & Tune Up',
    description: 'Pengecekan menyeluruh dan penyetelan ulang untuk mengembalikan performa optimal.',
  },
  {
    icon: <Droplet className="w-6 h-6 text-orange-600" />,
    title: 'Ganti Oli & Cairan',
    description: 'Penggantian oli mesin, oli gardan, minyak rem dengan produk berkualitas.',
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    title: 'Perbaikan Kelistrikan',
    description: 'Diagnosis dan perbaikan masalah aki, lampu, starter, dan sistem injeksi.',
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-600" />,
    title: 'Turun Mesin / Overhaul',
    description: 'Perbaikan berat pada komponen internal mesin oleh mekanik berpengalaman.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-zinc-950 relative border-b border-zinc-900 overflow-hidden">
      
      {/* ================= STIKER DEKORASI BACKGROUND ================= */}
      {/* Pola Titik Industrial */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none"></div>
      
      {/* Stiker Gir Kanan Atas */}
      <div className="absolute -top-20 -right-10 opacity-[0.03] text-white transform rotate-45 pointer-events-none">
        <Cog size={400} strokeWidth={1} />
      </div>

      {/* Stiker Alat Kiri Bawah */}
      <div className="absolute -bottom-24 -left-16 opacity-[0.03] text-white transform -rotate-12 pointer-events-none">
        <PenTool size={350} strokeWidth={1} />
      </div>
      {/* ============================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-zinc-600 uppercase text-[10px] tracking-[0.4em] font-black mb-4 block">Layanan Kami</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Solusi Lengkap</h2>
          <p className="text-zinc-400 font-light max-w-2xl">
            Perawatan dan perbaikan sepeda motor Anda dikerjakan dengan standar tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl hover:bg-zinc-800/80 hover:border-orange-600/50 transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-sm uppercase mb-2 text-white">{service.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
