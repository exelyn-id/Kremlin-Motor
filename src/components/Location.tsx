import { MapPin, Clock, Phone, Map } from 'lucide-react';
import { WA_NUMBER } from '../constants';

export default function Location() {
  return (
    <section id="lokasi" className="py-24 bg-black relative overflow-hidden">
      
      {/* ================= DEKORASI BACKGROUND ================= */}
      {/* Pola Kotak-kotak (Grid) Tipis */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Watermark Ikon Peta Raksasa di Kanan Bawah */}
      <div className="absolute -bottom-24 -right-10 opacity-[0.03] text-white pointer-events-none transform -rotate-12">
        <Map size={450} strokeWidth={1} />
      </div>
      {/* ======================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-orange-600 uppercase text-[10px] tracking-[0.4em] font-black mb-4 block">Lokasi & Jam Buka</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Kunjungi Kami</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-4 flex flex-col justify-center">
            
            {/* Info Item 1: Alamat */}
            <div className="flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 bg-zinc-900 rounded flex items-center justify-center shrink-0 group-hover:bg-orange-600/10 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-zinc-500 group-hover:text-orange-600 transition-colors duration-300" />
              </div>
              <div className="pt-1">
                <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Jl. Pramuka Depan GG.Delima seberang Dealer Yamaha, kec. Banjarmasin, Kota Banjarmasin</p>
                <p className="text-xs text-zinc-500 mt-1">Kalimantan Selatan, Indonesia</p>
              </div>
            </div>

            {/* Info Item 2: Jam Buka */}
            <div className="flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 bg-zinc-900 rounded flex items-center justify-center shrink-0 group-hover:bg-orange-600/10 transition-colors duration-300">
                <Clock className="w-6 h-6 text-zinc-500 group-hover:text-orange-600 transition-colors duration-300" />
              </div>
              <div className="pt-1">
                <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Senin — Sabtu</p>
                <p className="text-xs text-orange-600 mt-1 uppercase font-bold">08:00 - 17:00 WITA</p>
              </div>
            </div>

            {/* Info Item 3: Kontak */}
            <div className="flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 bg-zinc-900 rounded flex items-center justify-center shrink-0 group-hover:bg-orange-600/10 transition-colors duration-300">
                <Phone className="w-6 h-6 text-zinc-500 group-hover:text-orange-600 transition-colors duration-300" />
              </div>
              <div className="pt-1">
                <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Telepon / WhatsApp</p>
                <p className="text-xs text-zinc-500 mt-1">+{WA_NUMBER}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          {/* Tambahan efek Glow dan Grayscale di Peta */}
          <div className="w-full h-64 lg:h-full min-h-[300px] bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden relative group hover:border-orange-600/50 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-10 rounded-xl"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0293342367295!2d114.62650207370444!3d-3.3429134413300416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de425ffa0de40b1%3A0x8572095cec7cd90a!2sBengkel%20kremlin%20motor!5e0!3m2!1sen!2sid!4v1787654178379!5m2!1sen!2sid"
              className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Bengkel Kremlin Motor"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
