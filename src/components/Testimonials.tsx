import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pelanggan Setia',
    content: 'Servis di Kremlin Motor sangat transparan. Montirnya ramah dan menjelaskan detail kerusakan sebelum dikerjakan. Motor saya Vario 150 jadi enak lagi tarikannya.',
    highlight: true,
  },
  {
    name: 'Ahmad Faisal',
    role: 'Ojek Online',
    content: 'Pengerjaan cepat dan rapi. Cocok banget buat saya yang tiap hari narik ojol. Harga sparepart juga wajar dan asli. Mantap pokoknya!',
    highlight: false,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Karyawan Swasta',
    content: 'Baru pertama kali servis ke sini karena rekomendasi teman. Ruang tunggunya nyaman dan mekaniknya cekatan. Ganti oli dan servis rutin nggak pakai lama.',
    highlight: false,
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-2 text-orange-500">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-xs">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-24 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-zinc-600 uppercase text-[10px] tracking-[0.4em] font-black mb-4 block">Bukti Sosial</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Apa Kata Mereka</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`border-l-2 ${testimonial.highlight ? 'border-orange-600' : 'border-zinc-800'} pl-6 py-2`}
            >
              <StarRating />
              <p className="text-zinc-300 italic text-sm mb-4 leading-relaxed">
                '{testimonial.content}'
              </p>
              <div>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">— {testimonial.name}</p>
                <p className="text-zinc-700 text-[10px] font-bold uppercase mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
