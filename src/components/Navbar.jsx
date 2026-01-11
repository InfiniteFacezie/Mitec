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
      isScrolled ? 'bg-[#0a0c1a]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">μtec MITEC</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <div className="relative group">
            <button className="hover:text-white transition-colors flex items-center gap-1">Technologies ▼</button>
            <div className="absolute hidden group-hover:block bg-[#11142b] border border-white/10 p-4 w-48 shadow-2xl top-full">
              <a href="#microwave" className="block py-2 hover:text-blue-400">Microwave</a>
              <a href="#procurement" className="block py-2 hover:text-blue-400">Procurement</a>
              <a href="#vacuum" className="block py-2 hover:text-blue-400">Vacuum</a>
            </div>
          </div>
          <a href="#plasma-matrix" className="hover:text-white transition-colors">Products</a>
          <a href="#quality" className="hover:text-white transition-colors">Quality</a>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-all">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;