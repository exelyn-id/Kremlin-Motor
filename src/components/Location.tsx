import { MapPin, Clock, Phone } from 'lucide-react';
import { WA_NUMBER } from '../constants';

export default function Location() {
  return (
    <section id="lokasi" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-zinc-600 uppercase text-[10px] tracking-[0.4em] font-black mb-4 block">Lokasi & Jam Buka</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Kunjungi Kami</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">Jl. Veteran No. 45, Banjarmasin</p>
                <p className="text-xs text-zinc-500 mt-1">Kalimantan Selatan, Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">Senin — Sabtu</p>
                <p className="text-xs text-orange-600 mt-1 uppercase font-bold">08:00 - 17:00 WITA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">Telepon / WhatsApp</p>
                <p className="text-xs text-zinc-500 mt-1">+{WA_NUMBER}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="w-full h-64 lg:h-full min-h-[300px] bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i15!2i26250!3i16124!2m3!1e0!2sm!3i637042511!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!5f2')] opacity-30 grayscale contrast-125 bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 bg-black/80 px-4 py-2 rounded">Peta Lokasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
