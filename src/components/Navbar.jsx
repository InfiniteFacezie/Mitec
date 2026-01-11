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
      isScrolled ? 'bg-[#0a0c1a]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-white">μtec MITEC [cite: 554]</span>
          <span className="text-[9px] text-blue-400 font-bold tracking-[0.3em] uppercase leading-none opacity-60">Group</span>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/60">
          <a href="#" className="hover:text-white transition-colors">Home</a> [cite: 538]
          <a href="#about" className="hover:text-white transition-colors">About</a> [cite: 539]
          <div className="relative group">
            <button className="hover:text-white transition-colors">Technologies ▼</button> [cite: 589]
            <div className="absolute hidden group-hover:block bg-[#11142b] border border-white/5 p-4 w-48 shadow-2xl top-full">
               <a href="#microwave" className="block py-2 hover:text-blue-400">Microwave</a>
               <a href="#procurement" className="block py-2 hover:text-blue-400">Procurement</a>
               <a href="#vacuum" className="block py-2 hover:text-blue-400">Vacuum</a>
            </div>
          </div>
          <a href="#plasma-matrix" className="hover:text-white transition-colors">Products</a> [cite: 543]
          <a href="#quality" className="hover:text-white transition-colors">Quality</a> [cite: 544]
          <a href="#contacts" className="bg-blue-600 text-white px-5 py-2 rounded-sm hover:bg-white hover:text-blue-600 transition-all">Contact</a> [cite: 545]
        </div>
      </div>
    </nav>
  );
};

export default Navbar;