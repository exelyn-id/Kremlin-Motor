import { WA_LINK } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Image - Responsif untuk rasio 9:16 */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center md:bg-[length:auto_100%] md:bg-right opacity-40 md:opacity-100"></div>
        
        {/* Overlay Gradasi agar teks tetap kontras */}
        {/* Mobile: Gradasi dari bawah ke atas. Desktop: Gradasi dari kiri ke kanan */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="text-orange-600 font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
            Banjarmasin Premiere Workshop
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-6 uppercase italic">
            Servis Motor <br/>
            <span className="text-zinc-600">
              Andalan
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed font-light">
            Cepat, Transparan, & Berkualitas. Rawat motor Anda bersama mekanik ahli di Bengkel Kremlin Motor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-black uppercase text-sm tracking-widest transition-all"
            >
              Booking Servis Sekarang
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-8 py-4 rounded-lg font-black uppercase text-sm tracking-widest transition-all border border-zinc-800"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
