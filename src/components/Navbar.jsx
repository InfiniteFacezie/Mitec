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
      isScrolled ? 'bg-[#0a0c1a]/95 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col cursor-default">
          <span className="text-2xl font-black tracking-tighter text-white">MITEC</span>
          <span className="text-[10px] text-blue-400 font-bold tracking-[0.3em] uppercase leading-none">Group</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/60">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#network" className="hover:text-white transition-colors">The Network</a>
          <a href="#technologies" className="hover:text-white transition-colors">Technologies</a>
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#quality" className="hover:text-white transition-colors">Quality</a>
          <a href="#contacts" className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;