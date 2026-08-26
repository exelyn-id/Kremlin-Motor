import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Driver Ojol',
    content: 'Servis di Kremlin Motor mantap! Tarikan motor jadi enteng lagi. Mekaniknya jujur dan ngasih tau part mana yang emang harus diganti tanpa basa-basi.',
    rating: 5,
  },
  {
    name: 'Andi Pratama',
    role: 'Karyawan Swasta',
    content: 'Ganti oli dan servis rutin selalu di sini. Harganya transparan, mekaniknya cekatan. Sukses terus untuk Kremlin Motor Banjarmasin!',
    rating: 5,
  },
  {
    name: 'Siti Rahma',
    role: 'Mahasiswa',
    content: 'Awalnya takut ke bengkel sendirian, tapi di sini dijelasin dengan bahasa yang gampang dimengerti. Puas banget sama pelayanannya yang ramah.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden">
      
      {/* ================= DEKORASI BACKGROUND ================= */}
      {/* Pola Plat Besi (Stripes) Tipis */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}>
      </div>
      
      {/* Watermark Ikon Kutipan Raksasa di Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-white pointer-events-none">
         <MessageSquareQuote size={500} strokeWidth={1} />
      </div>
      {/* ======================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 uppercase text-[10px] tracking-[0.4em] font-black mb-4 block">Ulasan Pelanggan</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Apa Kata Mereka?</h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto">
            Kepercayaan pelanggan adalah bahan bakar utama kami untuk terus memberikan pelayanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-zinc-950 border border-zinc-800 rounded-xl relative group hover:bg-zinc-900 hover:border-orange-600/50 transition-all duration-300"
            >
              {/* Ikon Kutipan Kecil di Pojok Kanan Atas Kartu */}
              <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-orange-600/20 transition-colors duration-300 transform group-hover:scale-110" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-600 text-orange-600" />
                ))}
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-white font-bold uppercase text-sm">{testimonial.name}</h4>
                <p className="text-zinc-600 text-xs mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
