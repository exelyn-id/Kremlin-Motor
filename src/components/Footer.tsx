export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
          <div>Copyright &copy; {currentYear} Bengkel Kremlin Motor.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Facebook</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
