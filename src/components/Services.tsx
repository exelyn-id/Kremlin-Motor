import { Wrench, Droplet, Zap, Settings } from 'lucide-react';

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
    <section id="layanan" className="py-24 bg-zinc-950 relative border-b border-zinc-900">
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
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
            >
              <div className="mb-4">
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
