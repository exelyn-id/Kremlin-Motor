import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { WA_LINK } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Ulasan', href: '#ulasan' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold italic text-white">K</div>
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              Kremlin<span className="text-orange-600">Motor</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-xs font-medium text-zinc-400 uppercase tracking-widest hover:text-orange-500 hover:bg-zinc-900 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-5 py-3 rounded-md text-xs font-bold uppercase tracking-widest border border-zinc-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
