import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0a0c1a]/90 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-white">MITEC</span>
          <span className="text-[10px] text-blue-400 font-bold tracking-[0.3em] uppercase">Group</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#tecnologie" className="hover:text-white transition-colors">Tecnologie</a>
          <a href="#network" className="hover:text-white transition-colors">Network</a>
          <a href="#qualita" className="hover:text-white transition-colors">Qualità</a>
          <a href="#contatti" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;